const API_URL = process.env.EXPO_PUBLIC_API_URL;

// This is a simple example of an API endpoint that returns a JSON response.
export async function GET(request: Request) {
  if (!API_URL) return;
  const token = request.headers.get('Authorization');

  if (!token) return;

  try {
    const response = await fetch(`${API_URL}/todos`, {
      headers: {
        Authorization: token,
      },
    });

    if (!response.ok) {
      return Response.json(
        { error: response?.statusText },
        { status: response?.status }
      );
    }

    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: 'Failed to fetch todo' }, { status: 500 });
  }
}
