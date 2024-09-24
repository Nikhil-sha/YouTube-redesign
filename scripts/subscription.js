import Params from './parameters.js';

const subscription = document.getElementById("subscription");
const notification = document.getElementById("notification");

const pageType = Params.get('type');
if (pageType == 'notifications') {
	subscription.remove();
} else {
	notification.remove();
}