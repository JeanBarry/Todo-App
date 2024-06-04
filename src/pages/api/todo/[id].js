import routes from '../../../backend/routes/api';
import urls from '../../../backend/routes/constants';

export default async function handler(req, res) {
  const { method, body, query } = req;
  const { id } = query;

  const route = routes[urls.todoIdUrl];
  const strategy = route ? route[method] : null;

  if (strategy) {
    if (method === 'PUT') {
      const result = await strategy(id, body);
      res.status(200).json(result);
    }
    if (method === 'DELETE') {
      const result = await strategy(id);
      res.status(200).json(result);
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
