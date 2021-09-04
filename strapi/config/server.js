module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url:'http://213.139.211.77/api',
  admin: {
    autoOpen:false,
    auth: {
      secret: env('ADMIN_JWT_SECRET', '93825d2c44e277852331dc265c9c7b2f'),
    },
  },
})
