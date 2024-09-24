function getParams() {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams;
}

let Params = getParams();
export default Params;