function make(...args) {
    const array = args;

	function keep(...args) {
		if (typeof args[0] != 'function') {
            args.forEach(arg => array.push(arg));
            return keep;
        } else {
            return array.reduce((acc, num) => args[0](acc, num));
        }
    };

    return keep;
}