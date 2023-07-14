import todoModel from '../todo.model';

describe('Todo model', () => {
  test('Todo model should exist', () => {
    expect(todoModel).toBeDefined();
  });
  test('Todo model should have set properties', () => {
    expect(todoModel.schema.obj).toHaveProperty('content');
    expect(todoModel.schema.obj).toHaveProperty('done');
    expect(todoModel.schema.obj).toHaveProperty('createdAt');
    expect(todoModel.schema.obj).toHaveProperty('completedAt');
  });
});
