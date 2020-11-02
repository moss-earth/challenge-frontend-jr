export const goToOrdersList = (history) => {
    history.push(`/historico`)
}

export const goToApprovalList = (history) => {
    history.push('/aprovar')
}

export const goToOrder = (history, id) => {
    history.push(`/ordem/${id}`)
}

export const goBack = (history) => {
    history.goBack()
}
