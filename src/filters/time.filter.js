export default function getTime(date) {
    return new Date(date).toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'});
}