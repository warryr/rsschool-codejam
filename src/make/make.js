function make(...args) {
    const array = args;

	function keep(...args) {
		if (typeof args[0] != 'function') {
            args.forEach(arg => array.push(arg));
            return keep;
        } else {
            return array.reduce((sum, num) => sum += num);
        }
    };
    
    return keep;
}