// Функция для исскуственной задержки
export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// Ассинхронная функция получения данных
export const fetchData = async (callback) => {
  const responce = await callback();

  if (responce.status === 200) {
    return await responce.data;
  }

  throw new Error("Ошибка при получении");
};
