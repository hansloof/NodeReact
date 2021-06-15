export async function getAllPrograms() {
  const response = await fetch("/api/programs");
  return await response.json();
}

export async function createProgram(postData) {
  const response = await fetch(`/api/program`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });
  return await response.json();
}
