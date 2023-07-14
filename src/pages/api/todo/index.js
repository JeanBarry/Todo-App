import routes from '../../../backend/routes/api';
import urls from '../../../backend/routes/constants';

export default async function handler(req, res) {
  const { method, body } = req;

  const route = routes[urls.todoBaseUrl];
  const strategy = route ? route[method] : null;

  if (strategy) {
    const result = await strategy(body);
    res.status(200).json(result);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
