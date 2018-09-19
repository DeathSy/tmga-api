module.exports = function (app) {
  function modifyResponse(ctx, model, next) {
    ctx.res.set('X-Total-Count', 1)
    next()
  }

  app.models.Subject.afterRemote('**', modifyResponse)
}
