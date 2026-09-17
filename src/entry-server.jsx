import { renderToReadableStream } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import App from "./App.jsx";

export async function render(url) {
  const stream = await renderToReadableStream(
    <MemoryRouter initialEntries={[url]}>
      <App />
    </MemoryRouter>
  );
  await stream.allReady;
  return await new Response(stream).text();
}