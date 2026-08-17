const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export async function fetchApi<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${API_URL}${endpoint}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}
