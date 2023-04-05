export const isCorrect = (guess, country) => {
    if (guess === country) { return true }

    switch (country) {
        case 'antigua and barbuda':
            if (guess.includes('antigua') &&
                guess.includes('barbuda')) { return true }
            break
        
        case 'bosnia and herzegovina':
            if (guess.includes('bosnia') ||
                guess.includes('herzegovina')) { return true }
            break

        case 'central african republic':
            if (guess === 'car') { return true }
            break

        case 'democratic republic of the congo':
            if (guess === 'drc') { return true }
            break

        case 'dominican republic':
            if (guess === 'dr') { return true }
            break

        case 'guinea-bissau':
            if (guess === 'guinea bissau') { return true }
            break

        case 'ivory coast':
            if (guess === "cote d'ivoire") { return true }
            break

        case 'netherlands':
            if (guess === 'the netherlands') { return true }
            break

        case 'north macedonia':
            if (guess === 'macedonia') { return true }
            break

        case 'republic of the congo':
            if (guess === 'congo') { return true }
            break

        case 'the bahamas':
            if (guess === 'bahamas') { return true }
            break

        case 'the gambia':
            if (guess === 'gambia') { return true }
            break

        case 'united arab emirates':
            if (guess === 'uae') { return true }
            break

        case 'united kingdom':
            if (guess === 'uk' ||
                guess.includes('britain')) { return true }
            break

        case 'united states':
            if (guess === 'usa' ||
                guess.includes('america')) { return true }
            break
        default: return false
    }
}