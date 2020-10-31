export const transformDate = (date) => {
    if(!date){
        return ''
    } 
    const [year, month, day] = date.split('-')
    return `${day}/${month}/${year}`
}

export const transformStatus = (status) => {
    if(!status){
        return ''
    }
    const map = {
        "under_approval": "Sob Aprovação",
        "approved": "Aprovado",
        "rejected": "Rejeitado"
    }
    return map[status]
}
