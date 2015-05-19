import DS from "ember-data";

 var Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todo.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Get Some',
      isCompleted: true
    },
    {
      id: 2,
      title: 'Rad Man',
      isCompleted: false
    },
    {
      id: 3,
      title: 'Una Mas',
      isCompleted: false
    }
  ]
});

export default Todo;

