function capitalizeName(name) {
    let firstName = name.first
    let lastName = name.last
    
    let fullName = firstName[0].toUpperCase() + firstName.slice(1) + ' ' + lastName[0].toUpperCase() + lastName.slice(1)

    return fullName
}

export { capitalizeName }