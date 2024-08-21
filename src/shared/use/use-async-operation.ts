import { ref } from "vue";

enum FetchState {
  loading,
  success,
  error,
  initial
}

export function useAsyncOperation(asyncOperation) {
  const fetchState = ref(FetchState.initial);
  const data = ref(null);
  const error = ref(null);

  const execute = async (...args) => {
    fetchState.value = FetchState.loading;
    error.value = null;
    data.value = null;

    try {
      data.value = await asyncOperation(...args);
      fetchState.value = FetchState.success;
      return data.value;
    } catch (err) {
      error.value = err;
      fetchState.value = FetchState.error;
    }
  };

  return {
    data,
    error,
    execute,
    fetchState,
    isLoading: computed(() => fetchState.value === FetchState.loading)
  };
}
