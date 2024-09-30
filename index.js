// const { request } = require('undici');
// const express = require('express');
// const { clientId, clientSecret, port } = require('./configs.json');
import { request } from 'undici';
import express from 'express';
// import config from './config.json';
import { configs } from './config.js';
import { UserModel } from './schema.js';

const app = express();

app.get('/', async ({ query }, response) => {
	const { code } = query;

	if (code) {
		try {
			const tokenResponseData = await request('https://discord.com/api/oauth2/token', {
				method: 'POST',
				body: new URLSearchParams({
					client_id: configs.clientId,
					client_secret: configs.clientSecret,	
					code,
					grant_type: 'authorization_code',
					redirect_uri: `http://localhost:${configs.port}`,
					scope: 'identify'
				}).toString(),
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			});

			const oauthData = await tokenResponseData.body.json();
			console.log('---------------------------------',oauthData);
			const userResult = await request('https://discord.com/api/users/@me', {
				headers: {
					authorization: `${oauthData.token_type} ${oauthData.access_token}`,
				},
			});

			const userResultData = await userResult.body.json();
			console.log('-----------------------------------',userResultData);

			const userData = {
				id: userResultData.id,
				username: userResultData.username,
				discriminator: userResultData.discriminator,
				avatar: userResultData.avatar,
				public_flags: userResultData.public_flags,
				flags: userResultData.flags,
				banner: userResultData.banner,
				accent_color: userResultData.accent_color,
				global_name: userResultData.global_name,
				avatar_decoration_data: userResultData.avatar_decoration,
				banner_color: userResultData.banner_color,
				clan: userResultData.clan,
				mfa_enabled: userResultData.mfa_enabled,
				locale: userResultData.locale,
				premium_type: userResultData.premium_type,
				email: userResultData.email,
				verified: userResultData.verified,
				accessToken: oauthData.access_token,
				refreshToken: oauthData.refresh_token,
				tokenType: oauthData.token_type,
				expiresIn: oauthData.expires_in,
				scope: oauthData.scope,
			  };

			  const user = new UserModel(userData);
      await user.save();
      console.log('User saved to MongoDB');

		} catch (error) {
			// NOTE: An unauthorized token will not throw an error
			// tokenResponseData.statusCode will be 401
			console.error(error);
		} 
	}

	return response.sendFile('index.html', { root: '.' });
});

app.listen(configs.port, () => console.log(`App listening at http://localhost:${configs.port}`));
