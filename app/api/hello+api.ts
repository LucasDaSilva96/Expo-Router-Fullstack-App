// This is a simple example of an API endpoint that returns a JSON response.
// Example: http://localhost:8081/api/hello

export function GET(request: Request) {
  return Response.json({ hello: 'world' });
}
