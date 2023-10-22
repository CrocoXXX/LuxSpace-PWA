export function numberFormat(price) {
    const curreny = Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })

    return curreny.format(price)
}