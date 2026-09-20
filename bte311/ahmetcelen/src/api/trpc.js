const BASE = "https://geyikapi.acmhacettepe.com/api/trpc";

function unwrapTrpc(res) {
  const root = Array.isArray(res) ? res[0] : res;

  return (
    root?.result?.data?.json ??
    root?.result?.data ??
    root?.result ??
    root
  );
}

function buildTrpcBatchUrl(procedure, input) {
  const url = new URL(`${BASE}/${procedure}`);
  url.searchParams.set("batch", "1");

  const payload = { 0: { json: input ?? null } };
  url.searchParams.set("input", JSON.stringify(payload));

  return url.toString();
}

async function callTrpcGet(procedure, input) {
  const url = buildTrpcBatchUrl(procedure, input);

  const res = await fetch(url, {
    method: "GET",
    headers: { accept: "application/json" },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Istek basarisiz (${res.status}) ${text}`);
  }

  const json = await res.json();
  return unwrapTrpc(json);
}

export function getMenu(input) {
  return callTrpcGet("menu.getMenu", input);
}

export function getRingSchedule(input) {
  return callTrpcGet("ring.getSchedule", input);
}
