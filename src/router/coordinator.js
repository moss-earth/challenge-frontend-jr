export const goToOrder = (history, id) => {
    history.push(`/ordem/${id}`)
}

export const goToApprovalList = (history) => {
    history.push('/aprovar')
}

export const goBack = (history) => {
    history.goBack()
}
