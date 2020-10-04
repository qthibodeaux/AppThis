
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {id: 1, uuid: '001', content: 'Jess', time: '08:25:30.634458', date: '05-17-2020', place: 'Dallas', phone_number: '214-597-8581'},
        {id: 2, uuid: '002', content: 'Q', time: '08:25:30.634458', date: '04-16-2020', place: 'Hempstead', phone_number: '979-826-8840'},
        {id: 3, uuid: '003', content: 'TylerJames', time: '08:25:30.634458', date: '08-12-2020', place: 'Houston', phone_number: '281-734-8561'},
      ]);
    });
};