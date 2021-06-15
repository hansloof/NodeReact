export async function getAllPrograms() {
  const response = await fetch("/api/programs");
  return await response.json();
}

export async function getProgram() {
  const response = await fetch("/api/program/:id");
  return await response.json();
}

export async function createProgram(data) {
  const response = await fetch(`/api/program`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await response.json();
}
