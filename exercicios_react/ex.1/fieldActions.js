export function changeValue(e){
    console.log('changeValue')
    return{
        type: 'VALUE_CHANGED',
        payload: e.target.value // Payload = dado que vem junto de uma ação
    }
}