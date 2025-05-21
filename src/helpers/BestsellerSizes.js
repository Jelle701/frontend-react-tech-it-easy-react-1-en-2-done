function formatSizes(tv) {
    return tv.availableSizes
        .map(size => `${size} inch (${Math.round(size * 2.54)} cm)`)
        .join(" | ");
}

export default formatSizes;
