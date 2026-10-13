/** Small typed wrapper for the existing backend. Add endpoint-specific methods as its API is connected. */
export function useApi() {
  const config = useRuntimeConfig()

  function request<T>(path: string, options: Parameters<typeof $fetch<T>>[1] = {}) {
    return $fetch<T>(path, {
      ...options,
      baseURL: config.public.apiBase,
    })
  }

  return { request }
}
