
module.exports = bookshelf => {
  bookshelf.Model = bookshelf.Model.extend({
    upsert (data) {
      // const key = [].concat(this.constructor.upsertKey || this.idAttribute)
      const clone = this.clone()
      clone.fetch()
      .then((match) => {
        if (match) {
          return this.save(data, { method: 'update' })
        }
        return this.save(data, { method: 'insert' })
      })
    }
  })
}