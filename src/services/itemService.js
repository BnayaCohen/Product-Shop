import items from '../data/api.json'

export const itemService = {
	getItems,
	getById,
}

function getItems(filterBy = {}) {
	const allItems = items.data
	if (!filterBy.date) return allItems

	const dayOfWeek = filterBy.date.getDay() + 1
	return allItems.filter(item => {

		// Check if the item could be made
		if (item.times.makeDays > _getDaysDiff(filterBy.date)) return false

		// Check if the item is available by day of the week
		if (!item.times.availableDaysOfWeek.includes(dayOfWeek)) return false

		// Check if the item has excluding dates
		const excludeDates = item.times.excludeDates.map(d => new Date(d.date))
		if (_isIncludingDate(excludeDates, filterBy.date)) return false

		return true
	})
}

function getById(itemId) {
	return items.data.find(item => item.id === itemId)
}

function _getDaysDiff(date) {
	const now_ms = new Date().getTime();
	const date_ms = date.getTime();
	const difference_ms = date_ms - now_ms;
	
	return Math.round(difference_ms / (1000 * 3600 * 24));
}

function _isIncludingDate(datesArray, date) {
	for (let i = 0; i < datesArray.length; i++) {

		if (datesArray[i].getDate() === date.getDate() &&
			datesArray[i].getMonth() === date.getMonth() &&
			datesArray[i].getFullYear() === date.getFullYear()) {

			return true
		}
	}
	return false
}