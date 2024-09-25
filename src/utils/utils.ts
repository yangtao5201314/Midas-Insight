// 封装毫秒时间转换方法
export const formatTimestampWithMicroseconds = (timestamp: number)=> {
    // 提取秒和微秒部分
    const seconds = Math.floor(timestamp);
    const microseconds = Math.round((timestamp - seconds) * 1000);
    const date = new Date(seconds * 1000);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const secondsFormatted = String(date.getSeconds()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}:${secondsFormatted}.${String(
      microseconds
    ).padStart(3, "0")}`;
  }