module.exports = ({ env }) => {
  console.log(process.env.NODE_ENV)
  if (process.env.NODE_ENV === 'production') {
    return {
      host: env('HOST', '0.0.0.0'),
      port: env.int('PORT', 1337),
      url: 'https://losevonline.ru/api',
      admin: {
        autoOpen: false,
        auth: {
          secret: env('ADMIN_JWT_SECRET', '93825d2c44e277852331dc265c9c7b2f'),
        },
      },
    }
  } else {
    return {
      host: env('HOST', '0.0.0.0'),
      port: env.int('PORT', 1337),
      admin: {
        auth: {
          secret: env('ADMIN_JWT_SECRET', '93825d2c44e277852331dc265c9c7b2f'),
        },
      },
    }
  }
}
