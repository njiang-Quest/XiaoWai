/**
 * 这个生成文档的时候有问题
 * 下面这些方法都是全局函数，不用加命名空间便可调用
 * @class window
 * @static
 */

/**
 * @method isUndefined
 * @param {Any} object
 * @return {Boolean}
 */

function isUndefined( object )
{
	return typeof object == 'undefined';
}

/**
 * @method isString
 * @param {Any} object
 * @return {Boolean}
 */

function isString( object )
{
    return typeof object == 'string';
}

/**
 * @method isElement
 * @param {Any} object
 * @return {Boolean}
 */

function isElement( object )
{
	return object && object.nodeType == 1;
}

/**
 * @method isFunction
 * @param {Any} object
 * @return {Boolean}
 */

function isFunction( object )
{
	return typeof object == 'function';
}

/**
 * @method isObject
 * @param {Any} object
 * @return {Boolean}
 */

function isObject( object )
{
	return typeof object == 'object';
}

/**
 * @method isArray
 * @param {Any} object
 * @return {Boolean}
 */

function isArray( object )
{
    return Object.prototype.toString.call( object ) === '[object Array]';
}

/**
 * @method isNumber
 * @param {Any} object
 * @return {Boolean}
 */

function isNumber( object )
{
	return typeof object == 'number';
}

/**
 * modify by shuangbao.li at 2010.4.26
 * extend an object
 * @method $extend
 * @param {Object} object the object for extend
 */

function $extend(){
	var result = arguments[0];
	for(var i=1; i<arguments.length; i++){
		if(typeof arguments[i] == 'object'){
			for(var key in arguments[i])
				result[key] = arguments[i][key];
		}
	}
	return result;
}

var extendObject = $extend;


/**
 * create an DOM element
 * @method $element
 * @param {String} tagName
 * @return {HTMLElement}
 */

function $element(tag){
	return $(document.createElement(tag));
}


/**
 * @module global
 */
/*
 *访问renren.com时会遇到跨域访问location没有权限的问题(IE6/IE7)
 *需要try/catch，如果没有权限，则放到执行队列(setTimeout)
 *详细请见http://jadyyang.blog.sohu.com/145340845.html
 */
(function() {
    try {
        window.XN = extendObject({}, {
            env: {
                shortSiteName: '人人',
                siteName: '人人网',
                domain: window.location.hostname.split('.').reverse().slice(0, 2).reverse().join('.')
            }
        }, window.XN);
    }
    catch (e) {
        setTimeout(arguments.callee, 0);
    }
})();

try{
    document.domain = String(XN.env.domain);
}catch(e){}


/**
* 引入Sizzle
*/
/*
 * Sizzle CSS Selector Engine - v1.0
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){
var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
	done = 0,
	toString = Object.prototype.toString,
	hasDuplicate = false,
	baseHasDuplicate = true;

// Here we check if the JavaScript engine is using some sort of
// optimization where it does not always call our comparision
// function. If that is the case, discard the hasDuplicate value.
//   Thus far that includes Google Chrome.
[0, 0].sort(function(){
	baseHasDuplicate = false;
	return 0;
});

var Sizzle = function(selector, context, results, seed) {
	results = results || [];
	context = context || document;

	var origContext = context;

	if ( context.nodeType !== 1 && context.nodeType !== 9 ) {
		return [];
	}
	
	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	var parts = [], m, set, checkSet, extra, prune = true, contextXML = Sizzle.isXML(context),
		soFar = selector, ret, cur, pop, i;
	
	// Reset the position of the chunker regexp (start from head)
	do {
		chunker.exec("");
		m = chunker.exec(soFar);

		if ( m ) {
			soFar = m[3];
		
			parts.push( m[1] );
		
			if ( m[2] ) {
				extra = m[3];
				break;
			}
		}
	} while ( m );

	if ( parts.length > 1 && origPOS.exec( selector ) ) {
		if ( parts.length === 2 && Expr.relative[ parts[0] ] ) {
			set = posProcess( parts[0] + parts[1], context );
		} else {
			set = Expr.relative[ parts[0] ] ?
				[ context ] :
				Sizzle( parts.shift(), context );

			while ( parts.length ) {
				selector = parts.shift();

				if ( Expr.relative[ selector ] ) {
					selector += parts.shift();
				}
				
				set = posProcess( selector, set );
			}
		}
	} else {
		// Take a shortcut and set the context if the root selector is an ID
		// (but not if it'll be faster if the inner selector is an ID)
		if ( !seed && parts.length > 1 && context.nodeType === 9 && !contextXML &&
				Expr.match.ID.test(parts[0]) && !Expr.match.ID.test(parts[parts.length - 1]) ) {
			ret = Sizzle.find( parts.shift(), context, contextXML );
			context = ret.expr ? Sizzle.filter( ret.expr, ret.set )[0] : ret.set[0];
		}

		if ( context ) {
			ret = seed ?
				{ expr: parts.pop(), set: makeArray(seed) } :
				Sizzle.find( parts.pop(), parts.length === 1 && (parts[0] === "~" || parts[0] === "+") && context.parentNode ? context.parentNode : context, contextXML );
			set = ret.expr ? Sizzle.filter( ret.expr, ret.set ) : ret.set;

			if ( parts.length > 0 ) {
				checkSet = makeArray(set);
			} else {
				prune = false;
			}

			while ( parts.length ) {
				cur = parts.pop();
				pop = cur;

				if ( !Expr.relative[ cur ] ) {
					cur = "";
				} else {
					pop = parts.pop();
				}

				if ( pop == null ) {
					pop = context;
				}

				Expr.relative[ cur ]( checkSet, pop, contextXML );
			}
		} else {
			checkSet = parts = [];
		}
	}

	if ( !checkSet ) {
		checkSet = set;
	}

	if ( !checkSet ) {
		Sizzle.error( cur || selector );
	}

	if ( toString.call(checkSet) === "[object Array]" ) {
		if ( !prune ) {
			results.push.apply( results, checkSet );
		} else if ( context && context.nodeType === 1 ) {
			for ( i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && (checkSet[i] === true || checkSet[i].nodeType === 1 && Sizzle.contains(context, checkSet[i])) ) {
					results.push( set[i] );
				}
			}
		} else {
			for ( i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && checkSet[i].nodeType === 1 ) {
					results.push( set[i] );
				}
			}
		}
	} else {
		makeArray( checkSet, results );
	}

	if ( extra ) {
		Sizzle( extra, origContext, results, seed );
		Sizzle.uniqueSort( results );
	}

	return results;
};

Sizzle.uniqueSort = function(results){
	if ( sortOrder ) {
		hasDuplicate = baseHasDuplicate;
		results.sort(sortOrder);

		if ( hasDuplicate ) {
			for ( var i = 1; i < results.length; i++ ) {
				if ( results[i] === results[i-1] ) {
					results.splice(i--, 1);
				}
			}
		}
	}

	return results;
};

Sizzle.matches = function(expr, set){
	return Sizzle(expr, null, null, set);
};

Sizzle.find = function(expr, context, isXML){
	var set;

	if ( !expr ) {
		return [];
	}

	for ( var i = 0, l = Expr.order.length; i < l; i++ ) {
		var type = Expr.order[i], match;
		
		if ( (match = Expr.leftMatch[ type ].exec( expr )) ) {
			var left = match[1];
			match.splice(1,1);

			if ( left.substr( left.length - 1 ) !== "\\" ) {
				match[1] = (match[1] || "").replace(/\\/g, "");
				set = Expr.find[ type ]( match, context, isXML );
				if ( set != null ) {
					expr = expr.replace( Expr.match[ type ], "" );
					break;
				}
			}
		}
	}

	if ( !set ) {
		set = context.getElementsByTagName("*");
	}

	return {set: set, expr: expr};
};

Sizzle.filter = function(expr, set, inplace, not){
	var old = expr, result = [], curLoop = set, match, anyFound,
		isXMLFilter = set && set[0] && Sizzle.isXML(set[0]);

	while ( expr && set.length ) {
		for ( var type in Expr.filter ) {
			if ( (match = Expr.leftMatch[ type ].exec( expr )) != null && match[2] ) {
				var filter = Expr.filter[ type ], found, item, left = match[1];
				anyFound = false;

				match.splice(1,1);

				if ( left.substr( left.length - 1 ) === "\\" ) {
					continue;
				}

				if ( curLoop === result ) {
					result = [];
				}

				if ( Expr.preFilter[ type ] ) {
					match = Expr.preFilter[ type ]( match, curLoop, inplace, result, not, isXMLFilter );

					if ( !match ) {
						anyFound = found = true;
					} else if ( match === true ) {
						continue;
					}
				}

				if ( match ) {
					for ( var i = 0; (item = curLoop[i]) != null; i++ ) {
						if ( item ) {
							found = filter( item, match, i, curLoop );
							var pass = not ^ !!found;

							if ( inplace && found != null ) {
								if ( pass ) {
									anyFound = true;
								} else {
									curLoop[i] = false;
								}
							} else if ( pass ) {
								result.push( item );
								anyFound = true;
							}
						}
					}
				}

				if ( found !== undefined ) {
					if ( !inplace ) {
						curLoop = result;
					}

					expr = expr.replace( Expr.match[ type ], "" );

					if ( !anyFound ) {
						return [];
					}

					break;
				}
			}
		}

		// Improper expression
		if ( expr === old ) {
			if ( anyFound == null ) {
				Sizzle.error( expr );
			} else {
				break;
			}
		}

		old = expr;
	}

	return curLoop;
};

Sizzle.error = function( msg ) {
	throw "Syntax error, unrecognized expression: " + msg;
};

var Expr = Sizzle.selectors = {
	order: [ "ID", "NAME", "TAG" ],
	match: {
		ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
		CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
		NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
		ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
		TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
		CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,
		POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
		PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
	},
	leftMatch: {},
	attrMap: {
		"class": "className",
		"for": "htmlFor"
	},
	attrHandle: {
		href: function(elem){
			return elem.getAttribute("href");
		}
	},
	relative: {
		"+": function(checkSet, part){
			var isPartStr = typeof part === "string",
				isTag = isPartStr && !/\W/.test(part),
				isPartStrNotTag = isPartStr && !isTag;

			if ( isTag ) {
				part = part.toLowerCase();
			}

			for ( var i = 0, l = checkSet.length, elem; i < l; i++ ) {
				if ( (elem = checkSet[i]) ) {
					while ( (elem = elem.previousSibling) && elem.nodeType !== 1 ) {}

					checkSet[i] = isPartStrNotTag || elem && elem.nodeName.toLowerCase() === part ?
						elem || false :
						elem === part;
				}
			}

			if ( isPartStrNotTag ) {
				Sizzle.filter( part, checkSet, true );
			}
		},
		">": function(checkSet, part){
			var isPartStr = typeof part === "string",
				elem, i = 0, l = checkSet.length;

			if ( isPartStr && !/\W/.test(part) ) {
				part = part.toLowerCase();

				for ( ; i < l; i++ ) {
					elem = checkSet[i];
					if ( elem ) {
						var parent = elem.parentNode;
						checkSet[i] = parent.nodeName.toLowerCase() === part ? parent : false;
					}
				}
			} else {
				for ( ; i < l; i++ ) {
					elem = checkSet[i];
					if ( elem ) {
						checkSet[i] = isPartStr ?
							elem.parentNode :
							elem.parentNode === part;
					}
				}

				if ( isPartStr ) {
					Sizzle.filter( part, checkSet, true );
				}
			}
		},
		"": function(checkSet, part, isXML){
			var doneName = done++, checkFn = dirCheck, nodeCheck;

			if ( typeof part === "string" && !/\W/.test(part) ) {
				part = part.toLowerCase();
				nodeCheck = part;
				checkFn = dirNodeCheck;
			}

			checkFn("parentNode", part, doneName, checkSet, nodeCheck, isXML);
		},
		"~": function(checkSet, part, isXML){
			var doneName = done++, checkFn = dirCheck, nodeCheck;

			if ( typeof part === "string" && !/\W/.test(part) ) {
				part = part.toLowerCase();
				nodeCheck = part;
				checkFn = dirNodeCheck;
			}

			checkFn("previousSibling", part, doneName, checkSet, nodeCheck, isXML);
		}
	},
	find: {
		ID: function(match, context, isXML){
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);
				return m ? [m] : [];
			}
		},
		NAME: function(match, context){
			if ( typeof context.getElementsByName !== "undefined" ) {
				var ret = [], results = context.getElementsByName(match[1]);

				for ( var i = 0, l = results.length; i < l; i++ ) {
					if ( results[i].getAttribute("name") === match[1] ) {
						ret.push( results[i] );
					}
				}

				return ret.length === 0 ? null : ret;
			}
		},
		TAG: function(match, context){
			return context.getElementsByTagName(match[1]);
		}
	},
	preFilter: {
		CLASS: function(match, curLoop, inplace, result, not, isXML){
			match = " " + match[1].replace(/\\/g, "") + " ";

			if ( isXML ) {
				return match;
			}

			for ( var i = 0, elem; (elem = curLoop[i]) != null; i++ ) {
				if ( elem ) {
					if ( not ^ (elem.className && (" " + elem.className + " ").replace(/[\t\n]/g, " ").indexOf(match) >= 0) ) {
						if ( !inplace ) {
							result.push( elem );
						}
					} else if ( inplace ) {
						curLoop[i] = false;
					}
				}
			}

			return false;
		},
		ID: function(match){
			return match[1].replace(/\\/g, "");
		},
		TAG: function(match, curLoop){
			return match[1].toLowerCase();
		},
		CHILD: function(match){
			if ( match[1] === "nth" ) {
				// parse equations like 'even', 'odd', '5', '2n', '3n+2', '4n-1', '-n+6'
				var test = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(
					match[2] === "even" && "2n" || match[2] === "odd" && "2n+1" ||
					!/\D/.test( match[2] ) && "0n+" + match[2] || match[2]);

				// calculate the numbers (first)n+(last) including if they are negative
				match[2] = (test[1] + (test[2] || 1)) - 0;
				match[3] = test[3] - 0;
			}

			// TODO: Move to normal caching system
			match[0] = done++;

			return match;
		},
		ATTR: function(match, curLoop, inplace, result, not, isXML){
			var name = match[1].replace(/\\/g, "");
			
			if ( !isXML && Expr.attrMap[name] ) {
				match[1] = Expr.attrMap[name];
			}

			if ( match[2] === "~=" ) {
				match[4] = " " + match[4] + " ";
			}

			return match;
		},
		PSEUDO: function(match, curLoop, inplace, result, not){
			if ( match[1] === "not" ) {
				// If we're dealing with a complex expression, or a simple one
				if ( ( chunker.exec(match[3]) || "" ).length > 1 || /^\w/.test(match[3]) ) {
					match[3] = Sizzle(match[3], null, null, curLoop);
				} else {
					var ret = Sizzle.filter(match[3], curLoop, inplace, true ^ not);
					if ( !inplace ) {
						result.push.apply( result, ret );
					}
					return false;
				}
			} else if ( Expr.match.POS.test( match[0] ) || Expr.match.CHILD.test( match[0] ) ) {
				return true;
			}
			
			return match;
		},
		POS: function(match){
			match.unshift( true );
			return match;
		}
	},
	filters: {
		enabled: function(elem){
			return elem.disabled === false && elem.type !== "hidden";
		},
		disabled: function(elem){
			return elem.disabled === true;
		},
		checked: function(elem){
			return elem.checked === true;
		},
		selected: function(elem){
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			elem.parentNode.selectedIndex;
			return elem.selected === true;
		},
		parent: function(elem){
			return !!elem.firstChild;
		},
		empty: function(elem){
			return !elem.firstChild;
		},
		has: function(elem, i, match){
			return !!Sizzle( match[3], elem ).length;
		},
		header: function(elem){
			return (/h\d/i).test( elem.nodeName );
		},
		text: function(elem){
			return "text" === elem.type;
		},
		radio: function(elem){
			return "radio" === elem.type;
		},
		checkbox: function(elem){
			return "checkbox" === elem.type;
		},
		file: function(elem){
			return "file" === elem.type;
		},
		password: function(elem){
			return "password" === elem.type;
		},
		submit: function(elem){
			return "submit" === elem.type;
		},
		image: function(elem){
			return "image" === elem.type;
		},
		reset: function(elem){
			return "reset" === elem.type;
		},
		button: function(elem){
			return "button" === elem.type || elem.nodeName.toLowerCase() === "button";
		},
		input: function(elem){
			return (/input|select|textarea|button/i).test(elem.nodeName);
		}
	},
	setFilters: {
		first: function(elem, i){
			return i === 0;
		},
		last: function(elem, i, match, array){
			return i === array.length - 1;
		},
		even: function(elem, i){
			return i % 2 === 0;
		},
		odd: function(elem, i){
			return i % 2 === 1;
		},
		lt: function(elem, i, match){
			return i < match[3] - 0;
		},
		gt: function(elem, i, match){
			return i > match[3] - 0;
		},
		nth: function(elem, i, match){
			return match[3] - 0 === i;
		},
		eq: function(elem, i, match){
			return match[3] - 0 === i;
		}
	},
	filter: {
		PSEUDO: function(elem, match, i, array){
			var name = match[1], filter = Expr.filters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );
			} else if ( name === "contains" ) {
				return (elem.textContent || elem.innerText || Sizzle.getText([ elem ]) || "").indexOf(match[3]) >= 0;
			} else if ( name === "not" ) {
				var not = match[3];

				for ( var j = 0, l = not.length; j < l; j++ ) {
					if ( not[j] === elem ) {
						return false;
					}
				}

				return true;
			} else {
				Sizzle.error( "Syntax error, unrecognized expression: " + name );
			}
		},
		CHILD: function(elem, match){
			var type = match[1], node = elem;
			switch (type) {
				case 'only':
				case 'first':
					while ( (node = node.previousSibling) )	 {
						if ( node.nodeType === 1 ) { 
							return false; 
						}
					}
					if ( type === "first" ) { 
						return true; 
					}
					node = elem;
				case 'last':
					while ( (node = node.nextSibling) )	 {
						if ( node.nodeType === 1 ) { 
							return false; 
						}
					}
					return true;
				case 'nth':
					var first = match[2], last = match[3];

					if ( first === 1 && last === 0 ) {
						return true;
					}
					
					var doneName = match[0],
						parent = elem.parentNode;
	
					if ( parent && (parent.sizcache !== doneName || !elem.nodeIndex) ) {
						var count = 0;
						for ( node = parent.firstChild; node; node = node.nextSibling ) {
							if ( node.nodeType === 1 ) {
								node.nodeIndex = ++count;
							}
						} 
						parent.sizcache = doneName;
					}
					
					var diff = elem.nodeIndex - last;
					if ( first === 0 ) {
						return diff === 0;
					} else {
						return ( diff % first === 0 && diff / first >= 0 );
					}
			}
		},
		ID: function(elem, match){
			return elem.nodeType === 1 && elem.getAttribute("id") === match;
		},
		TAG: function(elem, match){
			return (match === "*" && elem.nodeType === 1) || elem.nodeName.toLowerCase() === match;
		},
		CLASS: function(elem, match){
			return (" " + (elem.className || elem.getAttribute("class")) + " ")
				.indexOf( match ) > -1;
		},
		ATTR: function(elem, match){
			var name = match[1],
				result = Expr.attrHandle[ name ] ?
					Expr.attrHandle[ name ]( elem ) :
					elem[ name ] != null ?
						elem[ name ] :
						elem.getAttribute( name ),
				value = result + "",
				type = match[2],
				check = match[4];

			return result == null ?
				type === "!=" :
				type === "=" ?
				value === check :
				type === "*=" ?
				value.indexOf(check) >= 0 :
				type === "~=" ?
				(" " + value + " ").indexOf(check) >= 0 :
				!check ?
				value && result !== false :
				type === "!=" ?
				value !== check :
				type === "^=" ?
				value.indexOf(check) === 0 :
				type === "$=" ?
				value.substr(value.length - check.length) === check :
				type === "|=" ?
				value === check || value.substr(0, check.length + 1) === check + "-" :
				false;
		},
		POS: function(elem, match, i, array){
			var name = match[2], filter = Expr.setFilters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );
			}
		}
	}
};

var origPOS = Expr.match.POS,
	fescape = function(all, num){
		return "\\" + (num - 0 + 1);
	};

for ( var type in Expr.match ) {
	Expr.match[ type ] = new RegExp( Expr.match[ type ].source + (/(?![^\[]*\])(?![^\(]*\))/.source) );
	Expr.leftMatch[ type ] = new RegExp( /(^(?:.|\r|\n)*?)/.source + Expr.match[ type ].source.replace(/\\(\d+)/g, fescape) );
}

var makeArray = function(array, results) {
	array = Array.prototype.slice.call( array, 0 );

	if ( results ) {
		results.push.apply( results, array );
		return results;
	}
	
	return array;
};

// Perform a simple check to determine if the browser is capable of
// converting a NodeList to an array using builtin methods.
// Also verifies that the returned array holds DOM nodes
// (which is not the case in the Blackberry browser)
try {
	Array.prototype.slice.call( document.documentElement.childNodes, 0 )[0].nodeType;

// Provide a fallback method if it does not work
} catch(e){
	makeArray = function(array, results) {
		var ret = results || [], i = 0;

		if ( toString.call(array) === "[object Array]" ) {
			Array.prototype.push.apply( ret, array );
		} else {
			if ( typeof array.length === "number" ) {
				for ( var l = array.length; i < l; i++ ) {
					ret.push( array[i] );
				}
			} else {
				for ( ; array[i]; i++ ) {
					ret.push( array[i] );
				}
			}
		}

		return ret;
	};
}

var sortOrder;

if ( document.documentElement.compareDocumentPosition ) {
	sortOrder = function( a, b ) {
		if ( !a.compareDocumentPosition || !b.compareDocumentPosition ) {
			if ( a == b ) {
				hasDuplicate = true;
			}
			return a.compareDocumentPosition ? -1 : 1;
		}

		var ret = a.compareDocumentPosition(b) & 4 ? -1 : a === b ? 0 : 1;
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
} else if ( "sourceIndex" in document.documentElement ) {
	sortOrder = function( a, b ) {
		if ( !a.sourceIndex || !b.sourceIndex ) {
			if ( a == b ) {
				hasDuplicate = true;
			}
			return a.sourceIndex ? -1 : 1;
		}

		var ret = a.sourceIndex - b.sourceIndex;
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
} else if ( document.createRange ) {
	sortOrder = function( a, b ) {
		if ( !a.ownerDocument || !b.ownerDocument ) {
			if ( a == b ) {
				hasDuplicate = true;
			}
			return a.ownerDocument ? -1 : 1;
		}

		var aRange = a.ownerDocument.createRange(), bRange = b.ownerDocument.createRange();
		aRange.setStart(a, 0);
		aRange.setEnd(a, 0);
		bRange.setStart(b, 0);
		bRange.setEnd(b, 0);
		var ret = aRange.compareBoundaryPoints(Range.START_TO_END, bRange);
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
}

// Utility function for retreiving the text value of an array of DOM nodes
Sizzle.getText = function( elems ) {
	var ret = "", elem;

	for ( var i = 0; elems[i]; i++ ) {
		elem = elems[i];

		// Get the text from text nodes and CDATA nodes
		if ( elem.nodeType === 3 || elem.nodeType === 4 ) {
			ret += elem.nodeValue;

		// Traverse everything else, except comment nodes
		} else if ( elem.nodeType !== 8 ) {
			ret += Sizzle.getText( elem.childNodes );
		}
	}

	return ret;
};

// Check to see if the browser returns elements by name when
// querying by getElementById (and provide a workaround)
(function(){
	// We're going to inject a fake input element with a specified name
	var form = document.createElement("div"),
		id = "script" + (new Date()).getTime();
	form.innerHTML = "<a name='" + id + "'/>";

	// Inject it into the root element, check its status, and remove it quickly
	var root = document.documentElement;
	root.insertBefore( form, root.firstChild );

	// The workaround has to do additional checks after a getElementById
	// Which slows things down for other browsers (hence the branching)
	if ( document.getElementById( id ) ) {
		Expr.find.ID = function(match, context, isXML){
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);
				return m ? m.id === match[1] || typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id").nodeValue === match[1] ? [m] : undefined : [];
			}
		};

		Expr.filter.ID = function(elem, match){
			var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
			return elem.nodeType === 1 && node && node.nodeValue === match;
		};
	}

	root.removeChild( form );
	root = form = null; // release memory in IE
})();

(function(){
	// Check to see if the browser returns only elements
	// when doing getElementsByTagName("*")

	// Create a fake element
	var div = document.createElement("div");
	div.appendChild( document.createComment("") );

	// Make sure no comments are found
	if ( div.getElementsByTagName("*").length > 0 ) {
		Expr.find.TAG = function(match, context){
			var results = context.getElementsByTagName(match[1]);

			// Filter out possible comments
			if ( match[1] === "*" ) {
				var tmp = [];

				for ( var i = 0; results[i]; i++ ) {
					if ( results[i].nodeType === 1 ) {
						tmp.push( results[i] );
					}
				}

				results = tmp;
			}

			return results;
		};
	}

	// Check to see if an attribute returns normalized href attributes
	div.innerHTML = "<a href='#'></a>";
	if ( div.firstChild && typeof div.firstChild.getAttribute !== "undefined" &&
			div.firstChild.getAttribute("href") !== "#" ) {
		Expr.attrHandle.href = function(elem){
			return elem.getAttribute("href", 2);
		};
	}

	div = null; // release memory in IE
})();

if ( document.querySelectorAll ) {
	(function(){
		var oldSizzle = Sizzle, div = document.createElement("div");
		div.innerHTML = "<p class='TEST'></p>";

		// Safari can't handle uppercase or unicode characters when
		// in quirks mode.
		if ( div.querySelectorAll && div.querySelectorAll(".TEST").length === 0 ) {
			return;
		}
	
		Sizzle = function(query, context, extra, seed){
			context = context || document;

			// Only use querySelectorAll on non-XML documents
			// (ID selectors don't work in non-HTML documents)
			if ( !seed && context.nodeType === 9 && !Sizzle.isXML(context) ) {
				try {
					return makeArray( context.querySelectorAll(query), extra );
				} catch(e){}
			}
		
			return oldSizzle(query, context, extra, seed);
		};

		for ( var prop in oldSizzle ) {
			Sizzle[ prop ] = oldSizzle[ prop ];
		}

		div = null; // release memory in IE
	})();
}

(function(){
	var div = document.createElement("div");

	div.innerHTML = "<div class='test e'></div><div class='test'></div>";

	// Opera can't find a second classname (in 9.6)
	// Also, make sure that getElementsByClassName actually exists
	if ( !div.getElementsByClassName || div.getElementsByClassName("e").length === 0 ) {
		return;
	}

	// Safari caches class attributes, doesn't catch changes (in 3.2)
	div.lastChild.className = "e";

	if ( div.getElementsByClassName("e").length === 1 ) {
		return;
	}
	
	Expr.order.splice(1, 0, "CLASS");
	Expr.find.CLASS = function(match, context, isXML) {
		if ( typeof context.getElementsByClassName !== "undefined" && !isXML ) {
			return context.getElementsByClassName(match[1]);
		}
	};

	div = null; // release memory in IE
})();

function dirNodeCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];
		if ( elem ) {
			elem = elem[dir];
			var match = false;

			while ( elem ) {
				if ( elem.sizcache === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 && !isXML ){
					elem.sizcache = doneName;
					elem.sizset = i;
				}

				if ( elem.nodeName.toLowerCase() === cur ) {
					match = elem;
					break;
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

function dirCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];
		if ( elem ) {
			elem = elem[dir];
			var match = false;

			while ( elem ) {
				if ( elem.sizcache === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 ) {
					if ( !isXML ) {
						elem.sizcache = doneName;
						elem.sizset = i;
					}
					if ( typeof cur !== "string" ) {
						if ( elem === cur ) {
							match = true;
							break;
						}

					} else if ( Sizzle.filter( cur, [elem] ).length > 0 ) {
						match = elem;
						break;
					}
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

Sizzle.contains = document.compareDocumentPosition ? function(a, b){
	return !!(a.compareDocumentPosition(b) & 16);
} : function(a, b){
	return a !== b && (a.contains ? a.contains(b) : true);
};

Sizzle.isXML = function(elem){
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833) 
	var documentElement = (elem ? elem.ownerDocument || elem : 0).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

var posProcess = function(selector, context){
	var tmpSet = [], later = "", match,
		root = context.nodeType ? [context] : context;

	// Position selectors must be done after the filter
	// And so must :not(positional) so we move all PSEUDOs to the end
	while ( (match = Expr.match.PSEUDO.exec( selector )) ) {
		later += match[0];
		selector = selector.replace( Expr.match.PSEUDO, "" );
	}

	selector = Expr.relative[selector] ? selector + "*" : selector;

	for ( var i = 0, l = root.length; i < l; i++ ) {
		Sizzle( selector, root[i], tmpSet );
	}

	return Sizzle.filter( later, tmpSet );
};

// EXPOSE

window.Sizzle = Sizzle;

})();
/******* Sizzle end *******/

/**
 * short cut for document.getElementById
 * @method $
 * @param {String} id
 * @return {HTMLElement}
 */

function $( id ){
	var element;
	if(id == null)
		element = null;
	else if (isString( id ) || isNumber( id ))
		element = Sizzle('#' + id)[0];
	else
		element = id;
	if(element) 
		XN.element.extend( element );
	return element || null;
}

if( !Function.prototype.bind )
{
	Function.prototype.bind = function( object )
	{ 
		var method = this;
		return function()
		{ 
			method.apply( object , arguments ); 
		} 
	};
}


/**patch for old version**/
var xn_getEl = ge = getEl = $X = $;
var $xElement = $element;
/**patch end**/
 
/**
 * @module core
 */

/**
 * @class XN
 * @static
 */

/**
 * 动态加载文件
 * <br>
 * 动态加载某一文件<br>
 * XN.loadFile( 'http://s.xnimg.cn/js/test.js' );<br>
 *
 * 一定要在页面中写入一个如下的标签<br>
 * &lt;script vsrc="http://s.xnimg.cn/js/test.js?ver=$revxxx$"&gt;&lt;/script&gt;<br>
 *  这样loadFile函数将根据此标签获取正确的版本号，并在请求此文件时为其添加<br>
 *  
 *  http://s.xnimg.cn/156454/js/test.js<br>
 *
 * @method loadFile
 * @param {String} file
 * @param {Function} callBack
 */

if ( typeof XN == 'undefined' ) XN = {};
$extend(XN, {

	/**
	 * based on YAHOO.namespace
     * @namespace XN
	 * @method namespace
	 * @param  {String*} arguments 1-n namespaces to create 
	 * @return {Object}  A reference to the last namespace object created
	 */

	namespace : function()
	{
	    var a = arguments, o = null, i, j, d;
	    for ( i = 0 ; i < a.length ; i++ )
		{
	        d = a[ i ].split( '.' );
	        o = XN;
	
	        for ( j = ( d[0] == 'XN' ) ? 1 : 0; j < d.length; j++ )
			{
	            o[ d[ j ] ] = o[ d[ j ] ] || {};
	            o = o[ d[ j ] ];
	        }
	    }
	    return o;		
	}
});


XN.namespace( 'ui' );
XN.namespace( 'util' );
XN.namespace( 'app' );
XN.namespace( 'page' );
XN.namespace( 'config' );

/*
 * patch for old version
 */

XN.APP = XN.App = XN.app;
XN.PAGE = XN.Page = XN.page;
XN.CONFIG = XN.Config = XN.config;

/*
 * patch end
 */
/**
 * @namespace XN
 * @property DEBUG_MODE
 * @type {Boolean}
 */

XN.DEBUG_MODE = false;

/**
 *  log message if the browser has console object
 * @method log
 * @param {Any} s
 */

/**
 * @class debug
 * @static
 */

XN.debug =
{
	/**
	 * log message if the browser has console object
	 * @method log
	 * @param {Any} s
	 */
	
	log : function(){},
	
	/**
	 * debug mode on
	 * @method on
	 */
	
	on : function()
	{
		XN.DEBUG_MODE = true;
		if ( window.console && console.log )
		{
			XN.debug.log = function( s )
			{
				console.log( s );
			}
		}
	},
	
	/**
	 * debug mode off
	 * @method off
	 */
	
	off : function()
	{
		XN.debug.log = function(){};
	}
};

XN.log = function( s )
{
	XN.debug.log( s );
}

/*
 * patch for old version
 */

XN.DEBUG = XN.Debug = XN.debug;
XN.debug.On = XN.debug.on;
XN.debug.Off = XN.debug.off;

/*
 * patch end
 */
/**
 * @module core
 */

/**
 * @namespace XN
 * @class env
 * @static
 */
XN.namespace('env');

$extend(XN.env, {	
	/**
	 * @property domain
	 * @type {String}
	 * @default '' + XN.env.domain + ''
	 */
    
    domain_reg : XN.env.domain.replace(/\./g,'\\.'),	
	/**
	 * @property staticRoot
	 * @type {String}
	 * @default 'http://s.xnimg.cn/'
	 */
	
	staticRoot : 'http://s.xnimg.cn/',
	CDNstaticRoot : 'http://a.xnimg.cn/',
	
	/**
	 * @property swfRoot
	 * @type {String}
	 * @default 'http://static.xiaonei.com'
	 */
	
	swfRoot : 'http://static.xiaonei.com/',
	
	/**
	 * @property wwwRoot
	 * @type {String}
	 * @default 'http://' + XN.env.domain + '/'
	 */
	
	wwwRoot : 'http://' + XN.env.domain + '/'
});

/*
 *  patch for old version
 */

XN.ENV = XN.Env = XN.env;

/*
 * patch end
 */
/**
 * @module core
 */

/**
 * @namespace XN
 * @class array
 * @static
 */

XN.array =
{
	
	/**
	 * build query string from array
	 * @namespace XN.array
	 * @method toQueryString
	 * @param {Array | hash} a
	 * @return {String}
	 */
	
	toQueryString : function( a , key )
	{
		var rt = [],t;
		for ( var k in a )
		{
			t = a[ k ];
			if ( isFunction( t ) ) continue;
			if ( isObject( t ) )
			{
				rt.push( arguments.callee( t , k ) );
			}
			else
			{
				if ( /^\d+$/.test( k ) )
				{
					rt.push( ( key || k ) + '=' + encodeURIComponent( t ) );
				}
				else
				{
					rt.push( k + '=' + encodeURIComponent( t ) );
				}	
			}
		}
		return rt.join( '&' );
	},
	
	/**
	 * Iterates over the array
	 * the callBack function will receive index and value as the parameters
	 * @namespace XN.array
	 * @method each
	 * @param {Array} a
	 * @param {Function} func callBack function
	 */
	
	each : function( a , func )
	{
        if ( !a ) return;

		if ( !isUndefined( a.length ) || !isUndefined( a[ 0 ] ) )
		{
			for ( var i = 0 , j = a.length; i < j; i++ )
			{
				if ( func.call( a , i , a[ i ] ) === false ) break;
			}
		}
		else
		{
			for ( var key in a )
			{
				if( !isFunction( a[ key ] ) )
				{
					if ( func.call( a , key , a[ key ] ) === false ) break;
				}
			}
		}
	},
	
	/**
	 * check if an array has item equal the value param
	 * @namespace XN.array
	 * @method include
	 * @param {Array} a
	 * @param {Any} value
	 * @return {Boolean}
	 */
	
	include : function( a , value )
	{
		var r = false;
		
		XN.array.each( a , function( i , v )
		{
			if ( v === value )
			{
				r = true;
				return false;
			}
		} );
		
		return r;
	},
	
	/**
	 * build array from an object like arguments
	 * @namespace XN.array
	 * @method build
	 * @param {Object} obj
	 * @return {Array}
	 */
	
	build : function( o )
	{
		var rt = [];
		for (var i = 0,j = o.length;i < j;i++)
		{
			rt.push( o[ i ] );
		}
		return rt;
	}
};

/*
 * patch for old version
 */

XN.ARRAY = XN.Array = XN.array;

/*
 * patch end
 */
/**
 * @module core
 */

/**
 * @namespace XN
 * @class string
 * @static
 */

XN.string = {
	/**
	 * replace '\n' with '<br />'
	 * @namespace XN.string
	 * @method nl2br
	 * @param {String} str
	 * @return {String}
	 */
	
	nl2br : function( str )
	{
		return (str || '').replace( /([^>])\n/g , '$1<br />');
	},
	
	/**
	 * trim whitespace
	 * @namespace XN.string
	 * @method trim
	 * @param {String} str
	 * @return {String}
	 */
	
	trim : function( str )
	{
		return (str || '').replace( /^\s+|\s+$/g , '' );
	},
	
	/**
	 * trim whitespace leftside
	 * @namespace XN.string
	 * @method ltrim
	 * @param {String} str
	 * @return {String}
	 */
	
	ltrim : function( str )
	{
		return (str || '').replace( /^\s+/ , '' );
	},
	
	/**
	 * trim whitespace rightside
	 * @namespace XN.string
	 * @method rtrim
	 * @param {String} str
	 * @return {String}
	 */
	
	rtrim : function( str )
	{
		return (str || '').replace( /\s+$/ , '' );
	},
	
	strip : function( str )
	{
    	return XN.string.trim( str );
	},
	
	/**
	 * remove tag like '<...>'
	 * @namespace XN.string
	 * @method stripTags
	 * @param {String} str
	 * @return {String}
	 */
	
	stripTags: function( str )
	{
		return str.replace( /<\/?[^>]+>/igm, '' );
	},
	
	/**
	 * replace char like '<','>' to '&lt;'...
	 * @namespace XN.string
	 * @method escapeHTML
	 * @param {String} str
	 * @return {String}
	 */
	
	escapeHTML : function(str)
	{
		return str.replace( /&/g ,'&amp;' )
		.replace( /</g , '&lt;' )
		.replace( />/g , '&gt;' );
	},
	
	/**
	 * replace '&lt;'... to '<'...
	 * @namespace XN.string
	 * @method unescapeHTML
	 * @param {String} str
	 * @return {String}
	 */
	
	unescapeHTML : function(str)
	{
		return str.replace( /&lt;/g ,'<' )
		.replace( /&gt;/g , '>' )
		.replace( /&nbsp;/g ,' ' )
		.replace( /&quot;/g , '"' )
		.replace( /&amp;/g , '&' );
	},
	
	/**
	 * if str include the keyword will return true 
	 * @namespace XN.string
	 * @method include
	 * @param {String} str
	 * @param {String} key the keyword
	 * @return {Boolean}
	 */
	
	include : function( str , key )
	{
		return str.indexOf( key ) > -1;
	},

	/**
	 * wether str starts with the keyword
	 * @namespace XN.string
	 * @method startsWith
	 * @param {String} str
	 * @param {String} key the keyword
	 * @return {Boolean}
	 */
		
	startsWith : function( str , key )
	{
		return str.indexOf( key ) === 0;
	},

	/**
	 * wether str ends with the keyword
	 * @namespace XN.string
	 * @method endsWith
	 * @param {String} str
	 * @param {String} key the keyword
	 * @return {Boolean}
	 */
	
	endsWith : function( str , key )
	{
	    var d = str.length - key.length;
	    return d >= 0 && str.lastIndexOf( key ) === d;	
	},
	
	/**
	 * check if the string is 'blank',meaning either empty or containing only whitespace
	 * @namespace XN.string
	 * @method isBlank
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	isBlank : function( str )
	{
		return /^\s*$/.test(str);
	},
	
	/**
	 * wether a string is an email address
	 * @namespace XN.string
	 * @method isEmail
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	isEmail : function( str )
	{
		return /^[A-Z_a-z0-9-\.]+@([A-Z_a-z0-9-]+\.)+[a-z0-9A-Z]{2,4}$/.test( str );
	},
	
	/**
	 * wether a string is mobile phone number
	 * @namespace XN.string
	 * @method isMobile
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	isMobile : function( str )
	{
        return /^((\(\d{2,3}\))|(\d{3}\-))?((1[345]\d{9})|(18\d{9}))$/.test(str);
	},
	
	/**
	 * @namespace XN.string
	 * @method isUrl
	 * @param {String} str
	 * @return {Boolean}
	 */	
	 
	isUrl : function(str)
	{
		return /^(http:|ftp:)\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"])*$/.test(str);
	},
	
	/**
	 * @namespace XN.string
	 * @method isIp
	 * @param {String} str
	 * @return {Boolean}
	 */
	 	
	isIp : function( str )
	{
		return /^(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5])$/.test(str);
	},
	
	/**
	 * @namespace XN.string
	 * @method isNumber
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	isNumber : function( str )
	{
		return /^\d+$/.test( str );
	},

	/**
	 * @namespace XN.string
	 * @method isZip
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	isZip : function( str )
	{
		return /^[1-9]\d{5}$/.test( str );
	},
	
	/**
	 * @namespace XN.string
	 * @method isEN
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	isEN : function( str )
	{
		return /^[A-Za-z]+$/.test( str );
	},

	/**
	 * @namespace XN.string
	 * @method isJSON
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	isJSON : function( str )
	{
		if ( !isString( str ) || str === '') return false;
		str = str.replace( /\\./g , '@' ).replace( /"[^"\\\n\r]*"/g , '' );
		return ( /^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/ ).test( str );	
	},
    
    /**
     * get parameters from url
     * @method getQuery
     * @param {String} key
     * @param {String} url
     * @return {String | Array}
     */

    getQuery : function( key , url )
    {
        url = url || window.location.href + '';
        if ( url.indexOf( '#' ) !== -1 )
            url = url.substring( 0 , url.indexOf( '#' ) );
        var rts = [],rt;
        var queryReg = new RegExp( '(^|\\?|&)' + key + '=([^&]*)(?=&|#|$)' , 'g' );
        while ( ( rt = queryReg.exec( url ) ) != null )
        {
            rts.push( decodeURIComponent( rt[ 2 ] ) );
        }
        if ( rts.length == 0 ) return null;
        if ( rts.length == 1 ) return rts[ 0 ];
        return rts;
    },
    
    /**
     * set parameters for url
     * @method setQuery
     * @param {String} key
     * @param {String | Array} value
     * @param {String} url
     * @return {String}
     */

    setQuery : function( key , value , url )
    {
        
        url = url || window.location.href + '';
        var hash = '';
        if ( !/^http/.test(url) ) return url;
        if ( url.indexOf( '#' ) !== -1 )
            hash = url.substring( url.indexOf( '#' ) );
        
        url = url.replace( hash , '' );
        url = url.replace( new RegExp( '(^|\\?|&)' + key + '=[^&]*(?=&|#|$)' , 'g' ) , '' );
        value = isArray( value ) ? value : [ value ];
        
        for ( var i = value.length - 1;i >= 0;i --)
        {
            value[ i ] = encodeURIComponent( value[ i ] );
        }

        var p = key + '=' + value.join( '&' + key + '=' );
        return url + ( /\?/.test( url ) ? '&' : '?' ) + p + hash;
    }
};

/*
 *  patch for old version
 */

XN.String = XN.STRING = XN.string;

XN.string.isNum = XN.string.isNumber;

window.isJSON = XN.string.isJSON;

/*
 * patch end
 */
/**
 * @namespace XN
 * @class func
 * @static
 */

(function()
{
	runOnceFunc = {};
	
	XN.func = {
		
		/**
		 * refer to an empty function
		 * @property empty
		 * @type {Function}
		 */
		
		empty : function(){},
		
		/**
		 * run a function only once
		 * @method runOnce
		 * @param {Function} func
		 * @return {Any} the result the func return
		 */
		
		runOnce : function( func )
		{
			if( runOnceFunc[ func ] )return null;
			runOnceFunc[ func ] = true;
			return func();
		}
	};
})();

/*
 *  patch for old version
 */

XN.FUNC = XN.Func = XN.func;

/*
 * patch end
 */
/**
 * @module core
 */

(function()
{
	
	
	/**
	 * @namespace XN
	 * @class browser
	 * @static
	 */
	
	XN.browser = {
		
		/**
		 * @property IE
		 * @type {Boolean}
		 */
		
		IE : !!( window.attachEvent && !window.opera ),
		
		/**
		 * @property IE6
		 * @type {Boolean}
		 */
		
		IE6 : navigator.userAgent.indexOf( 'MSIE 6.0' ) > -1,
		
		/**
		 * @property IE7
		 * @type {Boolean}
		 */
		
		IE7 : navigator.userAgent.indexOf( 'MSIE 7.0' ) > -1,
        
        /**
        * @property IE8
        * @type {Boolean}
        */

	    IE8 : navigator.userAgent.indexOf( 'MSIE 8.0' ) > -1,	
		/**
		 * @property Opera
		 * @type {Boolean}
		 */
		
		Opera : !!window.opera,
		
		/**
		 * @property WebKit
		 * @type {Boolean}
		 */
		
		WebKit : navigator.userAgent.indexOf( 'AppleWebKit/' ) > -1,
		
		/**
		 * @property Gecko
		 * @type {Boolean}
		 */
		
		Gecko : navigator.userAgent.indexOf( 'Gecko' ) > -1 && navigator.userAgent.indexOf( 'KHTML' ) == -1,
		
		/**
		 * copy string to clipboard
		 * @param {String} str
		 */
		
		copy : function( o )
		{
            function onfail()
            {
                if ( isElement( o ) )
                {
                    o.select();
                }
            }
            
            var str;

			if ( isElement( o ) )
            {
                str = o.value;
            }
            else
            {
                str = o;
            }
			
			if ( window.clipboardData && clipboardData.setData )
			{
				if ( clipboardData.setData( 'text', str ) ) return true;
			}
			else
			{
				XN.DO.alert({
                    message : '您的浏览器不支持脚本复制,请尝试手动复制',
                    callBack : function()
                    {
                        onfail();
                    }
                });

				return false;
			}
			
			XN.DO.alert({
                message : '您的浏览器设置不允许脚本访问剪切板',
                callBack : function()
                {
                    onfail();
                }
            });


			return false;
		}
	};
})();
/*
 * patch for old version
 */

XN.BROWSER = XN.Browser = XN.browser;

/*
 * patch end
 */
/**
 * @module core
 */

/**
 * @namespace XN
 * @class cookie
 * @static
 */

XN.cookie = {
	
	/**
	 * get cookie
	 * @method get
	 * @param {String} name
	 */
	
	get : function( name )
	{
		var nameEQ = name + '=';
		var ca = document.cookie.split(';');
		for ( var i=0;i < ca.length; i++ )
		{
			var c = ca[ i ];
			while ( c.charAt(0) == ' ' ) c = c.substring( 1 , c.length );
			if ( c.indexOf( nameEQ ) == 0 ) return decodeURIComponent( c.substring( nameEQ.length , c.length ) );
		}
		return null;
	},
	
	/**
	 * set Cookie
	 * @method set
	 * @param {String} name
	 * @param {String} value
	 * @param {Int} days
	 * @param {String} path
	 * @param {String} domain
	 * @param {Boolean} secure
	 */
	
	set : function( name , value , days , path , domain , secure )
	{
		var expires;
		if ( isNumber( days ) )
		{
			var date = new Date();
			date.setTime( date.getTime() + ( days * 24 * 60 * 60 * 1000 ) );
			expires = date.toGMTString();
		}
		else if ( isString( days ) )
		{
			expires = days;
		}
		else
		{
			expires = false;
		}
		
		document.cookie = name + '=' + encodeURIComponent( value ) +
				(expires ? ';expires=' + expires  : '') +
				(path ? ';path=' + path : '') +
				(domain ? ';domain=' + domain : '') +
				(secure ? ';secure' : '');
	},
	
	/**
	 * delete Cookie
	 * @method del
	 * @param {String} name
	 * @param {String} path
	 * @param {String} domain
	 * @param {Boolean} secure
	 */
	
	del : function( name , path , domain , secure )
	{
		XN.cookie.set( name , '' , -1 , path , domain , secure );
	}
};

/*
 * patch for old version
 */

XN.COOKIE = XN.Cookie = XN.cookie;

/*
 * patch end
 */
/**
 * @namespace XN
 * @class event
 * @static
 */

(function()
{
	var browser = XN.browser;
	
	XN.event =
	{
		/**
		 * @method isCapsLockOn
		 * @param {Object} e the event object
		 * @return {Boolean}
		 */
		
		isCapsLockOn : function( e )
		{
			var c = e.keyCode || e.which;
			var s = e.shiftKey;
			if ( ( ( c >= 65 && c <= 90 ) && !s ) || ( (c >=97 && c <= 122) && s) ) return true;
			return false;
		},
		
		/**
		 * get event src element
		 * @method element
		 * @param {Object} e the event object
		 * @return {HTMLElement}
		 */
		
		element : function( e )
		{
			var n = e.target || e.srcElement;
			return This.resolveTextNode( n );
		},
		
		/**
		 * get related element of event as 'mouseover'
		 * @method relatedTarget
		 * @param {Object} e
		 * @return {HTMLElement}
		 */
		
		relatedTarget: function( e ) {
			var t = e.relatedTarget;
			if ( !t )
			{
			    if ( e.type == 'mouseout' || e.type == 'mouseleave' )
				{
			        t = e.toElement;
			    }
				else if ( e.type == 'mouseover' )
				{
			        t = e.fromElement;
			    }
			}	
			return This.resolveTextNode( t );
		},
		
		resolveTextNode: function( n )
		{
			try
			{
			    if ( n && 3 == n.nodeType ) 
				{
			        return n.parentNode;
			    }
			} catch(e) {}
			
			return n;
		},
		
		/**
		 * get mouse pointer pose x
		 * @method pointerX
		 * @param {Object} event
		 * @return {Int}
		 */
		
		pointerX : function( event )
		{
			return event.pageX || ( event.clientX + ( document.documentElement.scrollLeft || document.body.scrollLeft ) );
		},
		
		/**
		 * get mouse pointer pose y
		 * @method pointerY
		 * @param {Object} event
		 * @return {Int}
		 */
		
		pointerY : function( event )
		{
			return event.pageY || ( event.clientY + ( document.documentElement.scrollTop || document.body.scrollTop ) );
		},
		
		/**
		* 判断当前页面是否是标准模式
		*/
		
		isStrictMode:document.compatMode!="BackCompat",
		
		/**
		 * get page height
		 * @method pageHeight
		 * @return {Int}
		 */
		
		pageHeight : function()
		{
			return this.isStrictMode ? Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight) : Math.max(document.body.scrollHeight,document.body.clientHeight);
		},
		
		/**
		 * get page width
		 * @method pageWidth
		 * @return {Int}
		 */
		
		pageWidth : function()
		{
	  		return this.isStrictMode ? Math.max(document.documentElement.scrollWidth,document.documentElement.clientWidth) : Math.max(document.body.scrollWidth,document.body.clientWidth);
		},
		
		/**
		 * get inner width of window
		 * @method winWidth
		 * @return {Int}
		 */
		
		winWidth	: function()
		{
			return this.isStrictMode ?  document.documentElement.clientWidth : document.body.clientWidth;
		},
		
		/**
		 * get inner height of window
		 * @method winHeight
		 * @return {Int}
		 */
		
		winHeight : function()
		{
			return this.isStrictMode ? document.documentElement.clientHeight : document.body.clientHeight;
		},
		
		/**
		 * get scrollTop of document
		 * @method scrollTop
		 * @return {Int}
		 */
		
		scrollTop : function()
		{
            if ( XN.browser.WebKit )
            {
                return window.pageYOffset;
            }
			
            return this.isStrictMode ? document.documentElement.scrollTop : document.body.scrollTop;
		},
		
		/**
		 * get scrollLeft of document
		 * @method scrollLeft
		 * @return {Int}
		 */
		
		scrollLeft:function()
		{
            if ( XN.browser.WebKit )
            {
                return window.pageXOffset;
            }

			return this.isStrictMode ? document.documentElement.scrollLeft : document.body.scrollLeft;
		},
		
		/**
		 * stop event bubble
		 * @method stop
		 * @param {Object} event
		 */
    	
		stop	:null,
		
		addEvent : function(el, name, func, cap)
        {
            var els = [];
            el = $(el);
            if ( isArray(el) )
            {
                els = el;
            }
            else
            {
                els.push(el);
            }
            if ( els.length == 0 ) return el;
            XN.array.each(els, function(i, v)
            {
                XN.event._addEvent(v, name, func, cap);
            });
            return el;
        },
		delEvent : function(el, name, func, cap)
        {
            var els = [];
            el = $(el);
            if ( isArray(el) )
            {
                els = el;
            }
            else
            {
                els.push(el);
            }
            if ( els.length == 0 ) return el;
            XN.array.each(els, function(i, v)
            {
                XN.event._delEvent(v, name, func, cap);
            }); 
            return el;
        },
        _addEvent : null,
        _delEvent : null,
		
		/**
		 * enable custom event for an object
		 * @param {Object} obj
		 * @return {Object}
		 */
		enableCustomEvent : function( obj )
		{
			$extend( obj , 
			{
				addEvent : function( type , func )
				{
					if( !this._customEventListeners ) this._customEventListeners = {};
					var funcs = this._customEventListeners;
					if( isUndefined( funcs[type] ) )
					{
						funcs[ type ] = [];
					}
					funcs[ type ].push( func );
					return this;
				},
				delEvent : function( type , func ) 
				{
					var funcs = this._customEventListeners[ type ];
					if ( funcs )
					{
						for( var i = funcs.length - 1; i >= 0;i-- )
						{
							if( funcs[i] == func )
							{
								funcs[i] = null;
								break;
							}
						}
					}
					return this;
				},
				fireEvent : function( type )
				{
					if( !this._customEventListeners || !this._customEventListeners[ type ] )return;
					var funcs = this._customEventListeners[ type ],ars = XN.array.build( arguments );
					ars.shift();
					for( var i = 0, j = funcs.length; i < j; i++ )
					{
						if( funcs[ i ] )
                        {
							try
                            {
                                funcs[ i ].apply( this , ars );
                            }
                            catch( ox )
                            {
                                if ( XN.DEBUG_MODE ) throw ox;
                            }
                        }
					}
				}
			});
			
			return obj;
		}		
	};
	
	var This = XN.event;
	
	if ( browser.IE )
	{
		This.stop = function( event )
		{
			event.returnValue = false;
			event.cancelBubble = true;			
		}
	}
	else
	{
		This.stop = function( event )
		{
			event.preventDefault();
			event.stopPropagation();		
		}
	}
	
	var ismouseleave = function( event , element )
	{
		var p = event.relatedTarget;
		while ( p && p != element ) try { p = p.parentNode; } catch(error) { p = element; }
		return p !== element;
	}
	
	if (window.attachEvent && !browser.Opera)
	{
		// 将window.event包装一下，使其拥有preventDefault等方法
		function wrapEvent(nativeEvent) {
			nativeEvent.stopPropagation = function() {
				this.cancelBubble = true;
			};
			nativeEvent.preventDefault = function() {
				this.returnValue = false;
			};
			return nativeEvent;
		}

		This._addEvent = function( element , name , func )
		{
            element = $( element );
			if (!element._eventListeners[name]) element._eventListeners[name] = [];

			var wrapperFunc = function() {
				var e = wrapEvent(window.event);
				func.call(element, e);
			}
			wrapperFunc.innerFunc = func;

			element._eventListeners[name].push(wrapperFunc);

			if (name == 'keypress') name = 'keydown';
			if (name == 'input' ) name = 'propertychange';
			element.attachEvent( 'on' + name , wrapperFunc);
            return element;
		};
		This._delEvent =  function( element , name , func )
		{
            element = $( element );
			if (name == 'keypress') name = 'keydown';
			if (name == 'input' ) name = 'propertychange';

			for (var i = 0, wrapperFunc; i < element._eventListeners[name].length; i++) {
				wrapperFunc = element._eventListeners[name][i];
				if (wrapperFunc.innerFunc === func) break;
			}

			element.detachEvent( 'on' + name , wrapperFunc);
            return element;
		};
	}
	else if ( window.addEventListener )
	{
		
		/**
		 * add event for element
		 * @namespace XN.event
		 * @method addEvent
		 * @param {HTMLElement | String} element
		 * @param {String} name
		 * @param {Function} func
		 * @param {Boolean} useCapture
		 * @return {HTMLElement}
		 */
		
		This._addEvent = function( element , name , func , useCapture )
		{
			element = $( element );
			if ( name == 'mouseleave' )
			{
				element.onmouseleave = function( e )
				{
                    e = e || window.event;
					if ( ismouseleave( e , element ) && func ) func.call( element , e );
				};
				element.addEventListener( 'mouseout' , element.onmouseleave , useCapture );
				return element;
			}
			if ( name == 'keypress' && browser.WebKit ) name = 'keydown';
			element.addEventListener( name , func , useCapture );
			return element;
		};
		
		/**
		 * del event 
		 * @method delEvent
		 * @param {HTMLElement | String} element
		 * @param {String} name
		 * @param {Function} func
		 * @param {Boolean} useCapture
		 * @return {HTMLElement}
		 */
		
		This._delEvent = function(element,name,func,useCapture) {
			element = $(element);
			if ( name == 'mouseleave' )
			{
				element.removeEventListener( 'mouseout' , element.onmouseleave , useCapture );
				return element;
			}
			if ( name == 'keypress' && browser.WebKit ) name = 'keydown';
			element.removeEventListener( name , func , useCapture );
			return element;
		};
	}
    
})();

XN.events = {};
XN.event.enableCustomEvent(XN.events);


/*
 * patch for old version
 */

XN.EVENT = XN.Event = XN.event;

/*
 * patch end
 */
/**
 * @namespace XN
 * @class dom
 * @static
 */

(function()
{
	var Event = XN.event;
	var array = XN.array;
	var browser = XN.browser;
	
	var domLoaded = false;
	
	var domloadHooks = [];
    var asyncLoadHooks = [];
	
	
	function runHooks()
	{
		if( !domloadHooks )return;

        XN.array.each( domloadHooks , function( i , v )
		{
			try
			{
                v();
			}
			catch( e )
			{
				if( XN.DEBUG_MODE ) throw e;
			}
		} );
        XN.array.each( asyncLoadHooks , function( i , v )
		{
                setTimeout(v, 0);
		} );
	}

	var shadowElement = null;
	
	function createShadow( opacity, zIndex )
	{
        opacity = opacity || 0.3;
        zIndex = zIndex || 2000;
		
        var el = $element( 'div' );
		
        shadowElement = el;
		
        XN.element.setStyle(el, [ 'position:absolute;',
                        'top:0;',
                        'left:0;',
                        'background:#000;',
                        'z-index:' + zIndex + ';',
                        'opacity:' + opacity + ';',
                        'filter:alpha(opacity=' + ( opacity * 100 ) + ');'
                    ].join( '' ));
		
		el.innerHTML= [ '<iframe width="100%" height="100%" frameBorder="0" style="position:absolute;top:0;left:0;z-index:1;"></iframe>',
                        '<div style="position:absolute;top:0;left:0;width:100%;height:100%;background-color:#000000;z-index:2;height:expression(this.parentNode.offsetHeight);"></div>' ].join( '' );
		
        function resize()
        {
		    el.hide();
            el.style.height = XN.event.pageHeight() + 'px';
		    el.style.width = XN.event.pageWidth() + 'px';
			el.show();					
        }
		
        resize();

        XN.event.addEvent( window , 'resize',function(e)
        {
			if ( shadowElement && shadowElement.style.display != "none" )
            {
                try
                {
                    resize();
				}
				catch(e){}
            }
		});
		
		document.body.insertBefore(el, document.body.firstChild);
	}
	
	XN.dom = {
		
		/**
		 * disable user interface
		 * @method disable
		 * @param {Float} opacity
		 */
		
		disable : function( opacity, zIndex )
		{
			if ( !shadowElement ) createShadow( opacity, zIndex );
			/*if ( XN.browser.IE6 )
            {
				document.getElementsByTagName("html")[0].style.overflow="hidden";
				document.body.style.overflow="hidden";
			}*/
		},
		
		/**
		 * enable user interface
		 * @method enable
		 */
		
		enable : function()
		{
            if ( shadowElement )
            {
				/*if ( XN.browser.IE6 )
                {
					document.getElementsByTagName("html")[0].style.overflow="";
					document.body.style.overflow="";
				}*/

				shadowElement.remove();
				shadowElement = null;
			}
		},
		
		/**
		 * insert element after another
		 * @method insertAfter
		 * @param {HTMLElement} element
		 * @param {HTMLElement} targetElement
		 */
		
		insertAfter : function( element , targetElement )
		{
			element = $( element );
			targetElement = $( targetElement );
			
			var parent = targetElement.parentNode;
			if ( parent.lastChild == targetElement )
			{
				parent.appendChild( element );
			}
			else
			{
				parent.insertBefore( element, targetElement.nextSibling );
			}
		},
		
		/**
		 * get elements by classname
		 * @param {String} className
		 * @param {HTMLElement | String} element
		 * @param {String} tagName
         * @return {Array}
		 */
		
		getElementsByClassName : function( className , element , tagName )
		{ 
			var c = ( $( element ) || document ).getElementsByTagName( tagName || '*' ) || document.all; 
			var elements = []; 
			var _exp = new RegExp("(^|\\s)" + className + "(\\s|$)");
			
			array.each( c , function( i , v )
			{
				if ( _exp.test( v.className ) ) elements.push( v );
			} );
			
	  		return elements; 
		},
		
		/**
		 * registor dom load event
		 * @method readyDo
		 * @param {Function} f
		 */
		
		ready : function( f, async )
		{
            if ( isUndefined(async) ) async = false;
			if ( domLoaded )
            {
                async ? setTimeout(f, 0) : f();
            }
            else
            {
                async ? asyncLoadHooks.push(f) : domloadHooks.push(f);
            }
		},
		
		/**
		 * preload Image
		 * @method preloadImg
		 * @param {String | Array} src
		 */
		
		preloadImg : function( src )
		{
			src = isArray( src ) ? src : [ src ];
			array.each( src , function( i , v )
			{
				new Image().src = v;
			} );
		}
	};
	
	if ( browser.WebKit && parseFloat(navigator.userAgent.match(/AppleWebKit\/([\d\.]+)/i)[1]) < 525)
	{
		var timer = setInterval( function()
		{
			if( /loaded|complete/.test( document.readyState ) )
			{
				domLoaded = true;
				clearInterval( timer );
				runHooks();
			}
		} , 10 ); 
	}
	else if ( document.addEventListener )
	{
		document.addEventListener( 'DOMContentLoaded' , function()
		{
			domLoaded = true;
			runHooks();
		} , false );
	}
	else
	{
		var timer = setInterval( function()
		{
            try
			{
                document.body.doScroll('left');
                clearInterval( timer );
                domLoaded = true;
				runHooks();
            } catch (e) {}
        } , 20 ); 
	}
})();


/*
 *  patch for old version
 */

XN.DOM = XN.Dom = XN.dom;
XN.dom.readyDo = XN.dom.ready;

XN.dom.ready( function()
{
    $ = ge = getEl = xn_getEl;
});

XN.namespace('config');
XN.config.jumpOut = true;

XN.dom.ready( function()
{
	if ( XN.config.parentDomain || ( !XN.config.jumpOut ) ) return;

	try
	{
		top.location.href.indexOf( 'x' );
	}
	catch ( e )
	{
		try
		{
			top.location = self.location;
		} catch ( e ){}
	}
});

/*
 * patch end
 */



(function()
{
    var files = {};
    var version = {};

    XN.getFileVersionNum = function(file){
        return version[file]; 
    };

    function hasLoad( file ){
        return !!getFile( file );
    }

    function getFile( file ){
        return files[ encodeURIComponent( file ) ];
    }
    
    function mark( file ){
        var obj = {};
        obj.file = file;
        obj.isLoad = true;
        obj.isLoaded = true;
        files[ encodeURIComponent( file ) ] = obj;
    }

    function addFile( file ){
        var obj = {};
        obj.file = file;
        obj.isLoaded = false;
        XN.EVENT.enableCustomEvent( obj );
        
        obj.addEvent( 'load' , function(){
            this.isLoaded = true;
        });

        files[ encodeURIComponent( file ) ] = obj;

        var el = document.createElement('script');
        el.type="text/javascript";
        el.src = file;
		el.async = true;
        obj.element = el;
        
        if ( XN.Browser.IE ){
            el.onreadystatechange = function() {
                if ( ( this.readyState == 'loaded' || this.readyState == 'complete' ) && !this.hasLoad ){
                    this.hasLoad = true;
                    getFile( file ).fireEvent( 'load' );
                }
            }
        }
		else{
            el.onload = function(){
                getFile( file ).fireEvent( 'load' );
            };
        }

		Sizzle('head')[0].insertBefore(el, null);
    }

    function loadFile( file , callBack ){
        var isJS = false, isCSS = false;

        if ( isObject(file) )
        {
            isJS = ( file.type == 'js' );
            isCSS = ( file.type == 'css' );
            file = file.file;
        }

        file = getFullName( file );
        
        if ( /\.js(\?|$)/.test( file ) || isJS )
        {
            if ( !hasLoad( file ) )
            {
                addFile( file );
            }
            
            if ( !callBack ) return;
            if ( getFile( file ).isLoaded )
            {
                callBack.call( getFile( file ) );
            }
            else
            {
                getFile( file ).addEvent( 'load' , callBack );
            }
        }
        else if ( /\.css(\?|$)/.test( file ) || isCSS )
        {
            if ( hasLoad( file ) )
            {
                if ( callBack ) callBack.call( getFile( file ) );
                return;
            }
            mark( file );
            var el = $element( 'link' );
            el.rel = 'stylesheet';
            el.type = 'text/css';
            el.href = file;
			
            Sizzle('head')[0].insertBefore(el, null);
            if ( callBack ) callBack.call( getFile( file ) );
        }
    }
    
    function getFullName( file )
    {
        XN.func.runOnce( loadVersion );
        if ( !version[ file ] ) return file;
        return version[ file ].file;
    }

    function getVersion( file )
    {
        var match;
        if ( match = new RegExp( '(' + XN.env.staticRoot + ')' + '(a?\\d+)/([^\?]*)' ).exec( file ) )
        {
            version[ match[ 1 ] + match[ 3 ] ] = {
                file : file,
                version : match[ 2 ]
            };
        }
        else if ( match = new RegExp( '(.*)\\?ver=(\d+)(\..*)' ).exec( file ) )
        {
            version[ match[ 1 ] ] = {
                file : file,
                version : match[ 2 ]
            };
        }
    }
    
    XN.getFileVersion = function( files )
    {
        XN.array.each( files , function( i , v )
        {
            getVersion( v );
        });
    };

    XN.loadFile = function( file , callBack ){
		XN.DOM.readyDo(function(){
			loadFile( file , callBack );	
		});        
    };
    
    
    XN.loadFiles = function( files , callBack )
    {
        var f = files.length;
        
        function isAllLoad()
        {
            f --;
            if ( f === 0 && callBack ) callBack();
        }

        XN.array.each( files , function( i , v )
        {
            XN.loadFile( v , isAllLoad );
        });
    };

    XN.getVersion = function( file )
    {
        getVersion( file );
    }

    function loadVersion()
    {

        XN.array.each( document.getElementsByTagName( 'script' ) , function( i , v )
        {
            if ( v.src )
            {
                mark( v.src );
                getVersion( v.src );
            }

            if ( v.getAttribute( 'vsrc' ) ) getVersion( v.getAttribute( 'vsrc' ) );
        } );

        XN.array.each( document.getElementsByTagName( 'link' ) , function( i , v )
        {
            if ( v.rel && v.rel == 'stylesheet' )
            {
                mark( v.href );
                getVersion( v.href );
            }

            if ( v.getAttribute( 'vhref' ) ) getVersion( v.getAttribute( 'vhref' ) );
        } );

        XN.log( 'load file version:' );
        XN.log( version );

    }

    XN.dynamicLoad = function( file )
    {
        XN.array.each( file.funcs , function( i , func )
        {
            window[ func ] = function()
            {
                var ars = arguments;
                
                window[ func ] = null;
                if ( file.file )
                {
                    file.files = [ file.file ];
                }

                XN.loadFiles( file.files , function()
                {
                    window[ func ].apply( null , ars );
                    if ( file.callBack ) file.callBack.call( null );
                });
            };    
        });
    };

    XN.namespace( 'img' );
    XN.img.getVersion = function( file )
    {
        XN.func.runOnce( loadVersion );
        if ( !version[ file ] ) return '';
        return version[ file ].version;
    };

    XN.img.getFullName = function( file )
    {
        return getFullName( file );
    };
})();
/**
 * @namespace XN
 * @class element
 * @static
 */

(function()
{
	var addEvent = XN.event.addEvent;
	var delEvent = XN.event.delEvent;
	var browser = XN.browser;
	
	// 将字符串转化成dom
	function getDom(str) {
		var tmp = document.createElement('div');
		tmp.style.display = 'none';
		document.body.appendChild(tmp);

		tmp.innerHTML = str;
		var dom = document.createElement('div');
		while (tmp.firstChild) dom.appendChild(tmp.firstChild);
		tmp.parentNode.removeChild(tmp);
		return dom;
	}

	// 判断是否需要使用getDom
	var t = document.createElement('div');
	t.innerHTML = '<TEST_TAG></TEST_TAG>';
	// IE 下无法获取到自定义的Element，其他浏览器会得到HTMLUnknownElement
	var needGetDom = t.firstChild === null;

	XN.element = {
        
        /**
         * 清空元素的innerHTML
         * @method clear
         * @param {HTMLElement | String} element
         * @return {HTMLElement}
         */

	    clear : function( element )
        {
            element = $( element );
            element.innerHTML = '';
            return element;
        },

		/**
		 * simple hover
		 * @method hover
		 * @param {HTMLElement | String} element the element hover on
		 * @param {String} className hover class
		 * @param {HTMLElement | String} hover add class to
		 */
		
		hover : function( element , className , hover )
		{
			element = $( element );
			hover =  hover ? $( hover ) : element;
			
			addEvent( element , 'mouseover' , function()
			{
				hover.addClass( className );
			} , false );
			
			addEvent( element ,'mouseleave' , function()
			{
				hover.delClass(className);
			}, false );
            
            return element;
		},
		
		/**
		 * scroll page to element
		 * @method scrollTo
		 * @param {HTMLElement} element
		 * @param {String} effect
		 */
		
		/*
		 *  rewrite later
		 */
		
		scrollTo : function(element,effect) {
			element = $(element);
			effect = effect || 'normal';
			switch(effect){
				case 'slow':
				XN.EFFECT.scrollTo(element);
				break;
				default:
				window.scrollTo(0,element.realTop());
				break;
			}
			return element;
		},
		
		/**
		 * check if an element is visible
		 * @method visible
		 * @param {HTMLElement | String} element
		 * @return {Boolean}
		 */
		
		visible : function( element )
		{
			element = $( element );
			return element.style.display != 'none' && element.style.visibility != 'hidden';
		},
		
        /**
         * 来回开关一个元素的某个样式
         * <pre>
         *  &lt;div onclick="$(this).toggleClass('expand');"&gt;&lt;/div&gt;
         * </pre>
         * @method toggleClass
         * @param {HTMLElement | String} element
         * @return {HTMLElement}
         */

        toggleClass : function( element , className, className2 )
        {
            if ( isUndefined( className2 ) )
            {
                if ( This.hasClassName( element , className ) )
                {
                    This.delClass( element , className );
                }
                else
                {
                    This.addClass( element , className );
                }
            }
            else
            {
                if ( This.hasClassName( element , className ) )
                {
                    This.delClass( element , className );
                    This.addClass( element , className2 );
                }
                else
                {
                    This.addClass( element , className );
                    This.delClass( element , className2 );
                }
            }
            return $( element );
        },

        /**
         * 切换一个元素的innerHTML 
         * <pre>
         *  &lt;div onclick="$(this).toggleText('1', '2');"&gt;&lt;/div&gt;
         * </pre>
         * @method toggleText
         * @param {HTMLElement | String} element
         * @param {HTMLElement | String} text1 
         * @param {HTMLElement | String} text2 
         * @return {HTMLElement}
         */ 

        toggleText : function(element, text1, text2)
        {
            if (element.innerHTML == text1)
            {
                element.innerHTML = text2;
            }
            else
            {
                element.innerHTML = text1;
            }
        },

		/**
		 * check if an element has given className
		 * @method hasClassName
		 * @param {HTMLElement | String} element
		 * @param {String} className
		 * @return {Boolean}
		 */
		
		hasClassName : function( element , className )
		{
			return new RegExp( '(^|\\s+)' + className + '(\\s+|$)' ).test( $( element ).className );
		},
	    	
		/**
		 * add classname to an element
		 * @method addClass
		 * @param {HTMLElement | String} element
		 * @param {String} className
		 * @return {HTMLElement}
		 */
		
		addClass : function( element , className )
		{
			element = $(element);
			if ( This.hasClassName( element , className ) )return element;
			element.className += ' ' + className;
			return element;
		},
		
		/**
		 * del className from an element
		 * @method delClass
		 * @param {HTMLElement | String} element
		 * @param {String} className
		 * @return {HTMLElement}
		 */
		
		delClass : function( element , className )
		{
			element = $(element);
			element.className = element.className.replace( new RegExp( '(^|\\s+)' + className + '(\\s+|$)' , 'g' ) , ' ' );
			return element;
		},
		
		/**
		 * show an element
		 * @method show element
		 * @param {HTMLElement | String} element
		 * @param {String} effect
		 * @return {HTMLElement}
		 */
		
		/*
		 * rewrite later
		 */
		
		show : function (element,effect){
			element = $(element);
			if(element.style.display != 'none')return;
			effect = effect || 'normal';
		 	switch(effect){
				case 'normal':
				element.style.display = '';
				break;
				case 'fade':
				XN.EFFECT.fadeIn(element,function(e){
					e.style.display = '';
				});
				break;
				case 'slide':
				XN.EFFECT.slideOpen(element);
				break;
				case 'delay':
				setTimeout(function(){
					element.style.display = '';
				},2000);
				break;
			}
			return element;
		},
		
		/**
		 * hide an element
		 * @method hide
		 * @param {HTMLElement} element
		 * @param {String} effect
		 * @return {HTMLElement}
		 */
		
		/*
		 * rewrite later
		 */
		
		hide : function (element,effect){
			element = $(element);
			if(element.style.display == 'none')return;
			effect = effect || 'normal';
		 	switch(effect){
				case 'normal':
				element.style.display = 'none';
				break;
				case 'fade':
				XN.EFFECT.fadeOut(element,function(e){
					e.style.display = 'none';
				});
				break;
				case 'slide':
				XN.EFFECT.slideClose(element);
				break;
				case 'delay':
				setTimeout(function(){
					element.style.display = 'none';
				},2000);
				break;
			}
			return element;
		},
		
		/**
		 * remove element from the DOM
		 * @method remove
		 * @param {HTMLElement | String} element
		 * @return {HTMLElement}
		 */
		
		remove : function( element )
		{
			var element = $(element);
			element.parentNode.removeChild( element );
			return element;
		},
		
		/**
		 * set style for an element
		 * @method setStyle
		 * @param {HTMLElement | String} element
		 * @param {String} style
		 * @return {HTMLElement}
		 */
		
		setStyle : function( element , style )
		{
			var element = $(element);
			element.style.cssText += ';' + style;
			return element;
		},
		
		/**
		 * get style by style name
		 * @param {HTMLElement | String} element
		 * @param {String} name
		 * @return {String}
		 */
		
		getStyle : function( element , style )
		{
			element = $(element);
			
			style = style == 'float' ? 'cssFloat' : style;
			
			var value = element.style[ style ];
			
			if ( !value )
			{
				var css = document.defaultView.getComputedStyle( element , null );
				value = css ? css[style] : null;
			}
			
			if ( style == 'opacity' ) return value ? parseFloat( value ) : 1.0;
			
			return value == 'auto' ? null : value;
		},
		
		/**
		 * @method addEvent
		 * @return {HTMLElement}
		 * @see XN.event.addEvent
		 */
		
		addEvent : function()
		{
			addEvent.apply( null , arguments );
			return arguments[0];
		},
		
		/**
		 * @method delEvent
		 * @return {HTMLElement}
		 * @see XN.event.delEvent
		 */
		
		delEvent : function()
		{
			delEvent.apply( null , arguments );
			return arguments[0];
		},
		
		_eventListeners : {},
		
		/**
		 * add Child node to element
		 * @method addChild
		 * @param {HTMLElement | String} father
		 * @param {HTMLElement | String | XN.ui.element | XN.net.xmlhttp} child
		 * @return {HTMLElement}
		 */
		
		addChild : function( father , child )
		{
			father = $( father );
			
			if ( isString( child ) || isNumber(child) )
			{
				var element = String(child).charAt(0) == '#' ? Sizzle(child)[0] : child;
				if( isString( child ) || isNumber(child) )
				{
					father.innerHTML += element;
				}
				else
				{
					father.appendChild( element );
				}
			}
			else if ( isElement( child ) )
			{
				father.appendChild( child );
			}
			else if( child.iAmUIelement )
			{
				father.appendChild( $( child.frame ) );
			}
			else if( child.iAmXmlhttp )
			{
				child.fillTo = father;
				father.startLoading();
			}
			return father;
		},
		
		/**
		 * 
		 * @method delChild
		 * @param {HTMLElement | String} father
		 * @param {HTMLElement | String | XN.ui.element } child
		 * @return {HTMLElement}
		 */
		
		delChild : function( father , child )
		{
			child = $( child );
			child.remove();
			return $( father );
		},
		
		/**
		 * @method setContent
		 * @param {HTMLElement | String} element
		 * @param {HTMLElement | String | XN.ui.element | XN.net.xmlhttp} c
		 * @return {HTMLElement}
		 */
		
		setContent : function( element , c )
		{
			element = $( element );
			element.innerHTML = '';
			element.addChild( c );
			return element;
		},

		/**
		 * 通过字符串设置此元素的内容
		 * 为兼容HTML5标签，IE下无法直接使用innerHTML
		 * @param str html代码
		 */
		setHTML: function(element, str) {
			if (needGetDom) {
				element.innerHTML = '';
				var nodes = getDom(str);
				while (nodes.firstChild) element.appendChild(nodes.firstChild);
			} else {
				element.innerHTML = str;
			}
		},

		getPosition : function( element , parentE )
		{
			parentE = $( parentE ) || document.body;
			element = $( element );
			var rl = 0;
			var rt = 0;
			var p = element;
            //fix ie7 未指明的错误
            try{
			    while ( p && p != parentE )
			    {
			    	rl += p.offsetLeft;
			    	rt += p.offsetTop;
		    		p = p.offsetParent;
			    }
            }catch(e){}
			return { 'left' : rl , 'top' : rt };
		},
		
        /**
         * 获取元素的绝对左边距
         * @method realLeft
         * @param {HTMLElement | String} element
         * @return {Int}
         */

		realLeft : function( element , p )
		{
			return This.getPosition( element , p || null ).left;
		},
		
		/**
         * 获取元素的绝对上边距
         * @method realTop
         * @param {HTMLElement | String} element
         * @return {Int}
         */

        realTop : function( element , p )
		{
			return This.getPosition( element , p || null ).top;
		},
        
        /**
         * 直接append HTML
         * @method appendHTML
         * @param {String} str
         * @return {HTMLElement}
         */
        
        appendHTML : function( element, str, getElements)
        {
            element = $( element );
            var f = document.createDocumentFragment();
            var t = $element( 'div' );
		    t.innerHTML = str;
		    while( t.firstChild )
            {
			    f.appendChild( t.firstChild );
		    }
            var tmp = XN.array.build(f.childNodes);
            element.appendChild( f );
            if ( getElements ) return tmp;
            return element;
        },

        findFirstClass : function( element, className )
        {
            element = $( element );
            var els = XN.dom.getElementsByClassName( className, element );
            return $(els[0]) || null;
        },

        /**
         * 在一个div内显示loading的图标,用于ajax动态加载数据
         * 
         * <pre>
         * $( 'message' ).startLoading( 'loading...' );
         * </pre>
         * @method startLoading
         * @param {HTMLElement | String} element
         * @param {String} msg loading时的提示信息
         * @return {HTMLElement}
         */

        startLoading : function( element , msg )
        {
            element = $( element );
            element.innerHTML = '<center><img src=\"' + XN.ENV.staticRoot + 'img/indicator.gif\" />' + (msg || '加载中...') + '</center>';
            return element;
        },
        
        stopLoading:function( element )
        {
            element = $( element );
            return element;
        },
        
        /**
         * eval js in innerHTML
         * @method eval_inner_JS
         * @param {String | HTMLElement} el
         */
        
        eval_inner_JS : function( el )
        {
            var js = $( el ).getElementsByTagName( 'script' );
            XN.array.each( js, function( i, s )
            {
                if ( s.src )
                {
                    XN.loadFile( s.src );
                }
                else
                {
                    var inner_js = '__inner_js_out_put = [];\n';
                    inner_js += s.innerHTML.replace( /document\.write/g, '__inner_js_out_put.push' );
                    eval( inner_js );
                    if ( __inner_js_out_put.length !== 0 )
                    {
                        var tmp = document.createDocumentFragment();
                        $( tmp ).appendHTML( __inner_js_out_put.join( '' ) );
                        s.parentNode.insertBefore( tmp, s );
                    }
                }
            });
        }
	};
	
	XN.element.extend = function( element )
	{
		var cache = This.extend.cache;
		for ( var m in This )
		{
			if ( !( m in element ) )
			{
				element[ m ] = cache.findOrStore( This[ m ] );
			}
		}
		return element;
	};
	
	XN.element.extend.cache = {
	  findOrStore : function( value )
	  {
	  	return this[ value ] = this[ value ] || function()
		{
	  		return value.apply( null , [ this ].concat( XN.array.build( arguments ) ) );
		};
	  }		
	};
	
	var This = XN.element;
	
	if( browser.IE )
	{
		XN.element.getStyle = function( element , style )
		{
		    element = $( element );
		    style = ( style == 'float' || style == 'cssFloat' ) ? 'styleFloat' : style;
		    var value = element.style[ style ];
		    if ( !value && element.currentStyle ) value = element.currentStyle[ style ];
		
		    if ( style == 'opacity' )
			{
		      if (value = ( element.getStyle('filter') || '' ).match( /alpha\(opacity=(.*)\)/ ) )
		        if ( value[ 1 ] ) return parseFloat( value[ 1 ] ) / 100;
		      return 1.0;
		    }
		
		    if ( value == 'auto' )
			{
		      if ( (style == 'width' || style == 'height' ) && ( element.getStyle( 'display' ) != 'none') )
		        return element[ 'offset'+ ( style == 'width' ? 'Width' : 'Height' ) ] + 'px';
		      return null;
		    }
		    return value;			
		}
	}

    /**
     * 设置元素透明度
     * <pre>
     *  XN.element.setOpacity( el , 0.3 );
     *  or
     *  $( el ).setOpactiy( 0.3 );
     * </pre>
     * @method setOpacity
     * @param {Float} opacity
     * @return {HTMLElement}
     */
    if ( document.addEventListener )
    {
        XN.element.setOpacity = function( element , opacity )
        {
            element = $( element );
            element.style.opacity = opacity;
            return element;
        };
    }
    else
    {
        XN.element.setOpacity = function( element , opacity )
        {
            element = $( element );
            element.style.zoom = 1;
            element.style.filter = 'Alpha(opacity=' + Math.ceil( opacity * 100 ) + ')';
            return element;            
        };
    }
})();

/*
 *  patch for old version
 */

XN.ELEMENT = XN.Element = XN.element;

/*
 * patch end
 */
/**
 * @namespace XN
 * @class net
 * @static
 */

XN.namespace( 'net' );


XN.net.proxys = {};

/**
 * send form by xmlhttp<br />
 * the params is like {url:'',form:'',method:'',onSuccess:'',onError:''}
 * @namespace XN.net 
 * @method sendForm 
 * @param {Object} params
 * @return {XN.net.xmlhttp}
 * @requires xn.form.js
 */

XN.net.sendForm = function( params )
{
    XN.log( 'send form' );
	params.data = XN.FORM.serialize( params.form );
	return new XN.net.xmlhttp( params );
};

/**
 * 发送一个统计，为避免垃圾回收导致不能发送请求，将img放到window的一个全局变量中
 * @see http://hi.baidu.com/naivebaby/blog/item/91a5fb18dc95631434fa4137.html
 */
XN.net.sendStats = function(url) {
	var n = "log_"+ (new Date()).getTime();
	var c = window[n] = new Image(); // 把new Image()赋给一个全局变量长期持有
	c.onload = (c.onerror=function(){window[n] = null;});
	c.src = url;
	c = null; // 释放局部变量c
};

/**
 * 参数形式
 * <pre>
 * {
 *  url:'',
 *  data:'',
 *  useCache:true,
 *  method:'get',
 *  onComplete:functoin,//请求完成回调
 *  onSuccess:function,//请求成功回调
 *  onError:''//请求失败回调
 *  }
 *
 *  注意: 302重定向属于失败状态
 *  
 *  callBack = function(r)
 *  {
 *      if ( r.status == 302 )
 *      {
 *      }
 *  }
 *  
 *  回调函数可以通过r.status判断是否重定向
 *  </pre>
 * @namespace XN.net
 * @class xmlhttp
 * @constructor
 * @param {Object} params
 */
XN.net.xmlhttp = function( params ){
    var This = this;
	
    if ( !XN.net.cache )
         XN.net.cache = new XN.util.cache();
	
	//patch for old version
	if ( arguments.length > 1 ){
		this.url = arguments[ 0 ] || null;
		this.data = arguments[ 1 ] || '';
		this.onSuccess = arguments[ 2 ];
		extendObject( this , arguments[ 3 ] );
		init( window );
		return this;
	}
	
	extendObject( this, params );

    var cache;
	
    if ( this.useCache && ( cache = XN.net.cache.get( this.url + encodeURIComponent( this.data ) ) ) ){
        this.transport = {};
        this.transport.responseText = cache;
        setTimeout( function(){
            This._onComplete( );
            This._onSuccess( );
        }, 0 );
        return this;
    }
    
    function init( w ){
        This.transport = This.getTransport( w );
		return This.url && This.send( This.method );
    }

    function getDomain( link ){
        var a = $element( 'a' );
        a.href = link;
        return a.hostname;
    }

	//请求Host
	var requestHost = getDomain( this.url );
	
    if ( /^http/.test( this.url ) && location.hostname != requestHost){
        if ( XN.net.proxys[ requestHost ] )
			init( XN.net.proxys[ requestHost ] );
		else{
			var iframe = $element( 'iframe' ).hide();
			document.body.insertBefore(iframe, document.body.firstChild);
			iframe.src = 'http://' + requestHost + '/ajaxproxy.htm';
			XN.event.addEvent(iframe, 'load', function(){
				try{
					init( iframe.contentWindow );
					XN.net.proxys[ requestHost ] = iframe.contentWindow;
				}
				catch(e){}
			});
		}
    }
    else
        init( window );
	return This;
};

XN.net.xmlhttp.prototype =
{
	url : null,
	data : '',
	onStart: new Function(),
	onSuccess : null,
	onFailure : null,
	onError : null,
	fillTo : null,
	method : 'post',
	asynchronous : true,
	transport : null,
	headers : null,
	iAmXmlhttp:true,
    useCache : false,
	
	
	/**
	 * 取消当前请求
	 * @method abort
	 */
	
	abort:function(){
		this.transport.abort();
	},

	send:function( method )
	{
		var _url;
		if ( method == 'get' && this.data !== '' )
			_url = this.url + (/\?/.test(this.url) ? '&' : '?') + this.data;	
		else
			_url = this.url;
			
		this.transport.onreadystatechange = this.onStateChange.bind( this );		
		this.transport.open( method , _url , this.asynchronous );		
		this.transport.setRequestHeader( 'Content-Type' , 'application/x-www-form-urlencoded' );
		
		if ( this.headers !== null ){
			for ( var i in this.headers ){
				this.transport.setRequestHeader( i ,this.headers[ i ] );
			}
		}
		//安全 阻止跨站提交
		var params  = null;
		if(method == 'post'){
			params = this.data;
			if(XN.get_check)
				params += (this.data ? '&' : '') + 'requestToken=' + XN.get_check;		
		}
		
		// null log listener
		// only IE && profile && get request && 十分之一
		try{
			if(window.event && document.body.id == 'profile' && method == 'get' && /(none|null)\b/.test(this.url) && XN.user.id % 10 == 0) {
				var temp = document.createElement('div');
				var obj = event.srcElement;
				temp.appendChild(obj);
				if(obj) {
					var params = {from:'profile', nodeHTML:temp.innerHTML};
					nullOrNoneLog(params);
				}
			}
		}
		catch(e){}
		
		this.transport.send( params );
	},
	
    _onSuccess : function( obj )
    {
        var transport = this.transport;
        if ( this.fillTo !== null )
        {
            try{this.fillTo.stopLoading();}catch(e){}
            this.fillTo.innerHTML = transport.responseText;
        }
        try
        {
            if ( this.onSuccess ) this.onSuccess.call( null , transport );
        }
        catch( e )
        {
            if ( XN.DEBUG_MODE ) throw e;
        }
    },
    
    _onComplete : function( obj )
    {
        var transport = this.transport;
        try
        {
            if ( this.onComplete ) this.onComplete.call( null , transport );
        }
        catch( e )
        {
            if ( XN.DEBUG_MODE ) throw e;
        }
    },

	onStateChange : function()
	{
		var transport = this.transport;
		if( transport.readyState == 1 && !this.hasRunStart){
			this.onStart();
			this.hasRunStart = true;
		}			
		else if ( transport.readyState == 4 ){
			if( transport.status == undefined || transport.status == 0 || ( transport.status >= 200 && transport.status < 300) )
			{
                if ( this.useCache )
                {
                    XN.net.cache.add( this.url + encodeURIComponent( this.data ) , this.transport.responseText );
                }
                this._onSuccess();
			}
			else
			{
				(this.onError || this.onFailure || XN.func.empty ).call( null , transport );
			}
			this._onComplete();
		}
	}
};

XN.net.xmlhttp.prototype.getTransport = function(w){
	if( w != window )
		return w.getTransport();		
	else if( XN.browser.IE ){
		try{
			return new ActiveXObject( 'Msxml2.XMLHTTP' );
		}
		catch(e){
			return new ActiveXObject( 'Microsoft.XMLHTTP' );
		}
	}
	else
		return new XMLHttpRequest();
};

/*
 * patch for old version
 */

XN.NET = XN.Net = XN.net;

XN.net.ajax = XN.net.xmlhttp;

$extend( XN.net.xmlhttp.prototype , 
{
	get : function( url , data , onSuccess , params )
	{
		this.url = url;
		this.data = data;
		this.onSuccess = onSuccess;
		$extend( this , params );
		this.send( 'get' );
	},
	post : function( url , data , onSuccess , params )
	{
		this.url = url;
		this.data = data;
		this.onSuccess = onSuccess;
		$extend( this , params );
		this.send( 'post' );		
	}
} );

if ( typeof Ajax == 'undefined' )
{
	Ajax = {};
	Ajax.Request = function( url , o )
	{
		var p = o.parameters;
		o[ 'url' ] = url;
		o[ 'data' ] = p;
		delete o.parameters;
		return new XN.net.xmlhttp( o );
	} 
}

/*
 * patch end
 */
/**
 * @module core
 */

/**
 * @namespace XN
 * @class template
 * @static
 */

XN.template = {};

/**
 * @namespace XN.template
 * @method mediaPlayer
 * @param {Object} o
 * @return {String}
 */

XN.template.mediaPlayer = function( o )
{
	return [ 
	'<object classid="CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95" width="' + (o.width || '352') + '" height="' + (o.height || '70') + '" >\n',
	'<param name="autostart" value="' + (o.autostart || '1')+'" >\n',
	'<param name="showstatusbar" value="' + (o.showstatusbar || '1')+ '">\n',
	'<param name="filename" value="'+ o.filename +'">\n',
	'<embed type="application/x-oleobject" codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701" ',
	'flename="mp"',
	'autostart="' + (o.autostart || '1') + '" showstatusbar="' + (o.showstatusbar || '1') + '" ',
	'src="' + o.filename + '" width="' + (o.width || '352') + '" height="' + (o.height || '70') + '"></embed>'
	].join( '' );
};

/**
 * @namespace XN.template
 * @method  flashPlayer
 * @param {Object} o
 * @return {String}
 */

XN.template.flashPlayer = function( o )
{
	return '<embed src="' + XN.ENV.staticRoot + '/swf/player.swf?url=' + o.filename + '&Rwid=' + (o.width || '450') + '&Autoplay=' + (o.autostart || '1')+ '" wmode="' + (o.wmode || 'transparent') +'" loop="false" menu="false" quality="high" scale="noscale" salign="lt" bgcolor="#ffffff" width="' + (o.width || '450') + '" height="' + (o.height || '30') + '" align="middle" allowScriptAccess="' + (o.allowScriptAccess || 'sameDomain') + '" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />';
};

/**
 * @namespace XN.template
 * @method flash
 * @param {Object} o
 * @return {String}
 */

XN.template.flash = function( o )
{
	return '&nbsp;<embed src="' + o.filename + '" type="application/x-shockwave-flash" ' +
	'width="' + (o.width || '320') + '" height="' + (o.height || '240') + '" allowFullScreen="true" wmode="' + (o.wmode || 'transparent') + '" allowNetworking="' + (o.allowNetworking || 'all') + '" allowScriptAccess="' + (o.allowScriptAccess || 'sameDomain') + '"></embed>';
};

/*
 * patch for old version
 */

XN.Template = XN.TEMPLATE = XN.template;

/*
 * patch end
 */

/**
 * @module core
 */

/**
 * 常用功能的封装
 * @namespace XN
 * @class util
 * @static
 */

XN.namespace( 'util' );

XN.util.__timeouts = [];
XN.util.__intervals = [];

XN.util.setTimeout = function(a, b) {
	var timer = setTimeout(a, b);
	this.__timeouts.push(timer);
	return timer;
}

XN.util.setInterval = function(a, b) {
	var timer = setInterval(a, b);
	this.__intervals.push(timer);
	return timer;
}

XN.util.clearTimeout = function(timer) {
	for (var i = 0; i < this.__timeouts.length; i++) {
		if (this.__timeouts[i] == timer) this.__timeouts.slice(i, 1);
	}
	clearTimeout(timer);
}

XN.util.clearInterval = function(timer) {
	for (var i = 0; i < this.__intervals.length; i++) {
		if (this.__intervals[i] == timer) this.__intervals.slice(i, 1);
	}
	clearInterval(timer);
}

XN.util.clearAllTimer = function() {
	for (var i = 0; i < this.__timeouts.length; i++) clearTimeout(this.__timeouts[i]);
	for (var i = 0; i < this.__intervals.length; i++) clearInterval(this.__intervals[i]);
	this.__timeouts = [];
	this.__intervals = [];
}

/**
 * data cache class
 * @namespace XN.util
 * @class cache
 * @constructor
 * @param {Object} params
 */

XN.util.cache = function( params )
{
	$extend( this , params );
	this._cacheData = [];
};

XN.util.cache.prototype =
{
	
	/**
	 * @property cacheLength
	 * @type {Int}
	 */
	
	cacheLength : null,
	
	_cacheData : null,
	
	/**
	 * check if the cahe key exist
	 * @method isExist
	 * @param {String | Int} key
	 * @return {Boolean}
	 */
	
	isExist : function( key )
	{
		return this.get( key );
	},
	
	/**
	 * add a cache data
	 * @method add
	 * @param {String | Int} key
	 * @param {Any} value
	 */
	
	add : function( key ,value )
	{
		
		if ( !isUndefined( this.isExist( key ) ) ) return;
	
		
		if ( this.cacheLength && this.cacheLength == this._cacheData.length )
		{
			this._cacheData.shift();
		}
		
		this._cacheData.push( {
			'key'	:	key,
			'value':	value
		} );
	},
	
	/**
	 * get cache data by key
	 * @method get
	 * @param {String | Int} key
	 * @return {Any}
	 */
	
	get : function( key )
	{

		for ( var i = this._cacheData.length - 1 ; i >= 0 ; i-- )
		{
			if( this._cacheData[i].key == key )
			{			
				return this._cacheData[i].value;
			}
		}		
	},
	
	/**
	 * clear cache
	 * @method clear
	 */
	
	clear : function(){
		this._cacheData = [];
	}	
};

/*
 * patch for old version
 */

XN.UTIL = XN.Util = XN.util;

/*
 * patch end
 */

/**
 * json格式的ajax数据源
 * <pre>
 *  参数形式如下
 *  <pre>
 *  {
 *      url:'',//查询的url
 *      queryParam:'query',//查询的参数名
 *      attachParam:'',//附加参数
 *      rootKey:null//如果不指定，则认为整个json即为查询结果
 *  }
 *  </pre>
 * </pre>
 *
 * @namespace XN.util
 * @class DS_JSON
 * @constructor
 * @param {Object} params
 */

XN.util.DS_JSON = function( p )
{
	$extend( this , p );
};

XN.util.DS_JSON.prototype  =
{
	DS_TYPE : 'JSON',
	url : null,
	queryParam : 'query',
	attachParam : '',
	rootKey : null,
    method : 'get',
	_request : null,

    /**
     * 查询数据
     * @method query
     * @param {String} v 查询的字符串
     * @param {Function} callBack 回调函数
     */

	query : function( v , callBack )
	{
        //XN.log( v );
        //XN.log( callBack );
		var This = this;
		
		try{
			this._request.abort();
		}catch(e){}
		
		function parseDS_JSON( r )
		{
			r = r.responseText;
			var pp;
			try{
				var rt = XN.JSON.parse( r );
				if ( This.rootKey && rt[ This.rootKey ] )
				{
					pp = rt[ This.rootKey ];
				}
				else
				{
					pp = rt;
				}
            }
			catch( e )
			{
				pp = [];
			}

			callBack( pp );
		}
		
		this._request = new XN.net.xmlhttp(
		{
			url : this.url,
			data : this.queryParam + '=' + encodeURIComponent( v ) + '&' + this.attachParam,
			method : this.method,
            onSuccess : parseDS_JSON
		});
	}
};

XN.ui.DS_JSON = XN.util.DS_JSON;


/**
 * 用于好友选择器的好友数据源
 * <pre>
 * 参数形式如下
 * {
 *  url:''//请求的url
 * }
 * </pre>
 * @namespace XN.util
 * @class DS_friends
 * @constructor
 * @param {Object} params
 */

/**
 * 如果指定了此属性，将在此网络内查询好友
 * @property net
 * @type {String}
 */

/**
 * 如果指定了此属性，将在此分组内查询好友
 * @property group
 * @type {String}
 */


/**
 * 查询好友
 * @method query
 * @param {String} name
 * @param {Function} callBack
 */

XN.util.DS_friends = function( p )
{
    var ds = new XN.util.DS_JSON( p );
    ds.queryParam = 'p';
    ds.rootKey = 'candidate';
    ds.net = '';
    ds.group = '';
    ds.page = isUndefined(p.page) ? false : p.page;

    ds.param = XN.json.build( p.param || {} );

    var limit =  isUndefined( p.limit ) ? 24 : p.limit;

    ds.query = function( name , callBack )
    {
        XN.log( 'start query' );
        
        //只允许查询字母和汉字
        name = name.replace( /[^a-zA-Z\u0391-\uFFE5]/g , '' );
        
        if ( XN.string.isBlank( name ) && this.group == '' && this.net == '' )
        {
            callBack( [] );
            return;
        }

        var p = [
            '{"init":false,',
            '"qkey":"' + this.qkey + '",',
            '"uid":true,',
            '"uname":true,',
            '"uhead":true,',
            '"limit":' + limit + ',',
            '"param":' + this.param + ',',
            '"query":"' +  name  + '",',
            '"group":"' + this.group + '",',
            '"net":"' + this.net + '",',
            '"page":"' + this.page + '"',
            '}'
        ].join( '' );

        XN.util.DS_JSON.prototype.query.call( this , p , callBack );
    }
    return ds;
};


XN.ui.DS_friends = XN.util.DS_friends;

/**
 * 从数组创建数据源
 * <pre>
 * 参数形式如下
 *  {
 *      data:a,//创建源的数组
 *      searchKey:'name'//要搜索的字段
 *  }
 * </pre>
 * @namespace XN.util
 * @class DS_Array
 * @constructor
 * @param {Object} params
 */

/**
 * 查询数组
 * @method query
 * @param {String} v 查询的字符串
 * @param {Function} callBack
 */

XN.util.DS_Array = function( p )
{
	$extend( this , p );
	this.init();
};

XN.util.DS_Array.prototype =
{
	DS_TYPE : 'array',
	data : null,
	searchKey : null,
	
	init : function()
	{
		var key = this.searchKey,
		index = this._index = [];
		
		XN.array.each( this.data , function( i , v )
		{
			index.push( v[ key ] );
		} );
	},
	
	query : function( v , callBack )
	{
		callBack( this._search( v ) );
	},
	
	_search : function( v )
	{
		var keys = this._index,
		data = this.data,
		rt = [],
		reg = new RegExp( '^' + v , 'i' );
		XN.array.each( keys , function( i , v )
		{
			if ( reg.test( v ) ) rt.push( data[ i ] );
		} );
		return rt;
	}
};

XN.ui.DS_Array = XN.util.DS_Array;


/**
 * xml格式的ajax数据源
 * <pre>
 * 参数形式如下: 
 *  {
 *      url:''//查询的url地址
 *  }
 * </pre>
 * @namespace XN.util
 * @class DS_XHR
 * @constructor 
 * @param {Object} params
 */

/**
 * 查询数据源
 * @method query
 * @param {String} v
 * @param {Function} callBack
 */

XN.util.DS_XHR = function( p )
{
	$extend( this , p );
};

XN.util.DS_XHR.prototype =
{
	url : null,
	queryParam : 'query',
	_request : null,
	
	query : function( v , callBack )
	{
		var This = this;
		
		try{
			this._request.abort();
		}catch(e){}
		
		function parseDS_XML( r )
		{
			r = r.responseXML;
			var rt = [];
			function getResult( r )
			{
				var tmp = {};
				XN.array.each( r.childNodes , function( i , v )
				{
					tmp[ v.tagName.toLowerCase() ] = v.firstChild.nodeValue;
				} );
				return tmp;
			}
			try{
				var rs = r.getElementsByTagName( 'Result' );
				XN.array.each( rs , function( i , v )
				{
					rt.push( getResult( v ) );
				} );
			}
			catch( e )
			{
				rt = [];
			}
			callBack( rt );
		}
		
		this._request = new XN.net.xmlhttp( {
			url : this.url,
			data : this.queryParam + '=' + encodeURIComponent( v ),
			onSuccess : parseDS_XML
		} );
	}
};

XN.ui.DS_XHR = XN.util.DS_XHR;

/**
 * 全局热键
 * @class hotKey
 * @static
 * @namespace XN.util
 */

(function()
{
    var funcs = {};

    XN.util.hotKey = {

        /**
         * 添加热键
         * <pre>
         * XN.util.hotKey.add( '27' , callBack );
         * XN.util.hotKey.add( 'ctrl+27' , callBack );
         * </pre>
         * @method add
         * @param {String} key
         * @param {Function} func
         * @obj {Object} obj
         */

        add : function( key , func , obj )
        {
            key = String( key ).toLowerCase();
            var ctrl = false;
            var alt = false;
            var shift = false;
            var _code = null;

            if ( /^\d+$/.test( key ) )
            {
                _code = parseInt( key );
            }
            else
            {
                ctrl = /ctrl|ctr|c/.test( key );
                alt = /alt|a/.test( key );
                shift = /shift|s/.test( key );
                if ( /\d+/.test( key ) )
                {
                    _code = parseInt( /\d+/.exec( key )[ 0 ] );
                }
                else
                {
                    _code = false;
                }
            }

            funcs[ key ] = funcs[ key ] || {};

            funcs[ key ][ func ] = function( e )
            {
                e = e || window.event;
                code = e.keyCode;
                if ( ctrl && !e.ctrlKey ) return;
                if ( alt && !e.altKey ) return;
                if ( shift && !e.shiftKey ) return;
                if ( _code && code !== _code ) return;
                func.call( obj || null );
                XN.event.stop( e );
            };
            XN.event.addEvent( document , 'keydown' , funcs[ key ][ func ] );
        },
        
        /**
         * 删除热键
         * <pre>
         * XN.util.hotKey.del( '27' , callBack );
         * </pre>
         * @method del
         * @param {String} key
         * @param {Function} func
         */
        
        del : function( key , func )
        {
            key = String( key ).toLowerCase();
            XN.event.delEvent( document , 'keydown' , funcs[ key ][ func ] );
            delete funcs[ key ][ func ];
        }
    };
})();

(function()
{
    var id = 0;
    XN.util.createObjID = function()
    {
      id ++;
      return id;
    };
})();
/**
 * alert && confirm
 * @namespace XN
 * @class DO
 * @static
 */

XN.DO = XN.Do = {};

(function(){

    var currentAlert = null;
    var currentConfirm = null;
    
    /**
     *  友好的alert
     *  <pre>
     *  参数形式如下: 
     *  {
     *      title:'',//对话框标题
     *      mesage:'',//提示信息
     *      type:'',//对话框的样式
     *      widith:int,//宽度
     *      height:int,//高度
     *      button:'',//按钮文字
     *      callBack:function,//回调函数
     *      autoHide:0,//自动关闭时间
     *      X:int,
     *      Y:int
     *  }
     *  </pre>
     *  @method alert
     *  @param {Object} params
     *  @return {XN.ui.dialog}
     */

    XN.DO.alert = function( message , title , type , X , Y , w , h , callBack ){
        var params = {
            type: 'normal',
            width: 400,
            button: '确定',
			modal: false,
            callBack: XN.func.empty,
            autoHide: 0,
            addIframe : true,
			closeFire: true
        };

		/**patch for old version*/
        if ( !isString( message ) && !isNumber( message ) ) 
			extendObject( params , message );        
        else if ( arguments.length >= 1 ){
            var ars = arguments;
            XN.array.each([ 'message' , 'title' , 'type' , 'X' , 'Y' , 'width' , 'height' , 'callBack' ] , function( i , v ){
                if (ars[i]) 
					params[v] = ars[i];
            });
        }
		
		// 对params进行二次处理
		var temp = params.params;
		delete params.params;
		params = extendObject({}, params, temp);
		/**patch end*/
		
		params.callback = params.callback || params.callBack;
		
		// 移除上一个ALERT
        try{
            currentAlert.remove(params.modal === true);
        }catch( e ){}
		
		// 调用dialog
        var dialog = new XN.ui.dialog(params)
        .setType( params.type )
        .setTitle( params.title || ( params.type == 'error' ? '错误提示' : '提示' ) )
        // .setBody( params.msg || params.message || '' )
        .setWidth( params.width )
        .setHeight( params.height )
        .setX( params.X )
        .setY( params.Y )
        .addButton({
            text : ( params.yes || params.button ),
            onclick : function(){
				dialog.setAutoHide(true);
                return params.callback.call( dialog );
            }
        }).show();

		if(params.closeFire === true)	
			dialog.addEvent('close', function(){params.callback.call( dialog );});

        currentAlert = dialog;
        
        try{
            dialog.getButton( params.button ).focus();
        }catch(e){}

        if ( params.autoHide )
            dialog.autoHide( params.autoHide );
        return dialog;
    };

    /**
     * 友好的confirm
     * <pre>
     * 参数形式如下: 
     * {
     *  title:'',//标题
     *  message:'',//提示信息
     *  type:'',//样式
     *  width:int,//宽度
     *  height:int,//高度
     *  submit:'',//确定按钮的文字
     *  cancel:'',//取消按钮的样式
     *  focus: '',//聚焦的按钮'submit'or'cancel'
     *  callBack : function,//回调函数
     * }
     *  
     * </pre>
     * @method confirm
     * @param {Object} params
     * @return {XN.ui.dialog}
     */

    XN.DO.confirm = function( message,title,callBack,yes,no,X,Y,w,h )
    { 
        var params = {
            type : 'normal',
            width : 400,
			modal: false,
            yes : '确定',
            no : '取消',
            callBack : XN.func.empty,
            focus : null,
			addIframe : true,
			closeFire: false
        };

       /**patch for old version*/
        if ( !isString( message ) && !isNumber( message ) ) 
			extendObject( params , message );            
        else if ( arguments.length >= 1 ){
            var ars = arguments;
            XN.array.each( [ 'message' , 'title' , 'callBack' , 'yes' , 'no' , 'X' , 'Y' , 'w' , 'h' ] , function( i , v ){
                if ( ars[ i ] ) params[ v ] = ars[ i ];
            });
        }
		
		// 对params进行二次处理
		var temp = params.params;
		delete params.params;
		params = extendObject({}, params, temp);
        /**patch end*/
		
		params.callback = params.callback || params.callBack;
		
		//移除上一个CONFIRM
        try{
            currentConfirm.remove(params.modal === true);
        }catch( e ){}
		
		// 调用dialog
        var dialog = new XN.ui.dialog(params)
        .setType( params.type )
        .setTitle( params.title || ( params.type == 'error' ? '错误提示' : '提示' ) )
        // .setBody( params.msg || params.message || '' )
        .setWidth( params.width )
        .setHeight( params.height )
        .setX( params.X )
        .setY( params.Y )
        .addButton({
            text : ( params.submit || params.yes ),
            onclick : function(){
				dialog.setAutoHide(true);
                return params.callback.call( dialog , true );
            }
        })
        .addButton({
            text : ( params.cancel || params.no ),
            onclick : function(){
				dialog.setAutoHide(true);
                return params.callback.call( dialog , false );
            }
        }).show();
        
        dialog.getButton( params.cancel || params.no ).addClass( 'gray' );
        
        if (params.focus == 'submit'){
            params.focus = params.submit; 
        }
        else if ( params.focus == 'cancel' ){
            params.focus = params.cancel;
        }
		
		if(params.closeFire === true)	
			dialog.addEvent('close', function(){params.callback.call( dialog , false );});

        dialog.getButton( params.focus || params.submit || params.yes ).focus();
        
        currentConfirm = dialog;
        
        return dialog;
    };

    /**
     * 显示一段信息后自动关闭
     * <pre>
     * 使用方法
     * XN.DO.showMessage( '动感超人' , 'haha' , 3 );
     * </pre>
     * @method showMessage
     * @param {String} msg
     * @param {String} title
     * @param {Int} time 自动关闭时间
     */

    XN.DO.showMessage = XN.DO.showMsg = function( msg , title , time )
    {
        var dialog =  XN.DO.alert({
            msg : msg,
            title : ( title || '提示' ),
            noFooter : true,
            autoHide : ( time || 2 )
        });
        return dialog;
    };
    
    /**
     * 显示一段出错信息后自动关闭
     * <pre>
     * 使用方法
     * XN.DO.showError( '出错信息' , '出错了' , 3 );
     * </pre>
     * @method showError
     * @param {String} msg
     * @param {String} title
     * @param {Int} time 自动关闭时间
     */

    XN.DO.showError = function( msg ,title , time )
    {
        var dialog =  XN.DO.alert({
            msg : msg,
            type : 'error',
            title : (title || '错误提示'),
            noFooter : true,
            autoHide : (time || 2)
        });
        return dialog;
    };
})();
/*
 *  based on YUI:YAHOO.lang.JSON 
 */
XN.json = {
	_ESCAPES : /\\["\\\/bfnrtu]/g,
	_VALUES  : /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
	_BRACKETS : /(?:^|:|,)(?:\s*\[)+/g,
	_INVALID  : /^[\],:{}\s]*$/,
	_SPECIAL_CHARS : /["\\\x00-\x1f\x7f-\x9f]/g,
	_PARSE_DATE : /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})Z$/,
	_CHARS : {
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"' : '\\"',
        '\\': '\\\\'
    },
    dateToString : function (d) {
        function _zeroPad(v) {
            return v < 10 ? '0' + v : v;
        }

        return '"' + d.getUTCFullYear()   + '-' +
            _zeroPad(d.getUTCMonth() + 1) + '-' +
            _zeroPad(d.getUTCDate())      + 'T' +
            _zeroPad(d.getUTCHours())     + ':' +
            _zeroPad(d.getUTCMinutes())   + ':' +
            _zeroPad(d.getUTCSeconds())   + 'Z"';
    },
    stringToDate : function (str) {
        if (XN.JSON._PARSE_DATE.test(str)) {
            var d = new Date();
            d.setUTCFullYear(RegExp.$1, (RegExp.$2|0)-1, RegExp.$3);
            d.setUTCHours(RegExp.$4, RegExp.$5, RegExp.$6);
            return d;
        }
    },
	parse:function(str){
        return eval('(' + str + ')');
	},
	build:function(o,w,d){
	    var m = XN.JSON._CHARS,str_re = XN.JSON._SPECIAL_CHARS,pstack = [];
		var _char = function (c) {
            if (!m[c]) {
                var a = c.charCodeAt();
                m[c] = '\\u00' + Math.floor(a / 16).toString(16) +
                                           (a % 16).toString(16);
            }
            return m[c];
    	};
		var _string = function (s) {
            return '"' + s.replace(str_re, _char) + '"';
        };
		var _date = XN.JSON.dateToString;
        var _stringify = function (o,w,d) {
            var t = typeof o,
                i,len,j,k,v,vt,a;
            if (t === 'string') {
                return _string(o);
            }
            if (t === 'boolean' || o instanceof Boolean) {
                return String(o);
            }
            if (t === 'number' || o instanceof Number) {
                return isFinite(o) ? String(o) : 'null';
            }
            if (o instanceof Date) {
                return _date(o);
            }
            if (isArray(o)) {
                for (i = pstack.length - 1; i >= 0; --i) {
                    if (pstack[i] === o) {
                        return 'null';
                    }
                }
                pstack[pstack.length] = o;

                a = [];
                if (d > 0) {
                    for (i = o.length - 1; i >= 0; --i) {
                        a[i] = _stringify(o[i],w,d-1) || 'null';
                    }
                }
                pstack.pop();

                return '[' + a.join(',') + ']';
            }

            if (t === 'object') {
                if (!o) {
                    return 'null';
                }
                for (i = pstack.length - 1; i >= 0; --i) {
                    if (pstack[i] === o) {
                        return 'null';
                    }
                }
                pstack[pstack.length] = o;

                a = [];
                if (d > 0) {
                    if (w) {
                        for (i = 0, j = 0, len = w.length; i < len; ++i) {
                            if (typeof w[i] === 'string') {
                                v = _stringify(o[w[i]],w,d-1);
                                if (v) {
                                    a[j++] = _string(w[i]) + ':' + v;
                                }
                            }
                        }
                    } else {
                        j = 0;
                        for (k in o) {
                            if (typeof k === 'string' && typeof o[k] != 'undefined') {
                                v = _stringify(o[k],w,d-1);
                                if (v) {
                                    a[j++] = _string(k) + ':' + v;
                                }
                            }
                        }
                    }
                }
                pstack.pop();
                return '{' + a.join(',') + '}';
            }
            return undefined; 
        };
		d = d >= 0 ? d : 1/0;
		return _stringify(o,w,d);
	}
};

/*
 * patch for old version
 */

XN.JSON = XN.Json = XN.json;

/*
 * patch end
 */

//for IM
function writepipe(uin, nick){
	if ( uin > 0 ){
		var s = GetCookie( '_pipe' );
		if ( s ) s += ':';
		SetCookie( '_pipe' , s + uin + ':' + escape( nick ) , null , '/' , '' + XN.env.domain + '' );
	}

	var wi_state = GetCookie( '_wi' );

	if ( 'opening' != wi_state && 'running' != wi_state){			
		SetCookie( '_wi' , 'opening' , null , '/' , XN.ENV.domain );
		
		window.wiw=window.open(
			'http://' + XN.env.domain + '/webpager.do?toid=' + uin ,
			'_blank',
			'height=600,width=650,resizable=yes,location=yes'
		);
		
		if ( window.wiw_checker )
			window.clearInterval( window.wiw_checker );
		
		window.wiw_checker=window.setInterval(function(){
				if ( window.wiw.closed ){
					window.clearInterval( window.wiw_checker );
					SetCookie( '_wi' , '' , null , '/' , XN.ENV.domain );
				}
			}, 1000);
		return true;
	}

	if(window.wiw){
		try{
			wiw.focus();
		}catch(e){}
	}
	return false;
}

function talkto(uin, nick, tiny, doing){
	try{
		var a=new ActiveXObject( 'xntalk.Application' );
		if ( a ) {
			a.openChat( '' , uin );
			return true;
		}
	}catch(e){}

	if ( top.frames['imengine'].gPagerType == 4 ) {
		if ( top.frames['imengine'].imHelper.isLoginUser() ) {
			var tabs = top.frames['imengine'].imui.chatTabs;
			tabs.onActivateWidget( uin, nick, tiny, doing );
			tabs.switchFocus( uin );
			return true;
		}
	}
	
	/*
	try{
		writepipe(uin,nick);
	}catch(e){}
	*/
}

function jump_and_download(link){
	if ( XN.BROWSER.IE ){
		window.open( link , 'download_window', 'toolbar=0,location=no,directories=0,status=0,scrollbars=0,resizeable=0,width=1,height=1,top=0,left=0');
		window.focus();
	}
}

function GetCookieVal(_70){
	var _71=document.cookie.indexOf(";",_70);
	if(_71==-1){
		_71=document.cookie.length;
	}
	return unescape(document.cookie.substring(_70,_71));
}

function GetCookie(_72){
	var arg=_72+"=";
	var _74=arg.length;
	var _75=document.cookie.length;
	var i=0;
	while(i<_75){
		var j=i+_74;
		if(document.cookie.substring(i,j)==arg){
			return GetCookieVal(j);
		}
		i=document.cookie.indexOf(" ",i)+1;
		if(i==0){
			break;
		}
	}
	return null;
}

function SetCookie(_78,_79){
	var _7a=SetCookie.arguments;
	var _7b=SetCookie.arguments.length;
	var _7c=(_7b>2)?_7a[2]:null;
	var _7d=(_7b>3)?_7a[3]:null;
	var _7e=(_7b>4)?_7a[4]:null;
	var _7f=(_7b>5)?_7a[5]:false;
	document.cookie=_78+"="+escape(_79)+((_7c==null)?"":("; expires="+_7c.toGMTString()))+((_7d==null)?"":("; path="+_7d))+((_7e==null)?"":("; domain="+_7e))+((_7f==true)?"; secure":"");
}

if ( XN.browser.Gecko && XN.string.getQuery( 'debug_mode' ) ){
	XN.debug.on();
}

//广告系统
(function()
{
    var _is_loaded = false;
	window.load_jebe_ads = function( s, r, reload ){
        if ( !s ) return;
        if ( _is_loaded && !reload ) return;
			_is_loaded = true;
        XN.dom.ready(function()
        {
			if (!r) r = location.href;
			if (r.match(/http:\/\/www\.renren\.com\/home/ig)) r = 'http://www.renren.com/Home.do';
			var p = XN.cookie.get( 'id' );
            if ( !p || XN.string.isBlank( p ) ) p = '';			
			var src = 'http://ebp.renren.com/ebpn/show?userid=' + encodeURIComponent( p ) + '&isvip=' + XN.user.isVip + '&hideads=' + XN.user.hideAds + '&tt=' + new Date().getTime();
			//if(reload && location.pathname.toLowerCase() != '/home.do' ) 
				//src += '&reflush_new=1';
            //分享终端页面区分分享视频和照片,载入不同的广告
            if( XN.app.share && XN.app.share.pageInfo ) {
                r = r.replace(/\?.*$/,'') + '?shareType=' + XN.app.share.pageInfo.type;
            }

            if ( r ) src += '&r=' + encodeURIComponent(r);

            XN.loadFile({file:src,type:'js'},function(){
				var jsurl = 'http://jebe.xnimg.cn/'+jebe_json.ad_js_version+'/xn.jebe.js';
                XN.loadFile({file:jsurl,type:"js"});
			});
        });
    };
})();


/**
* 当前用户
*/
XN.USER = XN.user = currentUser = {};

XN.USER.me = function( parameters ){};

XN.event.enableCustomEvent( currentUser );

XN.USER.addFriendAction = function( p )
{
    this.config = {
        commentLength : 45,
        needComment : true,
        requestURI : 'http://friend.'+ XN.env.domain +'/ajax_request_friend.do'
    };
    
    $extend( this.config , p );
};

XN.user.addFriendAction.prototype = {
    getConfig : function( key )    {
        return this.config[ key ];
    },
    send : function( id , why , from ,code,codeFlag){
        var code = code != 1 ? 0 : 1;
        var codeFlag = codeFlag || ''
		var This = this;
        
        if ( this.getConfig( 'needComment' ) )
        {
            if ( XN.STRING.isBlank( why ) )
            {
                this.fireEvent( 'checkError' , '您输入的信息不能为空' );
                return;
            }
        }

        if ( why.length > this.getConfig( 'commentLength' ) )
        {
            this.fireEvent( 'checkError' , '您输入的信息不能超过' + this.getConfig( 'commentLength' ) + '个字符' );
            return;
        }

        var data = 'id=' + id + '&why=' + why + '&codeFlag=' + code + '&code=' + codeFlag;
        this.fireEvent( 'beforePost' );
        
        new XN.NET.xmlhttp(
        {
            url : this.getConfig( 'requestURI' ) + '?from=' + from,
            'data' : data,
            onSuccess : function( r )
            {
                
				r = r.responseText;
				if ( r && isJSON(r) ){
            	   var re = XN.JSON.parse( r );
				}else{
					This.fireEvent( 'error' );
					return;
				}
        		if(re.result == '-1'){				
					This.fireEvent( 'flagError' );
					return;
				}

				
                This.fireEvent( 'success' , id , r , from );
                
                if ( !window.currentUser ) return;
                
                if ( currentUser.fireEvent )
                    currentUser.fireEvent( 'addFriendSuccess' , id , r ,from );

                if ( currentUser.onaddFriendSuccess )
                    currentUser.onaddFriendSuccess( id , r );
            },
            onError : function()
            {
                This.fireEvent( 'error' , id , from );
                
                if ( !window.currentUser ) return;
                currentUser.fireEvent( 'addFriendError' , id , r , from );
            }
        });
    }
};

XN.EVENT.enableCustomEvent( XN.USER.addFriendAction.prototype );

//好友申请
XN.dynamicLoad({
	file : 'http://s.xnimg.cn/jspro/xn.app.addFriend.js',
	funcs : ['showRequestFriendDialog'] 
});

//安全
XN.DOM.readyDo(function(){
	if(XN.get_check){
		var forms = Sizzle('form');
		for(var i=0; i<forms.length; i++){
			var safeInput = document.createElement('input');
			safeInput.type = 'hidden';
			safeInput.name = 'requestToken';
			safeInput.value = XN.get_check;
			forms[i].appendChild(safeInput);
		}
	}	
});
/**
 * @module ui
 */

/**
 * @namespace XN
 * @class ui
 * @static
 */

XN.namespace( 'ui' );

(function()
{
	/**
	 * @namespace XN.ui
	 * @class element
	 * @static
	 */
	
	XN.ui.element = {
		
		/**
		 *  the  frame element
		 *  @property frame
		 *  @type {HTMLElement}
		 */
		
		frame : null,
		
		/**
		 * @property iAmUIelement
		 * @protected
		 * @type {Boolean}
		 * @default true
		 */
		
		iAmUIelement : true
        
	};

	/**
	 * @method show
	 * @see XN.element.show
	 */
	
	/**
	 * @method hide
	 * @see XN.element.hide
	 */
	
	/**
	 * @method remove
	 * @see XN.element.remove
	 */
	
	/**
	 * @method addClass
	 * @see XN.element.addClass
	 */
	
	/**
	 * @method deClass
	 * @see XN.element.delClass
	 */
	
	XN.array.each( [ 'addClass' , 'delClass' , 'show' , 'hide' , 'remove' ] , function( i , v )
	{
		XN.ui.element[ v ] = function()
		{
			XN.element[ v ].apply( null , [ this.frame ].concat( XN.array.build( arguments ) ) );
		}
	} );

	/**
	 * @namespace XN.ui
	 * @class container
	 * @static
	 * @extends XN.ui.element
	 */
	
	XN.ui.container =
	{
		
		/**
		 * @property container
		 * @type {HTMLElement}
		 */
		
		container : null
	};
	
	/**
	 * @method addChild
	 * @see XN.element.addChild
	 */
	
	/**
	 * @method delChild
	 * @see XN.element.deChild
	 */
	
	/**
	 * @method setContent
	 * @see XN.element.setContent
	 */
	
	XN.array.each( [ 'addChild' , 'delChild' , 'setContent' ] , function( i , v )
	{
		XN.ui.container[ v ] = function()
		{
			XN.element[ v ].apply( null , [ this.container ].concat( XN.array.build( arguments ) ) );
		}
	} );
	
	$extend( XN.ui.container , XN.ui.element );
	
})();





/*
 *  patch for old version
 */

XN.UI = XN.Ui = XN.ui;
XN.ui.Element = XN.ui.element;
XN.ui.Content = XN.ui.container;

/*
 * patch end
 */
(function( ns )
{	
	var UI = XN.ui;
	var addEvent = XN.event.addEvent;
	var DEBUG = true;
	
	function log( s )
	{
		if ( DEBUG ) XN.log( isString( s ) ? 'xn.ui.button:' + s : s );
	}

	/**
	 * create a button
	 * @namespace XN.ui
	 * @class button
	 * @constructor
	 * @param  {Object} params The intial Attribute.
	 * @extends XN.ui.element
	 */
	
	ns.button = function( params )
	{
		$extend( this , params );
		this.init();
	};

	ns.button.prototype = $extend( {} , UI.Element );
	
	/**
	 * the title of the button
	 * @property text
	 * @type String
	 */
	
	ns.button.prototype.text = null;
	
	/**
	 *	the className of the button
	 * @property className
	 * @type String
	 * @default 'input-submit'
	 */

	ns.button.prototype.className = '';
	
	/**
	 *  the disable class of the button
	 *  @property disableClassName
	 *  @type String
	 *  @default 'gray'
	 */
	
	ns.button.prototype.disableClassName = 'gray';
	
	
	/**
	 * init
	 * @private
	 */
	
	ns.button.prototype.init = function()
	{
		var This = this;

		var el;

		if ( this.getConfig( 'el' ) )
		{
			el = $( this.getConfig( 'el' ) );
		}
		else
		{
			el = $element( 'input' );
		}
		
		this.frame = el;
		el.type = 'button';
	    this.addClass( 'input-submit' );	
		this.addClass( this.getConfig( 'className' ) );
		this.setText( this.getConfig( 'text' ) );
		
		addEvent( el , 'click' , function()
		{
			if ( This.onclick ) This.onclick();
		} , false );		
	};
	
	/**
	 * get user config
	 * @param {String} key
	 * @method getConfig
	 * @return {Any}
	 */
	
	ns.button.prototype.getConfig = function( key )
	{
		if ( key == 'el' ) return this.id;
		return this[ key ];
	};
	
	/**
	 * get dom element of the button
	 * @method getEl 
	 * @return {HTMLElement}
	 */
	
	ns.button.prototype.getEl = function()
	{
		return this.frame;
	};
	/**
	 * set title of the button
	 * @method setText 
	 * @param {String} text
	 */
	
	ns.button.prototype.setText = function( text )
	{
		this.text = text;
		this.getEl().value = text;
	};
	
	/**
	 * disable the button
	 * @method disable
	 */
	
	ns.button.prototype.disable = function(){
		var el = this.getEl();
		el.blur();
		el.disabled = true;
		el.addClass( this.getConfig( 'disableClassName' ) );
	};

	/**
	 *  enable the button
	 *	@method enable
	 */
	
	ns.button.prototype.enable = function(){
		var el = this.getEl();
		el.disabled = false;
		el.delClass( this.getConfig( 'disableClassName' ) );
	};

	/**
	 *  focus on the button
	 *  @method focus
	 */
			
	ns.button.prototype.focus = function(){
		this.getEl().focus();
	};
	
	/**
	 *  make the button blur
	 *  @method blur
	 */

	ns.button.prototype.blur = function(){
		this.getEl().blur();
	};

})( XN.ui );
(function()
{
	var rl = 'realLeft',rt = 'realTop',ow = 'offsetWidth',oh = 'offsetHeight';
	XN.ui.fixPositionMethods = {
		'1-1':function(f,el,x,y,p)
		{
			f.style.left = x + el[ rl ]() - p[ rl ]() + 'px';
			f.style.top = y + el[ rt ]() - p[ rt ]() + 'px';
		},
		'1-2':function(f,el,x,y,p)
		{
			f.style.left = x + el[ rl ]() - p[ rl ]() - f[ ow ] + 'px';
			f.style.top = y + el[ rt ]() - p[ rt ]()  + 'px';
		},
		'1-3':function(f,el,x,y,p)
		{
			f.style.left = x + el[ rl ]() - p[ rl ]() - f[ ow ] + 'px';
			f.style.top = y + el[ rt ]() - p[ rt ]() - f[ oh ] + 'px';
		},
		'1-4':function(f,el,x,y,p)
		{
			f.style.left = x + el[ rl ]() - p[ rl ]() + 'px';
			f.style.top = y + el[ rt ]() - p[ rt ]()  - f[ oh ] + 'px';
		},
		'2-1':function(f,el,x,y,p)
		{
			f.style.left = x + el[ rl ]() - p[ rl ]() + el[ ow ] + 'px';
			f.style.top = y + el[ rt ]() - p[ rt ]()  + 'px';
		},
		'2-2':function(f,el,x,y,p)
		{
			f.style.left = x + el[ rl ]() - p[ rl ]() + el[ ow ] - f[ ow ] + 'px';
			f.style.top = y + el[ rt ]() - p[ rt ]() + 'px';
		},
		'2-3':function(f,el,x,y,p)
		{
			f.style.left = x + el[ rl ]() - p[ rl ]() + el[ ow ] - f[ ow ] + 'px';
			f.style.top = y + el[ rt ]() - p[ rt ]()  - f[ oh ] + 'px';
		},
		'2-4':function(f,el,x,y,p)
		{
			f.style.left = x + el[ rl ]() - p[ rl ]() + el[ ow ] + 'px';
			f.style.top = y + el[ rt ]() - p[ rt ]()  - f[ oh ] + 'px';
		},
		'3-1':function(f,el,x,y,p)
		{
			f.style.left = x + el[ rl ]() - p[ rl ]() + el[ ow ] + 'px';
			f.style.top = y + el[ rt ]() - p[ rt ]() + el[ oh ] + 'px';
		},
		'3-2':function(f,el,x,y,p){
			f.style.left = x + el[ rl ]() - p[ rl ]() + el[ ow ] - f[ ow ] + 'px';
			f.style.top = y + el[ rt ]() + el[ oh ] + 'px';
		},
		'3-3':function(f,el,x,y,p)
		{
			f.style.left = x + el[ rl ]() - p[ rl ]() + el[ ow ] - f[ ow ] + 'px';
			f.style.top = y + el[ rt ]() - p[ rt ]() + el[ oh ] - f[ oh ] + 'px';
		},
		'3-4':function(f,el,x,y,p)
		{
			f.style.left = x + el[ rl ]() - p[ rl ]() + el[ ow ] + 'px';
			f.style.top = y + el[ rt ]() - p[ rt ]() + el[ oh ] - f[ oh ] + 'px';
		},
		'4-1':function(f,el,x,y,p)
		{
			f.style.left = x + el[ rl ]() - p[ rl ]() + 'px';
			f.style.top = y + el[ rt ]() - p[ rt ]() + el[ oh ] + 'px';
		},
		'4-2':function(f,el,x,y,p)
		{
			f.style.left = x + el[ rl ]() - p[ rl ]() - f[ ow ] + 'px';
			f.style.top = y + el[ rt ]() - p[ rt ]() + el[ oh ] + 'px';
		},
		'4-3':function(f,el,x,y,p)
		{
			f.style.left = x + el[ rl ]() - p[ rl ]() - f[ ow ] + 'px';
			f.style.top = y + el[ rt ]() - p[ rt ]() + el[ oh ] - f[ oh ] + 'px';
		},
		'4-4':function(f,el,x,y,p)
		{
			f.style.left = x + el[ rl ]() - p[ rl ]() + 'px';
			f.style.top = y + el[ rt ]() - p[ rt ]() + el[ oh ] - f[ oh ] + 'px';
		}
	};	
})();

/**
 * create fix position element
 * @namespace XN.ui
 * @class fixPositionElement
 * @constructor
 * @param {Object} params
 * @extends XN.ui.container
 */

XN.ui.fixPositionElement = function( params )
{
	var This = this;
	
	this.config = {
		tagName : 'div',
        useIframeInIE6 : true
	};
	
	$extend( this.config , params );
	
	var f,x,y;

	if ( this.getConfig( 'id' ) )
	{
		this.frame = f = $( this.getConfig( 'id' ) );
        x = f.realLeft();
		y = f.realTop();
	}
	else if ( this.getConfig( 'tagName' ) )
	{
		this.frame = this.container = f = $element( this.getConfig( 'tagName' ) );
	}
	else return;

    this.container = $element( 'div' );
    this.frame.appendChild( this.container );
	
    XN.array.each( [ 'alignWith' , 'alignType' , 'offsetX' , 'offsetY' , 'alignParent' ] , function( i , v )
	{
        This[ v ] = This.getConfig( v ) || This[ v ];
	} );
    

    XN.element.setStyle( f , 'position:absolute;z-index:10001;left:-9999px;top:-9999px' );
	

    if( !$( this.alignParent ) ) this.alignParent = $( document.body );
	
    $( this.alignParent ).appendChild( this.frame );
	
    if ( ( XN.browser.IE6 && this.getConfig( 'useIframeInIE6' ) ) || this.getConfig( 'addIframe' ) )
	{
		var iframe;
		this._iframe = iframe = $element( 'iframe' );
		iframe.frameBorder = 0;
		iframe.scrolling = 'no';
		iframe.setStyle( 'position:absolute;border:0px;left:0px;top:0px;z-index:-1;' );
        if ( XN.browser.Gecko ) iframe.setAttribute( 'style' , 'position:absolute;border:0px;left:0px;top:0px;z-index:-1;' );
        //fix 防止对话框高度改动时露出空白的iframe
        if ( XN.browser.IE ) iframe.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)';
        this.frame.appendChild( iframe );	
    }
	
    if ( XN.element.visible( f ) ) this.show();
    
    f.style.display = 'block';
};

XN.ui.fixPositionElement.prototype = $extend( {} , XN.ui.container );

$extend( XN.ui.fixPositionElement.prototype ,
{
	
	/**
	 * the element align with
	 * @property alignWith
	 * @type {HTMLElement | String}
	 */
	
	alignWith : null,
	
	/**
	 * @property alignType
	 * @type {String}
	 */
	
	alignType : '4-1',
	
	/**
	 * @property offsetX
	 * @type {Int}
	 * @default 0
	 */
	
	offsetX : 0,
	
	/**
	 * @property offsetY 
	 * @type {Int}
	 * @default 0
	 */
	
	offsetY : 0,
	
	/**
	 * @property alignParent
	 * @type {HTMLElement | String}
	 * @default 'dropmenuHolder'
	 */
	
	alignParent : 'dropmenuHolder',
	
	left : null,
	top : null,

	_isShow : false,

	getConfig : function( key )
	{
		return this.config[ key ];
	},
	
	/**
	 * set offset x
	 * @method setOffsetX
	 * @param {Int} x
	 * @return {Object} this
	 */
	
	setOffsetX : function( x )
	{
		this.offsetX = x;
		this.refresh();
		return this;
	},
	
	/**
	 * set offset y
	 * @method setOffestY
	 * @param {Int} y
	 * @return {Object} this
	 */
	
	setOffsetY : function( y )
	{
		this.offsetY = y;
		this.refresh();
		return this;
	},
	
	/**
	 * @method setAlignType
	 * @param {String} t
	 * @return {Object} this
	 */
	
	setAlignType : function( t )
	{
		this.alignType = t;
		this.refresh();
		return this;
	},
	
	/**
	 * @method setAlignParent
	 * @param {HTMLElement | String} p
	 * @return {Object} this
	 */
	
	setAlignParent : function( p )
	{
		this.alignParent = p;
		$( this.alignParent ).appendChild( this.frame );
		this.refresh();
		return this;
	},
	
	/**
	 * @method refresh
	 * @return {Object} this
	 */
	
	refresh : function()
	{
		if ( this.visible() )
		{
			this.show();
		}
		else
		{
			this.hide();
		}
		return this;
	},
	
	/**
	 * @method visible
	 * @return {Boolean}
	 */
	
	visible : function()
	{
		return this._isShow;
	},
	
	/**
	 * @method show
	 * @return {Object} this
	 */
	
	show : function()
	{
		this._isShow = true;
        
        this.frame.show();
		
        if ( this.alignWith )
		{
			this._moveToElement( this.alignWith );
		}
		else
		{
			var x = this.left === null ? parseInt( ( ( $( this.alignParent ).offsetWidth -  this.frame.offsetWidth ) / 2 ) , 10 ) : this.left;
			var y = this.top === null ? XN.event.scrollTop() + 200 : this.top;
			this._moveToPosition( x , y );
		}
        
		if( this._iframe )
		{
            //fix bug for ie6
            try
            {
			    this._iframe.style.height = this.frame.offsetHeight - 2 + 'px';
			    this._iframe.style.width = this.frame.offsetWidth + 'px';
            }catch( e ){}
		}

		return this;
	},
	
	/**
	 * @method hide
	 * @return {Object} this
	 */
	
	hide : function()
	{
        this._isShow = false;
		var f = this.frame;
		//this.left = f.offsetLeft;
		//this.top = f.offsetTop;
		f.style.left = '-9999px';
		f.style.top = '-9999px';
		return this;
	},
	
	/**
	 * @method moveTo
	 * @param {HTMLElement | String | Int} x
	 * @param {Int} y
	 * @return {Object} this
	 */
	
	moveTo : function( x , y )
	{
		if ( !x && !y ) return;
		if ( isNumber( x ) )
		{
			this.left = x;
            this.alignWith = null;
		}
		else if ( isString( x ) || isElement( x ) )
		{
			this.alignWith = $( x );
		}
		
		if ( isNumber( y ) )
		{
			this.top = y;
            this.alignWith = null;
		}
		
		this.refresh();
		
		return this;
	},
	
	/**
	 * @method setX
	 * @param {Int} x
	 * @return {Object} this
	 */
	
	setX : function( x )
	{
		this.moveTo( x );
		return this;
	},
	
	/**
	 * @method setY
	 * @param {Int} y
	 * @return {Object} this
	 */
	
	setY : function( y )
	{
		this.moveTo( null , y );
		return this;
	},

	/**
	 * @method setIndex
	 * @param {Int} i
	 * @return {Object} this
	 */
		
	setIndex : function( i )
	{
		this.frame.style.zIndex = i;
		return this;
	},
	
	_moveToElement : function( el )
	{
		XN.ui.fixPositionMethods[ this.alignType ](
			this.frame , $( el ) , this.offsetX , this.offsetY , $( this.alignParent )
		);
	},
	
	_moveToPosition : function( x , y )
	{
		if ( x )
		{
			this.frame.style.left = x + 'px';
		}
		if ( y )
		{
			this.frame.style.top = y + 'px';
		}
	}
} );
(function()
{
	var fixProto = XN.ui.fixPositionElement.prototype;
	var Event = XN.event;
	/**
	 * 创建一个dialog
     * <pre>
     * 参数形式如下
     * {
     *  HTML:''//自定义对话框的html代码
     * }
     *
     * 自定义代码中必须包含下面三个id的元素
     *  ui_dialog_header
     *  ui_dialog_body
     *  ui_dialog_footer
     * </pre>
	 * @namespace XN.ui
	 * @class dialog
	 * @constructor
	 * @param {Object} params
	 * @extends XN.ui.fixPositionElement
	 */
	
	XN.ui.dialog = function( params )
	{
		var This = this;
		XN.ui.fixPositionElement.call( this , params );
	    
        this.container = $element( 'div' );
        this.frame.appendChild( this.container );

        if ( this.getConfig( 'HTML' ) )
            this.setContent( this.getConfig( 'HTML' ) );
        else
		    this.setContent( this.buildHTML() );

	    this.dialogContainer = $('ui_dialog_container');
		this.header = this.title = $( 'ui_dialog_header' );
		this.body = this.msg = this.message = $( 'ui_dialog_body' );
		this.footer = $( 'ui_dialog_footer' );
	    this.closeButton = $( 'ui_dialog_close' );

        this.header.addChild = 
        this.body.addChild = 
        this.footer.addChild = function( s )
        {
            XN.element.addChild( this , s );
            setTimeout( function(){This.refresh();},0 );
        };
        
        this.dialogContainer.removeAttribute('id');
		this.header.removeAttribute( 'id' );
		this.body.removeAttribute( 'id' );
		this.footer.removeAttribute( 'id' );
	    this.closeButton.removeAttribute( 'id' );	
        
        if ( this.getConfig( 'showCloseButton' ) ){
            this.closeButton.show();
            XN.event.addEvent( this.closeButton, 'click', function(){
                This.hide();
				This.fireEvent('close');
            });
        }

		//lower than menu
		this.frame.style.zIndex = 10000;
		
		this.setWidth( this.getConfig( 'width' ) || 400 );
		
		if ( this.getConfig( 'height' ) ) 
			this.setHeight( this.getConfig( 'height' ) );
		
		XN.array.each( [ 'title', 'msg', 'message', 'header', 'body', 'footer' ] , function( i, v ){
			if ( This.getConfig( v ) ) 
				This[ v ].setContent( This.getConfig( v ) );
		});
		
		if ( this.getConfig( 'type' ) ) this.setType( this.getConfig( 'type' ) );
		
		this._buttons = [];
		
		XN.event.addEvent(this.footer , 'click' , function( e ){
			This._parseButtonEvent(e || window.event);
		});

        XN.util.hotKey.add( '27' , this._hotKeyEvent , this );

        if ( this.getConfig( 'modal' ) === true )
			XN.dom.disable();
		
		if(this.getConfig('noHeader'))
			this.header.hide();
			
		if(this.getConfig('noFooter'))
			this.footer.hide();
			
		if(this.getConfig('noPadding'))
			this.body.addClass('no_padding');
	};
	XN.ui.dialog.prototype = $extend( {} , fixProto );
	$extend( XN.ui.dialog.prototype , 
	{
		header : null,
		body : null,
		footer : null,
		_iframe : null,
		_buttons : null,
	    
        buildHTML : function()
        {
            return [
                '<table id="ui_dialog_container" style="width: 100%; height: 100%;" class="pop_dialog_table">',
                    '<tbody>',
                        '<tr>',
                            '<td class="pop_topleft"></td>',
                            '<td class="pop_border"></td>',
                            '<td class="pop_topright"></td>',
                        '</tr>',
                        '<tr>',
                            '<td class="pop_border"></td>',
                            '<td class="pop_content">',
                                '<h2><span id="ui_dialog_header"></span><a style="display:none;" class="close-button" id="ui_dialog_close" href="#nogo" onclick="return false;">关闭</a></h2>',
                                '<div class="dialog_content">',
                                    '<div id="ui_dialog_body" class="dialog_body"></div>',
                                    '<div id="ui_dialog_footer" class="dialog_buttons"></div>',
                                '</div>',
                            '</td>',
                            '<td class="pop_border"></td>',
                        '</tr>',
                        '<tr>',
                            '<td class="pop_bottomleft"></td>',
                            '<td class="pop_border"></td>',
                            '<td class="pop_bottomright"></td>',
                        '</tr>',
                        '</tbody>',
                    '</table>'
            ].join( '' );
        },

		/**
		 * 通过一个按钮的标题获取按钮的实例
		 * @method getButton
		 * @param {String} text
		 * @return {XN.ui.button}
		 */
		
		getButton : function( text )
		{
			var buttons = this._buttons;

			for ( var i = buttons.length - 1 ; i >= 0 ; i -- )
			{
				if ( buttons[ i ].text == text ) return buttons[ i ];
			}
			
			return null;
		},

		/**
		 * 向对话框底部添加按钮
         * <pre>
         *  参数形式如下: 
         *  {
         *      text : '',//按钮的文字
         *      onclick : callback//按钮onclick时触发的函数
         *  } 
         * </pre>
		 * @method addButton
		 * @param {Object} b
		 * @return {Object} this
		 */
		
		addButton : function( b )
		{
			var o = {
				text : b.text,
				_onclickForDialog : b.onclick				
			};
			if ( b.className ) o.className = b.className;
			var button = new XN.ui.button( o );

            /*
             * patch for panel
             */
            
            button.frame.setAttribute( 'dialog' , '1' );

            /*
             * patch end
             */

			this._buttons.push( button );

			this.footer.addChild( button );
			return this;
		},

		/**
		 * 从从对话框删除按钮，参数为按钮的文字
		 * @method delButton
		 * @param {String} b title of the button
		 * @return {Object} this
		 */
		
		delButton : function( b )
		{
			if ( isString( b ) ) b = this.getButton( b );

			this.footer.delChild( b );
			return this;
		},
        
        
        _preventHide : false,

        /**
         * 阻止对话框关闭，用于按钮的回调函数
         * <pre>
         * callBack=function()
         * {
         *  this.preventHide();
         *  .....
         * }
         * </pre>
         * @method preventHide
         * @return {Object} this
         */

        preventHide : function()
        {
            this._preventHide = true;
            return this;
        },
		
		setAutoHide:function(boo){
			this._preventHide = !boo;
            return this;
		},

		_parseButtonEvent : function( e )
		{
			var el = Event.element( e );
			if ( el.tagName.toLowerCase() !== 'input' || el.type !== 'button' ) return;
            if ( !el.getAttribute( 'dialog' ) ) return;
			
            var button = this.getButton( el.value );
			
            if ( button && button._onclickForDialog )
            {
                button._onclickForDialog.call( this );
            }
            
            if ( this._preventHide )
            {
                this._preventHide = true;
            }
            else
            {
			    this.hide();
                //XN.dom.enable();
            }
		},

        _hotKeyEvent : function()
        {
            this.hide();
        },
		
		/**
		 * 设置对话框的样式'normal' or 'error' type
		 * @method setType
		 * @param {String} t
		 * @return {Object} this
		 */
		
		setType : function( t )
		{
			if ( t == 'normal' )
			{
				this.frame.delClass( 'errorDialog' );
			}
			else if ( t == 'error' )
			{
				this.frame.addClass( 'errorDialog' );
			}
			return this;
		},
		
		/**
         * 设置对话框宽度
		 * @method setWidth
		 * @param {Int} w
		 * @return {Object} this
		 */
		
		setWidth : function( w )
		{
			if ( !w ) return this;

			if ( w == 'auto' )
            {
                this.frame.style.width = 'auto';
                this.dialogContainer.style.height = '';
                this.dialogContainer.style.width = '';
                this.width = this.frame.offsetWidth;
            }
            else
            {
                this.width = w;
			    this.frame.style.width = w + 'px';
                this.dialogContainer.style.height = '100%';
                this.dialogContainer.style.width = '100%';
            }

			this.refresh();
			return this;
		},
		
		/**
         * 设置对话框高度，一般是自动伸展
		 * @method setHeight
		 * @param {Int} h
		 * @return {Object} this
		 */
		
		setHeight : function( h )
		{
			if ( !h )return this;
			this.hegith =  h;
			this.frame.style.height = h + 'px';
			this.refresh();
			return this;
		},
        
        /**
         * resize
         * @method resizeTo
         * @param {Int} w
         * @param {Int} h
         * @return {Object} this
         */

        resizeTo : function( w , h )
        {
            this.setWidth( w );
            this.setHeight( h );
            return this;
        },
		
		/**
         * 清空对话框的内容
		 * @method clear
		 * @return {Object} this
		 */
		
		clear : function()
		{
			this.header.setContent( '' );
			this.body.setContent( '' );
			this.footer.setContent( '' );
			this._buttons = [];
			return this;
		},
				
		/**
         * 设置对话框的标题
		 * @method setTitle
		 * @param {String} s
		 * @return {Object} this
		 */
		
		setTitle : function( s )
		{
			this.header.setContent( s );
			return this;
		},
		
		/**
         * 设置对话框的内容
		 * @method setBody
		 * @param {String} s
		 * @return {Object} this;
		 */
		
		setBody : function( s )
		{
			this.body.setContent( s );
			return this;
		},


        remove : function(keepModal)
        {
            XN.util.hotKey.del( '27' , this._hotKeyEvent );
            XN.ui.element.remove.call( this );
			if(!keepModal)
				XN.dom.enable();
            return this;
        },
        
        refresh : function()
        {
		    if ( this.visible() )
                fixProto.show.apply( this , arguments ); 
		    else
			    this.hide();
		    return this;
        },

        show : function()
        {
            this._clearHideTimer();
			if(this.getConfig('modal') === true)
				XN.dom.disable();
            fixProto.show.apply( this , arguments );			
            this.fireEvent('show');
            return this;
        },

        hide : function()
        {
            this._clearHideTimer();
            fixProto.hide.apply( this , arguments );
            XN.DOM.enable();
            this.fireEvent('hide');
            return this;
        },

        _hideTimer : null,
        _clearHideTimer : function()
        {
            if ( this._hideTimer )
            {
                clearTimeout( this._hideTimer );
                this._hideTimer = null;
            }
        },
        
        /**
         * 自动关闭对话框
         * @method autoHide
         * @param {Int} t
         * @return {Object} this
         */

        autoHide : function( t )
        {
            var This = this;
            this._hideTimer = setTimeout(function()
            {
                This.hide();
            }, t * 1000 );
            return this;
        }
	} );

    XN.event.enableCustomEvent(XN.ui.dialog.prototype);
})();

/*
 *  patch for old version
 */
XN.ui.panel = XN.ui.dialog;
XN.ui.dialog.prototype.setHeader = function( h )
{
	if( h && h !== '')
	{
		this.header.addChild( h );
	}
	else
	{
		this.header.innerHTML = '';
	}	
};
XN.ui.dialog.prototype.setFooter = function( f )
{
	if ( f && f !== '' )
	{
		this.footer.addChild( f );
	}
	else
	{
		this.footer.innerHTML = '';
	}
};
/*
 * patch end
 */

/**
 * 菜单
 * <pre>
 *  参数形式如下
 *  {
 *      button : 'el',//触发元素的id
 *      hoverClass : 'classname',//菜单显示时button的样式
 *      event : 'mouseover',//事件类型，还可以是click,manual
 *      alignType : '4-1',//菜单对齐方式
 *      delay :　0.2,//延迟时间，用于mouseover
 *      useIframeInIE6 : true,//在ie6是否添加iframe
 *      addIframe : false,//是否强制添加iframe
 *  }
 * </pre>
 *
 * @namespace XN.ui
 * @class menu
 * @constructor
 * @param {Object} params
 */

XN.ui.menu = function( params )
{
	var This = this;

	this.config = {
		alignType : '4-1',
		barOnshowClass : '',
		tagName : 'div',
		disalbeButtonClickEvent : true,
		fireOn : 'click',
		keep : 0.2,
        useIframeInIE6 : true,
        effectTime : 50 
	};

	$extend( this.config , params );
	
	var frame;
	
	if ( this.getConfig( 'text' ) )
	{
		this.frame = frame = $element( this.getConfig( 'tagName' ) );
		frame.setContent( this.getConfig( 'text' ) );
	}
	else if ( this.getConfig( 'button' ) )
	{
		this.frame = frame = $( this.getConfig( 'button' ) );
	}
	else return false;
	
	this._alignType = this.getConfig( 'alignType' );
	
	if ( this.getConfig( 'menu' ) )
	{
        $( this.getConfig( 'menu' ) ).hide();

		this.menu = new XN.ui.fixPositionElement(
		{
			id : this.getConfig( 'menu' ),
			alignType : this._alignType,
			alignWith : this.getConfig( 'alignWith' ) || this.frame,
			addIframe : this.getConfig( 'addIframe' ),
            useIframeInIE6 : this.getConfig( 'useIframeInIE6' )
		}); 
		this.container = this.menu.frame;
		this._canAddSubMenu = false;
	}
	else
	{
        var dt = $element( 'div' );
        dt.hide();
		this.menu = new XN.ui.fixPositionElement(
		{
			//tagName : 'div',
            id : dt,
            alignType : this._alignType,
			alignWith : this.getConfig( 'alignWith' ) || this.frame,
			addIframe : this.getConfig( 'addIframe' ),
            useIframeInIE6 : this.getConfig( 'useIframeInIE6' )
		});
		this.container = $element( 'div' );
		this._menu.setContent( this.container );
	}
    
	
	this.menu.setIndex( 10001 );
	

	XN.event.addEvent( this.menu.frame , 'click' , function( e )
	{
		e = e || window.event;
        This._frameOnClick( e );
	} , false );
	this.menu.setOffsetX( this.getConfig( 'offsetX' ) || 0 );
	this.menu.setOffsetY( this.getConfig( 'offsetY' ) || 0 );
	var eventType = this.getConfig( 'event' );
	if ( eventType == 'click' )
	{
		XN.event.addEvent( this.frame , 'click' , function( e )
		{
			This._buttonClick( e || window.event );
		} );
		XN.event.addEvent( document , 'click' , function( e )
		{
			This._documentClick( e || window.event );
		} );
	}
	else if ( eventType == 'mouseover' )
	{
		XN.event.addEvent( this.frame , 'mouseover' , function( e )
		{
			This._frameMouseOver( e || window.event );
		} );
		
		if ( this.getConfig( 'disalbeButtonClickEvent' ) )
		{
			XN.event.addEvent( this.frame , 'onclick' , function( e )
			{
				XN.event.stop( e || window.event );
			} );
		}
		
		XN.event.addEvent( this.frame , 'mouseleave' , function()
		{
            This._buttonMouseLeave();
		});
		
		XN.event.addEvent( this.menu.frame , 'mouseleave' , function()
		{
            This._menuMouseLeave();
		});
		
		XN.event.addEvent( this.menu.frame , 'mouseover' , function()
		{
			This._mouseOverMenu = true;
		});
	}
	else if ( eventType == 'manual' )
	{
	}

    XN.event.addEvent( window , 'resize' , function()
    {
        This.menu.refresh();
    });

	this.hide();
};

XN.ui.menu.prototype = $extend( {} , XN.ui.container );

$extend( XN.ui.menu.prototype ,
{
	isShow : true,
	menu : null,
	_alignType : null,
	_button : null,
	_canAddSubMenu : true,
	_delayTimer : null,
	_mouseOverMenu : false,
	_mouseOverButton : false,
	_clearTimer : function()
	{
		if ( this._delayTimer )
		{
			clearTimeout( this._delayTimer );
			this._delayTimer = null;
		}
	},
	_buttonClick : function( e )
	{
		XN.event.stop( e );
		if ( this.isShow ) 
			this.hide();
		else
			this.show();
	},
	_documentClick : function( e )
	{
		this.hide();
	},
    
    _frameOnClick : function( e )
    {
        var This = this;
		var el = XN.event.element( e );
		var tag = el.tagName.toLowerCase();

        if ( tag == 'a' ) return true;
		if ( ( tag == 'input' && ( el.type == 'radio' || el.type == 'checkbox' ) ) || tag == 'label' )
        {
            this.isShow = false;
            setTimeout( function()
            {
                This.isShow = true;
            } , 20 );
            return true;
        }
        
        while ( el != this.menu.frame && el.tagName && el.tagName.toLowerCase() != 'a' )
        {
            el = el.parentNode;
        } 
        
        if ( el.tagName.toLowerCase() == 'a' ) return true;
        
        XN.event.stop( e );
    },

	_frameMouseOver : function( e )
	{
		var This = this;
		this._mouseOverButton = true;
		
		this._clearTimer();
		
		var delay = this.getConfig( 'delay' );
		if ( delay )
		{
			this._delayTimer = setTimeout( function()
			{
				if ( This._mouseOverButton ) This.show();
			} , delay * 1000 );
		}
		else
		{
			This.show();
		}
		XN.event.stop( e );
	},
	_buttonMouseLeave : function()
	{
		var This = this;
		this._mouseOverButton = false;
		this._clearTimer();
		setTimeout( function()
		{
			if ( !This._mouseOverMenu ) This.hide();
		} , this.getConfig( 'effectTime' ) );
	},
	_menuMouseLeave : function()
	{
        var This = this;
		this._mouseOverMenu = false;
		this._clearTimer();
		setTimeout( function()
		{
			if ( !This._mouseOverButton ) This.hide();
		} , this.getConfig( 'effectTime' ) );
	},
	getConfig : function( key )
	{
		var patch = 
		{
			'hoverClass' : 'barOnshowClass',
			'event' : 'fireOn',
			'button' : 'bar',
			'delay' : 'keep'
		};
		if ( patch[ key ] ) return this.config[ key ]  || this.config[ patch[ key ] ];

		return this.config[ key ];
	},

    /**
     * 显示菜单
     * @method show
     * @return {XN.ui.menu} this
     */

	show : function()
	{
		if ( this.isShow ) return this;
		this.menu.show();
		this.frame.addClass( this.getConfig( 'hoverClass' ) );
		this.onShow();
		this.isShow = true;
		return this;
	},
	
    /**
     * 设置菜单宽度
     * @method setWidth
     * @param {Int} width
     * @return {XN.ui.menu} this
     */

    setWidth : function( w )
	{
		this.menu.frame.style.width = w + 'px';
		this.menu.refresh();
        return this;
	},
	    
    /**
     * 隐藏菜单
     * @method hide
     * @return {XN.ui.menu} this
     */

    hide : function()
	{
		if ( !this.isShow ) return this;
		this.menu.hide();
		this.frame.delClass( this.getConfig( 'hoverClass' ) );
		this.isShow = false;
        this.onHide();
		return this;
	},
    
    /**
     * 刷新菜单
     * @method refresh
     * @return {XN.ui.menu} this
     */

    refresh : function()
    {
        if ( this.isShow )
        {
            this.menu.show();
        }
        return this;
    },

 	onShow : XN.func.empty,
	onHide : XN.func.empty
} );

XN.event.enableCustomEvent( XN.ui.menu.prototype );
/**
 * 自动完成
 * <pre>
 * 参数如下: 
 *  {
 *      input:id,//要使用自动完成的input元素
 *      searchDelay:num,//输入与搜索之间的延迟
 *      DS:obj,//搜索用的数据源,参见XN.util
 *      enableCache:true,//是否使用缓存
 *      maxCache:10//最大缓存长度
 *  }
 * </pre>
 *
 * @namespace XN.ui
 * @class autoComplete
 * @constructor
 * @param {Object} p
 * @extends XN.ui.element
 */

XN.ui.autoComplete = function( p )
{
	var This = this;
	
	this.config = this.config || {};
	
	$extend( this.config ,
	{
		inputTip : null,
		searchDelay : 0.2,
		DS : null,
		enableCache : true,
		maxCache : 10
	});
	
	$extend( this.config , p );
	
	if ( this.getConfig( 'enableCache' ) )
	{
		this.cache = new XN.util.cache({
			cacheLength : this.getConfig( 'maxCache' )
		});
	}
	
	if ( this.getConfig( 'input' ) )
	{
		var input = this.input = $( this.getConfig( 'input' ) );
	}
	else
	{
		var input = this.input = $element( 'input' );
        input.type = 'text';
        input.addClass( 'input-text' );
	}

	
	this.frame = input;
	
	XN.event.addEvent( input , 'focus' , function( e )
	{
		This._startCheck();
		This.fireEvent( 'focus' );
	});
	
	XN.event.addEvent( input , 'blur' , function( e )
	{
		This._endCheck();
		This.fireEvent( 'blur' );	
	});

    this.addEvent( 'focus' , function()
    {
        var v = this.input.value;
        if ( v == '' || v == this.getConfig( 'inputTip' ) )
        {
            this.fireEvent( 'noinput' );
        }
    });

    this.addEvent( 'blur' , function()
    {
        this._lastInput = null;
    });

    XN.event.addEvent( input , 'click' , function( e )
    {
        XN.event.stop( e || window.event );
    });
	
	XN.event.addEvent( input , 'keydown' , function( e )
	{
		This._userInput = true;
		e = e || window.event;
		if ( e.keyCode == 13 ) XN.event.stop( e );
		This.fireEvent( 'keydown' , e );
	});
	
	input.setAttribute( 'AutoComplete' , 'off' );

    this.DS = this.getConfig( 'DS' );
};

XN.ui.autoComplete.prototype = $extend( {} , XN.ui.element );

$extend( XN.ui.autoComplete.prototype,
{
	input : null,
	cache : null,
	_userInput : false,
	_lastInput : null,
	
	getConfig : function( key )
	{
		if ( key == 'input' ) return this.config[ 'input' ] || this.config[ 'id' ];
		return this.config[ key ];
	},
	
	_startCheck : function()
	{
		var This = this;
		this._inputTimer = setInterval(function()
		{
			if( This._userInput )
			{
			 	This._userInput = false;
				return;
			}
			This._checkInput();
		},this.getConfig( 'searchDelay' ) * 1000);
	},
	
	_endCheck : function()
	{
		clearInterval( this._inputTimer );
		this._inputTimer = null;		
	},
	
   
	_checkInput : function()
	{
		var This = this;
		var cv = this.input.value;
		
		if( XN.string.isBlank( cv ) )
		{
			if ( this._lastInput === '' )
			{
				return;
			}

			this._lastInput = '';
            this.fireEvent( 'noinput' );

			return;
		}
		
		if( cv == this._lastInput )
        { 
            return;
        }

		this._lastInput = cv;
		
		this.fireEvent( 'searchbegin' );
		
		if( this.cache )
		{
			var result = this.cache.get( cv );
			if( result )
			{
				this.fireEvent( 'searchover' , result );
				return;
			}
		}
		
		if ( !this.DS )
		{
            XN.log( 'no ds' );
			this.fireEvent( 'NO_DS' );
			return;
		}
		
		this.DS.query( cv , function( r )
		{
			if( This.cache ) This.cache.add( cv , r );
			This.fireEvent( 'searchover' , r );
		});		
	}
});

XN.event.enableCustomEvent( XN.ui.autoComplete.prototype );

(function()
{

var completeMenus = {};

getCompleteMenu = function( id )
{
    return  completeMenus[ id ];
};

/**
 * 自动完成菜单
 * @namespace XN.ui
 * @class autoCompleteMenu
 * @constructor
 * @param {Object} p
 * @extends XN.ui.autoComplete
 */

XN.ui.autoCompleteMenu  = function( p )
{
	var This = this;
    
    this._MID = XN.util.createObjID();
    
    completeMenus[ this._MID ] = this;

	this.config = this.config || {};
	
	$extend( this.config ,
	{
		ulClassName : '',
		liClassName : '',
		liHoverClass : 'm-autosug-hover',
		aClassName : '',
		noResult : '没有匹配结果',
		dataLoading : '正在加载数据...',
		noInput : null,
		autoSelectFirst : false
	} );
	
	XN.ui.autoComplete.call( this , p );
	
	var input = this.input;

	var m = $element('div');
    m.innerHTML = this.getConfig( 'wrapper' ) || this._wrapper();
	
    this._menuList = m.firstChild;

	this._ul = this._menuList.getElementsByTagName( 'ul' )[0];
	
	this.menu = new XN.ui.menu(
	{
		button : input,
		menu : this._menuList,
		fireOn : 'manual'
	});

	this.addEvent( 'keydown' , this._inputOnkeydown );
	
	XN.event.addEvent( this._ul , 'mousedown' , function( e )
	{
		This._menuOnclick( e || window.event );
	});
	
    /*
	XN.event.addEvent( this._ul , 'mousemove' , function( e )
	{
		return This._menuOnmouseover( e || window.event );
	});
    */
	/*XN.event.addEvent( document , 'click' , function(){
		This.menu.hide();
	} , false );*/
    XN.event.addEvent( input, 'blur', function()
    {
        This.menu.hide();
    });

	this.menu.hide();
	
	/*
	 * 没有输入时关闭菜单
	 */
	this.addEvent( 'noinput' , function()
	{
		var tip = this.getConfig( 'noInput' );
		if( !tip )
		{
			this.menu.hide();
			return;
		}
		this._ul.innerHTML = '<li>' + tip + '</li>';
		this.menu.show();
	});
	
	this.addEvent( 'NO_DS' , function(){
          this._noDataShow();
	});
			
	this.addEvent( 'searchover' ,function( result ){
          this._buildMenu( result );
    });
};

XN.ui.autoCompleteMenu.prototype = $extend( {} , XN.ui.autoComplete.prototype );

$extend( XN.ui.autoCompleteMenu.prototype ,
{
	menu : null,
	_menuList : null,
	_ul : null,
	_currentLi : null,
    _highlightMenuItem : function( li )
	{
		if ( li == this._currentLi ) return;
		var hoverClass = this.getConfig( 'liHoverClass' );
		if ( this._currentLi !== null )
        {
            XN.element.delClass( this._currentLi , hoverClass );
        }
		XN.element.addClass( li , hoverClass );
		this._currentLi = li;
		var aid = this._currentLi.getAttribute( 'aid' );

		if( aid )
        {
            this.fireEvent( 'highlight' , this.result[ parseInt( aid ) ] );
	    }
    },

	/*
	 *  键盘事件处理函数
	 */

	_inputOnkeydown : function( event )
	{
		var li;

		/*
		 *   回车选择一个菜单项
		 */

		if ( event.keyCode == 13 )
		{
			if( this.menu.isShow && this._currentLi )
			{
				var aid = this._currentLi.getAttribute( 'aid' );
				if( aid ) this._selectMenuItem( parseInt( aid ) );
			}
			return false;
		}

		/*
		 *  向上高亮上一个
		 */

		if ( event.keyCode == 38 )
		{
			if ( this._currentLi && this._currentLi.previousSibling )
			{
				li = 	this._currentLi.previousSibling;
			}
			else
			{
				li = this._ul.lastChild;			
			}
			this._highlightMenuItem( li );
			return false;
		}

		/*
		 *  向下高亮下一个
		 */

		if ( event.keyCode == 40 )
		{
			if ( this._currentLi && this._currentLi.nextSibling )
			{
				li = 	this._currentLi.nextSibling;
			}
			else
			{
				li = this._ul.firstChild;			
			}
			this._highlightMenuItem( li );
			return false;
		}
		
		return true;
	},

	/*
	 *  当在菜单上点击时触发
	 */	
 
	_menuOnclick : function( event )
	{
		var el = XN.event.element( event );
		
		while ( el && el.tagName && el.tagName.toLowerCase() !== 'li' )
		{
			el = el.parentNode;
		}
        
		if ( !el || el.nodeType !== 1 || !el.getAttribute( 'aid' ) ) return false;
        this._selectMenuItem( parseInt( el.getAttribute( 'aid' ) ) );
        return false;
	},

	/*
	 *  当在菜单上移动鼠标时触发
	 */

	_menuOnmouseover : function( event )
	{
		var el = XN.event.element( event );
	    if ( el.parentNode == $( 'dropmenuHolder' ) ) return;
		while ( el && el.tagName &&  el.tagName.toLowerCase() !== 'li' )
		{
			el = el.parentNode;
		}
		
		if ( !el || el.nodeType !== 1 || !el.getAttribute( 'aid' ) ) return false;
		this._highlightMenuItem( el );
		return false;
	},
	
	/*
	 *  选择一个菜单项
	 */

	_selectMenuItem : function( id )
	{
		this.menu.hide();
		this.input.focus();
		this.fireEvent( 'select' , this.result[ id ] );
		this._lastInput = this.input.value;
	},

	/*
	 * 匹配结束,显示匹配结果
	 */

	_buildMenu : function( result )
	{
		var This = this;
		this.result = result;
	    
		if ( result.length > 0 )
		{
			this.fireEvent('hasResult');
		}
		if ( result.length == 0 )
		{
			this.fireEvent('noResult');
			var noResult = this.getConfig( 'noResult' );

			if ( isFunction( noResult ) )
			{
				noResult = noResult.call( this );
			}

			this._ul.innerHTML = '<li>' + noResult + '</li>';
			this.menu.show();
			this._currentLi = null;
			return;
		}

		var lis = [];

        lis.push( this.firstMenuItem() );
	    
        var len = result.length - 1;

        XN.array.each( result , function( i , v )
		{
			lis.push( '<li onmouseover="getCompleteMenu(' + This._MID + ')._highlightMenuItem(this);" aid="' + i + '">' + This.buildMenu( v ) + '</li>' );
		});
		
        lis.push( this.lastMenuItem() );

        this._ul.innerHTML = lis.join('');
		
        if( this.getConfig( 'autoSelectFirst' ) ) this._highlightMenuItem( this._ul.firstChild );
		
        this.menu.show();
	},
    _noDataShow :function(){
		var tip = this.getConfig( 'dataLoading' );
		this._ul.innerHTML = '<li>' + tip + '</li>';
		this.menu.show();			
    },

    firstMenuItem : function()
    {
        return '';
    },
    
    lastMenuItem : function()
    {
        return '';
    },

	buildMenu : function( r )
	{
		return '<li>' + r.name + '</li>';
	},
	setMenuWidth : function( w )
	{
		this.menu.setWidth( w );
	}
} );
//XN.ui._friendsCacheData = null;
    XN.ui.autoCompleteMenu.prototype._wrapper = function()
    {
        return [
        '<div class="m-autosug">',
            '<span class="x1">',
                '<span class="x1a"></span>',
            '</span>',
            '<span class="x2">',
                '<span class="x2a"></span>',
            '</span>',
            '<div class="m-autosug-minwidth">',
                '<div class="m-autosug-content">',
                    '<ul></ul>',
                '</div>',
            '</div>',
        '</div>'
        ].join( '' );
    };
})();

XN.ui.friendSelector = function( params )
{
	var This = this;
	this.config = this.config || {};
	
	$extend( this.config ,
	{
        getFriendsUrl: 'http://browse.' + XN.env.domain + '/getfriendsajax.do?s=1',
        url : 'http://friend.' + XN.env.domain + '/friendsSelector.do',
        param : {}
	});

    $extend( this.config, params.params )
    if( isUndefined( this.getConfig( 'page' ) ) )
            this.config[ 'page' ] = false;

	XN.ui.autoCompleteMenu.call( this , params );
	
	this.addEvent( 'select' , function( r )
	{
		this.input.value = r.name;
		if ( this.onSelectOne ) this.onSelectOne( r );			
	} );
	
	this.buildMenu = function( r )
	{
		return r.name ;
	};
	
	this.addEvent( 'focus' , function()
	{
		if ( this._ready ) return;
		if ( this._isLoading ) return;
        this.loadFriends();
	});
};

XN.ui.friendSelector.prototype = $extend( {} , XN.ui.autoCompleteMenu.prototype );
$extend( XN.ui.friendSelector.prototype,
{
	_isLoading:false,
	_ready:false,
	
    isReady : function()
    {
        return this._ready;
    },

    isLoading : function()
    {
        return this._isLoading;
    },
    
    loadFriends:function( r )
	{
        if ( this.isLoading() ) return;
        this._isLoading = true;
        var This = this;
        var p = {};
        p[ 'init' ] = true;
        p[ 'uid' ] = false;
        p[ 'uhead' ] = false;
        p[ 'uname' ] = false;
        p[ 'group' ] = false;
        p[ 'net' ] = false;
        p[ 'param' ] = this.getConfig( 'param' );
        p[ 'page' ] = this.getConfig( 'page');

        new XN.NET.xmlhttp(
        {
            useCache : true,
            url : this.getConfig( 'url' ),
            method : 'get',
            data : 'p=' + XN.JSON.build( p ),
            onSuccess : function( r )
            {
                r = XN.JSON.parse( r.responseText );
                This._onload( r );
            }
        });
    },
    
    _onload : function( r )
    {
        this.isLoading = false;
        this._ready = true;
        this.config.qkey = r.qkey;
        this.DS = new XN.util.DS_friends(
        {
            url : this.getConfig( 'url' ),
            qkey : this.getConfig( 'qkey' ),
            limit : this.getConfig( 'limit' ),
            page : this.getConfig( 'page' ),
			param : this.getConfig( 'param' )
        });
    }
});

XN.ui.friendSelectorSynchronous = function( a , b )
{
    function s( id , ac , v )
    {
        if ( isObject( id ) ) id = id.id;

        if ( v.isReady() )
        {
            try{
                v[ ac ]( id );
            }catch(e){}
        }
        else
        {
            v.addEvent( 'load' , function()
            {
                try{
                    v[ ac ]( id );
                }catch(e){}
            } );
            v.loadFriends();
        }
    }
    
    a.addEvent( 'select' , function( id )
    {
        s( id , 'select' , b );
    } );
    a.addEvent( 'deselect' , function( id )
    {
        s( id , 'deselect' , b );
    } );
    b.addEvent( 'select' , function( id )
    {
        s( id , 'select' , a );
    } );
    b.addEvent( 'deselect' , function( id )
    {
        s( id , 'deselect' , a );
    });
};


(function(){

    /**
     * 多好友选择器
     * <pre>
     * 参数形式如下
     * {
     *      idInputName:'ids',//生成的id字段input的name属性
     *      nameInputName:'names',//生成的name字段input的name属性
     *      url:'/friendsSelector.do',//初始化的url
     *      initParam:{},//初始化参数
     *      param:{},//查询好友的额外参数
     *      maxNum:0//最大数量限制，超出时会触发'overMaxNum'事件
	 *      loadMethod : 'get' | 'post' //载入好友的请求方式
     * }
     * </pre>
     * @namespace XN.ui
     * @class multiFriendSelector
     * @constructor
     * @param {Object} params
     */

    XN.ui.multiFriendSelector = function(params)
    {
        var This = this;
        //ID_PRE ++;
        this._ID = XN.util.createObjID();

        this.config = this.config || {};
        $extend( this.config ,
        {
            inputName : 'ids',
            nameInputName : 'names',
            url : 'http://friend.' + XN.env.domain + '/friendsSelector.do',
            initParam : {},
            param : {},
            noInput : false,
            maxNum : -1 
        });
        
        $extend( this.config , params );
        
        this.frame = $element('div');
        var div = $element( 'div' );
        div.hide();
        document.body.appendChild( div );
        div.appendChild( this.frame );
        
        this.frame.innerHTML = [
            '<div id="' + this.getID( 'friendsContainer' ) + '" class="tokenizer friendAutoSelector">',
            '<span class="tokenizer_stretcher">^_^</span>',
            '<span class="tab_stop"><input/></span>',
            '<span id="' + this.getID( 'inputContainer' ) + '" class="tokenizer_input"><input id="' + this.getID( 'input' ) + '" type="text" /></span>',
            '</div>',
            '<div class="float-right" id="' + this.getID( 'menu' ) + '"></div>'
        ].join('');
        
        /*
         * patch for old version
         */
        
        this.input = this.getEl( 'input' );
        this.menuContainer = this.getEl( 'menu' );

        //this._friendsContainer = this.frame.firstChild;
        //this._inputContainer = this.frame.getElementsByTagName('span')[2];
        /*
         * patch end
         */


        XN.event.addEvent( this.getEl( 'friendsContainer' )  , 'click' , function( e )
        {
            This._parseClickEvent( e || window.event ); 
        });
        
        this.autoComplete = new XN.ui.friendSelector(
        {
            id : this.input,
            inputTip : '输入好友姓名...',
            autoSelectFirst : true,
            url : this.getConfig( 'url' ),
            param : this.getConfig( 'param' )
        });

        this.autoComplete.loadFriends = function( r )
        {
            if ( this.isLoading() ) return;
            this._isLoading = true;
            var p = {};
            p[ 'init' ] = true;
            p[ 'uid' ] = true;
            p[ 'uhead' ] = false;
            p[ 'uname' ] = true;
            p[ 'group' ] = false;
            p[ 'net' ] = false;

            $extend( p , This.getConfig( 'initParam' ) );
            
            p[ 'param' ] = this.getConfig( 'param' );

            new XN.NET.xmlhttp(
            {
                useCache : true,
                url : this.getConfig( 'url' ),
                method : This.getConfig('loadMethod') || 'get',
                data : 'p=' + XN.JSON.build( p ),
                onSuccess : function( r )
                {
                    r = XN.JSON.parse( r.responseText );
                    This._allFriends = r.candidate;
                    This.fireEvent( 'load' );
                    This.autoComplete._onload( r );
                }
            });
        };
        
        this.autoComplete.buildMenu = function(r)
        {
            return '<p>' + r.name + '</p>';
        };

        this.autoComplete.setMenuWidth(129);
        this.autoComplete.addEvent( 'keydown' ,function( e )
        {
            This._onInputKeydown(e);
        });
        this.autoComplete.addEvent( 'select' , function( r )
        {
            XN.log( this.input );
            this.input.value = '';
            This.selectFriend( r );
        });

        if ( this.getConfig( 'noInput' ) )
        {
            this.input.hide();
        }
        
        this.fireEvent( 'init' );
    };
    var proto = XN.ui.multiFriendSelector.prototype = $extend( {} , XN.ui.element );
    
    $extend( proto ,
    {
        //_friendsContainer : null,
        //_inputContainer : null,
        
        /**
         * 选择器是否就绪
         * @method isReady
         * @return {Boolean}
         */

        isReady : function()
        {
            return this.autoComplete.isReady();
        },

        isLoading : function()
        {
            return this.autoComplete.isLoading();
        },

        /**
         * 加载好友数据
         * @method loadFriends
         */

        loadFriends : function()
        {
            this.autoComplete.loadFriends();
        },

        /**
         * 跟据用户id得到一个用户对象
         * @method getUserByID
         * @param {String} id
         * @return {Object}
         */

        getUserByID : function( id )
        {
            id = String( id );
            var rt = null;
            XN.array.each( this._allFriends , function( i , v )
            {
                if ( String( v.id ) == id )
                {
                    rt = v;
                    return false;
                }
            } );
            return rt;
        },

        getConfig : function( key )
        {
            if ( key == 'inputName' ) return this.config[ 'idInputName' ] || this.config[ 'inputName' ];
            return this.config[ key ];
        },

        getID : function( id )
        {
            return 'mfs_' + this._ID + id;
        },
        
        getFriendID : function( id )
        {
            return this.getID( 'friend_' + id );
        },
    
        getFriendEl : function( id )
        {
            return $( this.getFriendID( id ) );
        },

        getEl : function( id )
        {
            return $( this.getID( id ) );
        },

        getFriendsNum : function()
        {
            return this.getEl( 'friendsContainer' ).getElementsByTagName( 'a' ).length;
        },
        
        /**
         * 获取已选好友的id
         * @method getSelectedFriends
         * @return {Array}
         */

        getSelectedFriends : function()
        {
            var rt = [];
            var a = XN.array.build( this.getEl( 'friendsContainer' ).getElementsByTagName( 'a' ) );
            XN.array.each( a , function( i , v )
            {
                rt.push( v.getAttribute('uid') + '' );
            });
            return rt;
        },
        
        /**
         * 重设选择器
         * @method reset
         */

        reset : function()
        {
            this.deselectAll(); 
        },

        /**
         * 取消全选
         * @method deselectAll
         */

        deselectAll : function()
        {
            var els = XN.array.build( this.getEl( 'friendsContainer' ).getElementsByTagName( 'a' ) );
            XN.array.each( els , function( i , v )
            {
                XN.element.remove( v );
            });
            this.fireEvent( 'deselectAll' , this.getIds() );
        },
        
        /**
         * 选择一组好友
         * @method selectFriends
         * @param {Array} a
         */

        selectFriends : function( fs )
        {
            var This = this;
            XN.array.each( fs , function( i , v )
            {
                This.select( v );
            } );
        },
        
        /**
         * 反选一组好友
         * @method deselectFriends
         * @param {Array} a
         */

        deselectFriends : function( fs )
        {
            var This = this;
            XN.array.each( fs , function( i , v )
            {
                This.deselect( v );
            } );
        },
        
        /**
         * 选择一个好友
         * @method select
         * @param {String} id
         */

        select : function( o )
        {
            if ( isUndefined(o) ) return; 
            XN.log( 'mfs select:');
            XN.log(o);
            var maxNum = this.getConfig( 'maxNum' );
            
            if ( maxNum !== -1 )
            {
                if ( this.getFriendsNum() ==  maxNum )
                {
                    this.fireEvent( 'overMaxNum' , maxNum );
                    return;
                }
            }

            if ( isString( o ) || isNumber( o ) )
            {
                o = {
                    id : o,
                    name : this.getUserByID( o ).name
                };
            }


            
            if ( this.getFriendEl( o.id ) ) return;
            
            this.getEl( 'friendsContainer' ).insertBefore( this.createFriendHTML( o.id , o.name ) , this.getEl( 'inputContainer' ) );
            this.fireEvent( 'select' , o.id );
        },
        
        /**
         * 反选一个好友
         * @method deselect
         * @param {String} id
         */

        deselect : function( uid )
        {
            if ( !this.getFriendEl( uid ) )return;
            this.getFriendEl( uid ).remove();
            this.fireEvent( 'deselect' , uid );
        },

        _parseClickEvent : function( e )
        {
            var el = XN.event.element( e );
            XN.event.stop( e );
            if ( el && el.getAttribute( 'action' ) )
            {
                this.deselectFriend( el.getAttribute( 'uid' ) );
            }
        },

        createFriendHTML : function( uid , uname )
        {
            var a = $element( 'a' );
            a.id = this.getFriendID( uid );
            a.setAttribute('uid', uid);
            a.href = '#nogo';
            a.className = 'token';
            a.tabindex = '-1';
            a.innerHTML = [
                '<span>\n<span>\n<span>\n<span>\n<input type=\"hidden\" value=\"',
                uid,
                '" name=\"',
                this.getConfig( 'inputName' ),
                '\" />\n',
                '<input type=\"hidden\" value=\"',
                uname,
                '" name=\"',
                this.getConfig( 'nameInputName' ),
                '\" />\n',
                uname,
                '<span uid=\"',
                uid,
                '\" action=\"x\" class=\"x\" onmouseout=\"this.className=\'x\'\" onmouseover=\"this.className=\'x_hover\'\" >\n</span>\n</span>\n</span>\n</span>\n</span>'
            ].join( '' );
            return a;
        },

        _onInputKeydown : function( event )
        {
            var i = this.getEl( 'inputContainer' ),
            pa = i.previousSibling,
            na = i.nextSibling,
            input = this.input,
            c = this.getEl( 'friendsContainer' );
            if ( event.keyCode == 8 && this.input.value =='' )
            {
                if( pa )
                {
                    this.deselectFriend( pa.getAttribute('uid') );
                }
                return true;
            }
            else if ( event.keyCode == 37 && this.input.value == '' )
            {
                if ( pa && pa.tagName.toLowerCase() == 'a' )
                {
                    i.parentNode.removeChild( i );
                    c.insertBefore( i , pa );
                    setTimeout( function(){input.focus();} , 0 );
                }
                return true;
            }
            else if ( event.keyCode == 39 && this.input.value == '' )
            {
                if ( na && na.tagName.toLowerCase() == 'a' )
                {
                    i.parentNode.removeChild( i );
                    XN.dom.insertAfter( i , na );
                    setTimeout( function(){input.focus();} , 0 );
                }
                return true;
            }		
            return false
        }
    });

    XN.event.enableCustomEvent( proto );

    /*
     * patch for old version
     */
    proto.deSelectAll = proto.deselectAll;
    proto.deSelectFriend = proto.deselectFriend = proto.deselect;
    proto.selectFriend = proto.select;
    proto.getSelectedFriendsID = proto.getSelectedFriends;
    proto.getIds = proto.getSelectedFriends;
    /*
     * patch end
     */
})();

XN.ui.friendSelectorWithMenu = function( p )
{
    var selector = new XN.ui.friendSelector( p );
    var menu = new XN.ui.friendSelectorMenu({
        url : selector.getConfig( 'url' ),
        param : selector.getConfig( 'param' ),
        multi : false ,
		alignType:p.alignType,
		offsetX:p.offsetX,
		offsetY:p.offsetY,
        initParam : p.initParam
    });

    var div = $element( 'div' );
    //selector.frame.parentNode.appendChild( div );
    div.addChild( selector );
    div.addChild( menu );
    selector.frame = div;
    //XN.ui.friendSelectorSynchronous( selector , menu );
    selector.addEvent( 'focus' , function()
    {
        menu.menu.hide();
    });

    menu.addEvent( 'select' , function( p )
    {
        var This = this;
        setTimeout( function()
        {
            This.menu.hide();
        },30);
        selector.fireEvent( 'select' , this.getUserByID( p ) );
    });
    
    menu.menu.menu.setOffsetY( 9 );

    return selector;

};

XN.ui.multiFriendSelectorWithMenu = function( p )
{
    var selector = new XN.ui.multiFriendSelector( p );

    var menu = new XN.ui.friendSelectorMenu({
        url : selector.getConfig( 'url' ),
        param : selector.getConfig( 'param' ),
        multi : true,
        showSelectAllCheckbox : selector.getConfig( 'showSelectAllCheckbox' ) || false 
    });
    menu.addEvent('submit', function()
    {
        menu.menu.hide();
    });
    selector.menuContainer.setContent( menu );
    
    XN.ui.friendSelectorSynchronous( selector , menu );
    
    return selector;
};

(function( ns )
{
	//var ID_PRE = 0;	
	var DEBUG = false;
	var addEvent = XN.event.addEvent;
	
	var log = function( s )
	{
		if ( DEBUG ) XN.log ( isString( s ) ? 'ui.tabView:' + s : s );
		return s;
	};

	/**
	 * tabview
	 * @namespace XN.ui
	 * @class tabView
	 * @constructor
	 * @param {Object} params
	 */
	
	ns.tabView = function( params )
	{
		this.config = {
			selectedClass : 'select',
			event : 'click',
            alwaysReload : false,
			mouseOverDelay : 0.2
		};
		$extend( this.config , params );
		this.init();
	};

	ns.tabView.prototype = {	
		
		_tabs : null,
		_currentTab : null,
		_idPre : null,
		_tabIndex : 0,

		init : function()
		{
			this._idPre = XN.util.createObjID();
			this._tabs = [];
		},
		
		getConfig : function( key )
		{
			if ( key == 'activeClass' ) return this.config[ 'activeClass' ] || this.config[ 'selectedClass' ];
			return this.config[ key ];
		},

		_getID : function( el )
		{
			if (el.nodeType && el.nodeType == 1)
				return this._setID(el).id;
			return el;
		},
		
		_setID: function(el){
			if(!el.id){
				this._tabIndex ++;
				el.setAttribute( 'id' , 'tabview_' + this._idPre + '_' + this._tabIndex );
			}
			return $(el);
		},

		
		//get tab obj by key or element id or element refer
		_getTab : function( id )
		{
			log( '_getTab start' );
			log( 'param:id' );
			log( id );
			if ( !id ) return log( id );
			
			if ( id.label ) return log( id );

			
			var key = this._getID( id );
			log( 'key:' + key );
			
			var tabs = this._tabs;
			
			log( 'all tabs' );
			log( tabs );
			
			for ( var i = tabs.length - 1 ; i >= 0 ; i -- )
			{
				if ( tabs[ i ].key == key ) {
					log( '_getTab end' );
					return log( tabs[ i ] );
				} 
			}
			
			log( '_getTab end' );	
			return log( null );
		},
		
		/**
		 * @method getCurrentTab
		 * @return {Object}
		 */
		
		getCurrentTab : function()
		{
			return this._getTab( this._currentTab );
		},
		
		/**
		 * @method setCurrentTab
		 * @param {String} tab id
		 * @param {Boolean} forceReload
		 * @return {Object} this
		 */
		
		setCurrentTab : function( tab , forceReload )
		{
			log ( 'setCurrentTab start' );
			var oldC = this.getCurrentTab();
			var nowC = this._getTab( tab );
			
			log ( 'old current:' );
			log( oldC );
			log( 'now current:' );
			log( nowC );
			
			if ( oldC && oldC.key == nowC.key && !forceReload ) return;
			
			if ( oldC ) this._deactiveTab( oldC );
			this._activeTab( nowC );

			this._setCurrentTab( nowC );
			log( 'setCurrentTab end' );

            this.fireEvent( 'change' , nowC );
			
            return this;
		},

		/**
		 * @method reset
		 * @return {Object} this
		 */
		
		reset : function()
		{
			var tab = this.getCurrentTab();
			if ( tab )
			{
				this._deactiveTab( tab );
			}
			this._setCurrentTab( null );
			return this;
		},

		_activeTab : function( tab )
		{
			log( '_activeTab:' );
			log( tab );
			
			tab.getEl( 'label' ).addClass( this.getConfig( 'activeClass' ) );
			if ( tab.content ) tab.getEl( 'content' ).show();
			tab.onActive( tab );
			
			log( '_activeTab end' );
		},
		
		_deactiveTab : function( tab )
		{
            //防止元素被销毁
            if ( tab.getEl( 'label' ) )
            {
			    tab.getEl( 'label' ).delClass( this.getConfig( 'activeClass' ) );
            }
			if ( tab.content ) tab.getEl( 'content' ).hide();
			tab.onInactive( tab );
		},

		_setCurrentTab : function( tab )
		{
			log( '_setCurrentTab start' );
			tab = this._getTab( tab );
			
			log( 'currentTab:' );
			log( tab );
			
			this._currentTab = tab ? tab.key : null;
			
			log( 'this._currentTab' );
			log( this._currentTab );
			
			log( '_setCurrentTab end' );
		},

		/**
		 * @method addTab
		 * @param {Object} t
		 * @return {Object} this
		 */
		
		addTab : function( t )
		{
			
			log( 'addTab start' );
			log( 'params:' );
			log( t );
			
			var This = this;
			
			var tab = {
				onActive : XN.func.empty,
				onClick : XN.func.empty,
				onInactive : XN.func.empty,
				onInit : XN.func.empty,
				getEl : function( key )
				{
					return $( this[ key ] );
				},
				active : false
			};
			
			t.label = this._setID( $(t.label) );
			t.key = t.key || t.label.id;

			if ( t.content )
			{
				t.content = this._getID( t.content );
				log( 'get content id:' + t.content );
			}
			
			$extend( tab , t );

			this._tabs.push( tab );
			
			log( 'all tabs' );
			log( this._tabs );
			
			if ( tab.active && this._currentTab === null )
			{
				if ( tab.content ) 
					tab.getEl( 'content' ).show();
				tab.label.addClass( this.getConfig( 'activeClass' ) );
				this._setCurrentTab( tab );
			}
			else
			{
				if ( tab.content ) tab.getEl( 'content' ).hide();
			}

			var ev = this.getConfig( 'event' );
			
			if ( ev == 'click' ){
				addEvent( tab.label , 'click' , function( e )
				{
					e = e || window.event;
					XN.event.stop( e );
					This._eventHander( e , tab.label );
				} , false );
			}
			else if ( ev == 'mouseover' )
			{
				var isMouseOn = true;
				var timer = null;
				
				addEvent( tab.label , 'mouseover' , function( e )
				{
					var el = this;
					isMouseOn = true;
					timer = setTimeout( function()
					{
						if ( !isMouseOn ) return;
						e = e || window.event;
						This._eventHander( e , tab.label );
					} , This.getConfig( 'mouseOverDelay' ) * 1000 );
				} , false );
				
				addEvent( tab.label , 'mouseleave' , function( e )
				{
					isMouseOn = false;
					if ( timer ) clearTimeout( timer );
				} , false );
			}
			
			tab.onInit( tab );
			
			log( 'addTab end' );
			
			return this;
		},
		
		_eventHander : function( e , el )
		{
			log( 'on click,el:' );
			log( el );
			log( 'get tab form by el:' );
			var tab = this._getTab( el );

		    if ( this.getConfig('alwaysReload') )
            {
                this.setCurrentTab( tab, true );
            }
            else
            {
			    this.setCurrentTab( tab );
            }

            tab.onClick( e , tab );
		},
		
		/**
		 * @method refresh
		 * @return {Object} this
		 */
		
		refresh : function()
		{
			this._activeTab( this.getCurrentTab() );
			return this;
		},

		
		//patch for old version
		
		showTab : function( id , forceReload )
		{
			this.setCurrentTab( id , forceReload );
		},

		hideAll : function()
		{
			this.reset();
		}
	};

	XN.event.enableCustomEvent( ns.tabView.prototype );

})( XN.ui );

/**
 * 强制页面重新渲染
 * @method refreshAll
 */

XN.ui.refreshAll = function()
{
    document.body.style.zoom = 1.1;
    document.body.style.zoom = 1;
};


/**
 * effect
 * @class effect
 * @namespace XN
 * @static
 */

XN.effect = {
	fadeIn:function( element,callBack )
    {
		if(element.fadetimer)return;
		callBack = callBack || XN.FUNC.empty;
		var op = 0;
		element.setOpacity(0);
		element.style.display = '';
		element.fadetimer = setInterval(function(){
            XN.Element.setOpacity(element,(op += 0.20));
            if(op >= 1){
                clearInterval(element.fadetimer);
                element.fadetimer = null;
                callBack(element);
            }
		},60);
	},
	fadeOut:function(element,callBack){
		if(element.fadetimer)return;
		callBack = callBack || XN.FUNC.empty;
		var op =1;
		element.setOpacity(1);
		element.fadetimer = setInterval(function(){
            XN.Element.setOpacity(element,(op -= 0.20));
            if(op <= 0){
                clearInterval(element.fadetimer);
                element.fadetimer = null;
                callBack(element);
                element.setOpacity(1);
            }
        },60);		
	},
	gradient:function(element,r,g,b,callBack){
		if(element.gradientTimer)return;
		callBack = callBack || XN.FUNC.empty;
		element.style.backgroundColor = '#fff';
		element.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
		element.gradientTimer = setInterval(function(){
			b += 10;
			element.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + (b >255 ? 255 : b) + ')';
			if(b > 255){
				clearInterval(element.gradientTimer);
				element.gradientTimer = null;
				callBack(element);
			}
		},60);
	},
	slideOpen:function(element){
		if(element.slidetimer)return;
		if(!element.slideHeight){
			var _position = element.getStyle('position');
			element.setStyle('position:absolute;left:-99999px;top:-99999px;');
			element.show();
			element.slideHeight = element.offsetHeight;
			element.hide();
			element.setStyle('position:' + _position + ';left:auto;top:auto;');
		}
		var eh = element.slideHeight,h = 0;
		var step = parseInt(eh / 10);
		element.style.height = '0px';
		element.style.display = '';
		element.style.overflow = 'hidden';
		element.slidetimer = setInterval(function(){
			element.style.height = (h += step) + 'px';
			if(h >= eh){
				clearInterval(element.slidetimer);
				element.slidetimer = null;
				element.style.height = eh;
				element.style.overflow = element.slideOverflow;
			}
		},50);
	},
	slideClose:function(element){
		if(element.slidetimer)return;
		var eh = element.offsetHeight,h = eh;
		element.slideHeight = eh;
		element.slideOverflow = element.getStyle('overflow');
		element.style.overflow = 'hidden';
		var step = parseInt(eh / 10);
		element.slidetimer = setInterval(function(){
			element.style.height = (h -= step) + 'px';
			if(h <= 0){
				clearInterval(element.slidetimer);
				element.slidetimer = null;
				element.style.display = 'none';
				element.style.height = eh;
				element.style.overflow = element.slideOverflow;
			}
		},50);
	},
	scrollTo:function(element,speed,callBack){
		if(element.scrolltimer)return;
		speed = speed || 10;
		callBack = callBack || XN.FUNC.empty;
		var d = element.realTop();
		var i = XN.EVENT.winHeight();
		var h = document.body.scrollHeight;
		var a = XN.EVENT.scrollTop();;
		var offsetTop = null;
		if(d > a){
			if(d + element.offsetHeight < i + a )return;
			element.scrolltimer = setInterval(function(){
				a +=Math.ceil((d-a) / speed) || 1;
				window.scrollTo(0,a);
			  	if(a == d){
					clearInterval(element.scrolltimer);
					element.scrolltimer = null;
				}
			},10);
		}else{
			element.scrolltimer = setInterval(function(){
				a += Math.ceil((d-a) / speed) || -1;
				window.scrollTo(0,a);
			  	if(a == d){
					clearInterval(element.scrolltimer);
					element.scrolltimer = null;
				}
			},10);			
		}
	}
};

/*
 * patch for old version
 */

XN.EFFECT = XN.Effect = XN.effect;

/**
 * Motion - 动画组件
 *
 * @author  mingcheng<i.feelinglucky@gmail.com>
 * @since   2009-01-26
 * @link    http://www.gracecode.com/
 * @version $Id: motion.js 217 2009-04-06 03:49:08Z i.feelinglucky $
 *
 * @change
 *     [+]new feature  [*]improvement  [!]change  [x]bug fix
 *
 * [*] 2009-04-05
 *      优化对象接口
 *
 * [*] 2009-04-05
 *      优化 customEvent；增强动画函数判断，使其支持自定义函数
 *
 * [*] 2009-03-30
 *      增加 customEvent 函数，优化逻辑
 *
 * [!] 2009-02-01
 *      将 setTimeout 改成了 setInterval ，详见 http://ejohn.org/blog/how-javascript-timers-work/
 *
 * [*] 2009-01-27
 *      调整接口，优化代码
 *
 * [+] 2009-01-26
 *      最初版，完成基本功能
 */
(function(scope) {
    /**
     * Easing Equations
     *
     * @see http://developer.yahoo.com/yui/animation/
     * @see http://www.robertpenner.com/profmx
     * @see http://hikejun.com/demo/yui-base/yui_2x_animation.html
     */
    var Tween = {
        linear: function (t, b, c, d) {
            return c*t/d + b;
        },

        easeIn: function (t, b, c, d) {
            return c*(t/=d)*t + b;
        },

        easeOut: function (t, b, c, d) {
            return -c *(t/=d)*(t-2) + b;
        },

        easeBoth: function (t, b, c, d) {
            if ((t/=d/2) < 1) {
                return c/2*t*t + b;
            }
            return -c/2 * ((--t)*(t-2) - 1) + b;
        },
        
        easeInStrong: function (t, b, c, d) {
            return c*(t/=d)*t*t*t + b;
        },
        
        easeOutStrong: function (t, b, c, d) {
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        
        easeBothStrong: function (t, b, c, d) {
            if ((t/=d/2) < 1) {
                return c/2*t*t*t*t + b;
            }
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        },

        elasticIn: function (t, b, c, d, a, p) {
            if (t === 0) { 
                return b; 
            }
            if ( (t /= d) == 1 ) {
                return b+c; 
            }
            if (!p) {
                p=d*0.3; 
            }
            if (!a || a < Math.abs(c)) {
                a = c; 
                var s = p/4;
            } else {
                var s = p/(2*Math.PI) * Math.asin (c/a);
            }
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },

        elasticOut: function (t, b, c, d, a, p) {
            if (t === 0) {
                return b;
            }
            if ( (t /= d) == 1 ) {
                return b+c;
            }
            if (!p) {
                p=d*0.3;
            }
            if (!a || a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            } else {
                var s = p/(2*Math.PI) * Math.asin (c/a);
            }
            return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
        },
        
        elasticBoth: function (t, b, c, d, a, p) {
            if (t === 0) {
                return b;
            }
            if ( (t /= d/2) == 2 ) {
                return b+c;
            }
            if (!p) {
                p = d*(0.3*1.5);
            }
            if ( !a || a < Math.abs(c) ) {
                a = c; 
                var s = p/4;
            }
            else {
                var s = p/(2*Math.PI) * Math.asin (c/a);
            }
            if (t < 1) {
                return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
                        Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            }
            return a*Math.pow(2,-10*(t-=1)) * 
                    Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
        },

        backIn: function (t, b, c, d, s) {
            if (typeof s == 'undefined') {
               s = 1.70158;
            }
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },

        backOut: function (t, b, c, d, s) {
            if (typeof s == 'undefined') {
                s = 1.70158;
            }
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },
        
        backBoth: function (t, b, c, d, s) {
            if (typeof s == 'undefined') {
                s = 1.70158; 
            }
            if ((t /= d/2 ) < 1) {
                return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            }
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        },

        bounceIn: function (t, b, c, d) {
            return c - Tween['bounceOut'](d-t, 0, c, d) + b;
        },
        
        bounceOut: function (t, b, c, d) {
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
            }
            return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
        },
        
        bounceBoth: function (t, b, c, d) {
            if (t < d/2) {
                return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
            }
            return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
        } /* ,

        // extra, form http://hikejun.com/demo/yui-base/yui_2x_animation.html
        easeInQuad: function (t, b, c, d) {
            return c*(t/=d)*t + b;
        },

        easeOutQuad: function ( t, b, c, d) {
            return -c *(t/=d)*(t-2) + b;
        },

        easeInOutQuad: function ( t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        },

        easeInCubic: function ( t, b, c, d) {
            return c*(t/=d)*t*t + b;
        },

        easeOutCubic: function ( t, b, c, d) {
            return c*((t=t/d-1)*t*t + 1) + b;
        },

        easeInOutCubic: function ( t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        },

        easeInQuart: function ( t, b, c, d) {
            return c*(t/=d)*t*t*t + b;
        },

        easeOutQuart: function ( t, b, c, d) {
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },

        easeInOutQuart: function ( t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        },

        easeInQuint: function ( t, b, c, d) {
            return c*(t/=d)*t*t*t*t + b;
        },

        easeOutQuint: function ( t, b, c, d) {
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },

        easeInOutQuint: function ( t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        },

        easeInSine: function ( t, b, c, d) {
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },

        easeOutSine: function ( t, b, c, d) {
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },

        easeInOutSine: function ( t, b, c, d) {
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        },

        easeInExpo: function ( t, b, c, d) {
            return (t===0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },

        easeOutExpo: function ( t, b, c, d) {
            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },

        easeInOutExpo: function ( t, b, c, d) {
            if (t===0) return b;
            if (t==d) return b+c;
            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },

        easeInCirc: function ( t, b, c, d) {
            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
        },

        easeOutCirc: function ( t, b, c, d) {
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },

        easeInOutCirc: function ( t, b, c, d) {
            if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        },

        easeInElastic: function ( t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t===0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*0.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },

        easeOutElastic: function ( t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t===0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*0.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
        },

        easeInOutElastic: function ( t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t===0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(0.3*1.5);
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -0.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
        },

        easeInBack: function ( t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },

        easeOutBack: function ( t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },

        easeInOutBack: function ( t, b, c, d, s) {
            if (s == undefined) s = 1.70158; 
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        },

        easeInBounce: function ( t, b, c, d) {
            return c - Tween['easeOutBounce']( d-t, 0, c, d) + b;
        },

        easeOutBounce: function ( t, b, c, d) {
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
            }
        },

        easeInOutBounce: function ( t, b, c, d) {
            if (t < d/2) return Tween['easeInBounce']( t*2, 0, c, d) * 0.5 + b;
            return Tween['easeOutBounce']( t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
        }
        */
    };

    // 动画行进中
    var _Tweening = function() {
        // 动画进行时的回调
        customEvent(this.onTweening, this);

        if (this.current >= this.frames) {
            this.stop();
            customEvent(this.onComplete, this);
            this.tweening = false;
            return;
        }

        this.current++;
    };

    /**
     * 自定义事件
     * 
     * @params {Function} 事件回调
     * @params {Object} 作用域
     */
    var customEvent = function(func, scope) {
        var args = Array.prototype.slice.call(arguments);
            args = args.slice(2);
        if (typeof func == 'function') {
            try {
                return func.apply(scope || this, args);
            } catch (e) {
                scope.errors = scope.errors || [];
                scope.errors.push(e);
            }
        }
    };

    /**
     * 动画组件
     *
     * @params {String} 动画类型（方程式）
     * @params {Number} 过程动画时间
     */
    scope.Motion = function(tween, duration) {
        this.duration = duration || 1000;
        this.tween = tween || 'linear';
    };

    // 返回动画公式
    scope.Motion.getTweens = function(){return Tween};

    // 原型继承
    scope.Motion.prototype = {
        // 初始化
        init: function() {
            customEvent(this.onInit, this);

            // 默认 35 FPS
            this.fps = this.fps || 35;

            // 计算帧数
            this.frames = Math.ceil((this.duration/1000)*this.fps);
            if (this.frames < 1) this.frames = 1;

            // 确定动画函数，便于计算当前位置
            var f = ('function' == typeof this.tween) ? this.tween : Tween[this.tween] || Tween['linear'];
            this.equation = function(from, to) {
                return f((this.current/this.frames)*this.duration, from, to - from, this.duration);
            };
            this.current = this.tweening = 1;
        },

        //  开始动画
        start: function() {
            this.init();
            customEvent(this.onStart, this);
            var _self = this, d = this.duration / this.frames;
            this.timer = setInterval(function() {_Tweening.call(_self);}, d);
        },

        // 停止动画
        stop: function() {
            if (this.timer) {
                clearInterval(this.timer);
            }
            this.tweening = false;
        }
    };
})( XN.effect );
/*
 * patch end
 */

XN.ui.getHiddenDiv = function()
{
    if ( ! this._hiddenDiv )
    {
        this._hiddenDiv = $element( 'div' ).hide();
        document.body.appendChild( this._hiddenDiv );
    }

    return this._hiddenDiv;
}

XN.ui.friendSearchBar = function( p )
{
    var input = $(p.input);
    var submit = $(p.submit || null);
    var form = $(p.form);
    var tip = p.tip || '找人...';
    var action = p.action || function(p)
    {
        if( p.type && p.type == 'PAGE' ) {
             window.location.href = 'http://page.' + XN.ENV.domain + '/' + p.id + '?from=opensearch';
        } else {
             window.location.href = 'http://www.' + XN.ENV.domain + '/profile.do?id=' + p.id + '&from=opensearch';
        } 
    };
    var gotoUserPage = false;
    
    (new XN.FORM.inputHelper(input)).setDefaultValue(tip).onEnter(function(el)
    {
        if(gotoUserPage)return;
        if(!XN.STRING.isBlank(el.value))
        {
            form.submit();
        }
    });

    var maxLength = 16;
    var param = {
        id:input,
        noResult:function(){
            return '搜索"' + this.input.value + '"';
        },
        limit : maxLength,
        params : p.params
        //url : 'http://friend.' + XN.env.domain + '/friendsSelector.do'
    }; 


    var friendSelector = new XN.UI.friendSelector(param);
    
    friendSelector.lastMenuItem = function()
    {
        if ( this.result.length == maxLength )
        {
            return '<li><p><a onmousedown="window.location.href=this.href" href="http://friend.' + XN.env.domain + '/myfriendlistx.do?qu=' + this.input.value + '">点击查看更多..</a></p></li>';
        }
        else
        {
            return '';
        }
    }

    friendSelector.setMenuWidth( input.offsetWidth );


    friendSelector.onSelectOne = function(p)
    {
        gotoUserPage = true;
        action(p);
    };
    if(submit)submit.onclick = function()
    {
        if(gotoUserPage)return false;
        var v = input.value;
        if(v != tip && !XN.STRING.isBlank(v))
        {
            form.submit();
            return false;
        }
        if ( submit.tagName.toLowerCase() == 'a' )
        {
            return true;
        }
        else
        {
            return false;
        }
    }
};


/*
 * 此好友选择器原则上只用于导航栏
 * 
 */
XN.ui.navSearchBar = function( p ) 
{
    var input = $(p.input);
    var submit = $(p.submit || null);
    var form = $(p.form);
    var tip = p.tip || '找人...';
    var action = p.action || function(p)
    {
        if( p.type && p.type == 'PAGE' ) {
             window.location.href = 'http://page.' + XN.ENV.domain + '/' + p.id + '?from=opensearch';
        } else {
             window.location.href = 'http://www.' + XN.ENV.domain + '/profile.do?id=' + p.id + '&from=opensearch';
        } 
    };
    var gotoUserPage = false;
    
    (new XN.FORM.inputHelper(input)).setDefaultValue(tip).onEnter(function(el)
    {
        if(gotoUserPage)return;
        if(!XN.STRING.isBlank(el.value))
        {
            form.submit();
        }
    });

    var maxLength = 7;
    var param = {
        id:input,
        noResult:function(){
            return '<a onmousedown="window.location.href=this.href" href="http://browse.' + XN.env.domain + '/searchEx.do?from=opensearchclick&q=' + encodeURIComponent( this.input.value ) +'" title="搜索'+ this.input.value  +'">搜索"' + this.input.value + '"</a>';
        },
        limit : maxLength,
        params : p.params,
        wrapper :  ['<div class="">',
            '<span class="x1">',
                '<span class="x1a"></span>',
            '</span>',
            '<span class="x2">',
                '<span class="x2a"></span>',
            '</span>',
            '<div class="m-autosug-minwidth">',
                '<div class="m-autosug-content">',
                    '<ul class="search-Result"></ul>',
                '</div>',
            '</div>',
        '</div>'].join(''),
        url : 'http://friend.' + XN.env.domain + '/friendsSelectorN'
    }; 


    var friendSelector = new XN.UI.friendSelector(param);
    window.a = friendSelector;
    
    friendSelector.buildMenu = function( r )
    {
        return 	'<img src="' + r.head  + '" width="50" height="50" alt="'+ r.name  +'"/>' + 
                '<strong>'+ r.name  +'</strong>'
                //'<span>关于他和爆菊的故事</span>'
    }

    friendSelector._noDataShow = function(){

		var tip = this.getConfig( 'dataLoading' );
		this._ul.innerHTML = '<li class="lookMore">' + tip + '</li>';
		this.menu.show();			

    }

    friendSelector._buildMenu  =  function( result ) {
        var This = this;
        this.result = result;

        if ( result.length == 0 ) {
            var noResult = this.getConfig( 'noResult' );

            if ( isFunction( noResult ) ) {
                noResult = noResult.call( this );
            }

            this._ul.innerHTML = '<li class="lookMore">' + noResult + '</li>';
            this.menu.show();
            this._currentLi = null;
            return;
        }

        var lis = [];

        lis.push( this.firstMenuItem() );
        
        var len = result.length - 1;

        XN.array.each( result , function( i , v ) {
            lis.push( '<li onmouseover="getCompleteMenu(' + This._MID + ')._highlightMenuItem(this);" aid="' + i + '">' + This.buildMenu( v ) + '</li>' );
        });
        
        lis.push( this.lastMenuItem() );

        this._ul.innerHTML = lis.join('');
        
        if( this.getConfig( 'autoSelectFirst' ) ) this._highlightMenuItem( this._ul.firstChild );
        
        this.menu.show();
    }

    friendSelector.lastMenuItem = function() {
        if ( this.result.length == maxLength ) {
            return '<li class="lookMore"><a onmousedown="window.location.href=this.href" href="http://friend.' + XN.env.domain + '/myfriendlistx.do?qu=' + this.input.value + '">点击查看更多..</a></li>';
        } else {
            return '';
        }
    }

    friendSelector.setMenuWidth( input.offsetWidth );

    friendSelector.onSelectOne = function(p) {
        gotoUserPage = true;
        action(p);
    };

    if(submit)submit.onclick = function() {
        if(gotoUserPage)return false;
        var v = input.value;
        if(v != tip && !XN.STRING.isBlank(v)) {
            form.submit();
            return false;
        }

        if ( submit.tagName.toLowerCase() == 'a' ) {
            return true;
        } else {
            return false;
        }
    }
};
/**
 *  表单相关
 * @module form
 */


/**
 * @namspace XN
 * @class form
 * @static
 */

XN.namespace( 'form' );

/*
 * patch for old version
 */

XN.FORM = XN.Form = XN.form;

/*
 * patch end
 */

/**
 * 将json字符串解析并将值填入表单
 * @method fiilWidthJSON
 * @param {HTMLElement | String} form
 * @param {String} json
 */

XN.form.fillWithJSON = function( form , json )
{
    form = $( form );
    XN.form.fillWithArray( form , XN.json.parse( json ) );
};


/**
 * 将数组填入表单
 * @method fillWidthArray
 * @param {HTMLElement | String} form
 * @param {Array} a
 */

XN.form.fillWithArray = function( form , a )
{
    form = $( form );
    for (var p in a)
    {
        XN.form.Element.setValue( p , a[ p ] , form );
    }
};

/**
 * 设定一个表单元素的值
 * @method setValue
 * @param {HTMLElement | String} element
 * @param {Any} value
 * @return {HTMLElement}
 */

XN.form.setValue = function( element,value )
{
	return XN.form.Element.setValue( element , value );
};


/**
 * 获取一个表单元素的值
 * @method getValue
 * @param {HTMLElement | String} element
 * @return {String | Boolean}
 */

XN.form.getValue = function( element )
{
	return XN.form.Element.getValue( element );
};

/**
 * 序列化一个form
 * @method serialize
 * @param {HTMLElement | String} form
 * @param {String} type 序列化的形式可以是'string','array','hash'
 * @return {String | Array | Hash}
 */

XN.form.serialize = function( form , type )
{
    return this.serializeElements( this.getElements( form ) , type || 'string' );
};


XN.form.serializeElements = function( elements , type ,encode )
{
    
    type = type || 'array';

    if(isUndefined( encode ) )
    {
        encode = false;
    }

    var data = [],_key,_value;

    XN.array.each( elements , function( i , v )
    {
        if ( !v.disabled && v.name)
        {
            _key = v.name;
            _value = encode ? encodeURIComponent( XN.form.Element.getValue( v ) ) : XN.form.Element.getValue( v );
            
            if ( _value !== null )
            {
                if ( _key in data )
                {
                    if ( !isArray( data[ _key ] ) ) { data[ _key ] = [ data[ _key ] ]; }
                    data[ _key ].push( _value );
                }
                else
                {
                    data[ _key ] = _value;
                }
            }
        }        
    });
    
    if ( type == 'array' )
    {
        return data;
    }
    else if ( type == 'string' )
    {
        return XN.array.toQueryString( data );
    }
    else if( type == 'hash' )
    {
        var tmp = {};
        for ( var p in data )
        {
            if ( !isFunction( data[ p ] ) )
            {
                tmp[ p ] = data[ p ];
            }
        }
        return tmp;
    }
    //return options.hash ? data : Object.toQueryString(data);
};


XN.form.getElements = function( form )
{
    form = $( form );
    var elements = [];
    var all = form.getElementsByTagName( '*' );
    
    XN.array.each( all , function( i , v )
    {
        if (!isUndefined( XN.form.Element.Serializers[ v.tagName.toLowerCase() ] ) )
        {
            elements.push( v );
        }        
    });

    return elements;
};


XN.form.Element = {

    getValue : function( element )
    {
		element = $( element );
		var method = element.tagName.toLowerCase();
		return XN.form.Element.Serializers[ method ]( element );
	},

	setValue: function( element, value,form )
    {
		if ( form ) 
        {
			element = form[ element ];
			if ( ( isElement( element ) && element.tagName.toLowerCase() == 'select' ) )
            {
				XN.form.Element.Serializers[ 'select' ]( element, value );
			}
            else if( isElement( element ) )
            {
				XN.form.Element.Serializers[ element.tagName.toLowerCase() ]( element, value );
			}
            else if( element[ 0 ] )
            {
				var method = element[ 0 ].tagName.toLowerCase();
				for ( var i = 0,j = element.length;i < j;i++ )
                {
					XN.form.Element.Serializers[ method ]( element[i], ( value[i] || value || '' ) );
				}
			}
            return element;
		}
        else
        {
			element = $( element );
			var method = element.tagName.toLowerCase();
			XN.form.Element.Serializers[ method ]( element , value );
			return element;
		}
	}
};

XN.form.Element.Serializers = {
	input : function( element, value )
    {
		switch ( element.type.toLowerCase() )
        {
			case 'checkbox':
			case 'radio':
				return XN.form.Element.Serializers.inputSelector( element, value );
			default:
				return XN.form.Element.Serializers.textarea( element, value );
		}
	},
	
    inputSelector : function( element, value )
    {
		if (isUndefined( value ) ) 
        {
            return element.checked ? element.value : null;
        }
		else
        {
            element.checked = !!value;
        }
	},

	textarea : function( element, value )
    {
		if ( isUndefined( value ) )
        { return element.value; }
		else
        { element.value = value; }
	},

	select : function( element, index )
    {
		if ( isUndefined( index ) )
		{
            return this[ element.type == 'select-one' ? 'selectOne' : 'selectMany' ]( element );
        }
		else
        {
			var opt, value, single = !isArray( index );
			for (var i = 0, length = element.length; i < length; i++)
            {
				opt = element.options[i];
				value = this.optionValue( opt );
				if ( single )
                {
					if ( value == index )
                    {
					    opt.selected = true;
				    	return;
					}
				}
				else 
                { 
                    opt.selected = XN.array.include( index ,value );
                }
			}
		}
	},

	selectOne : function( element )
    {
		var index = element.selectedIndex;
		return index >= 0 ? this.optionValue( element.options[ index ] ) : null;
	},

	selectMany : function( element )
    {
		var values = [], length = element.length;
		if (!length) {return null;}

		for ( var i = 0; i < length; i++ )
        {
			var opt = element.options[i];
			if (opt.selected) {values.push(this.optionValue(opt));}
		}
		return values;
	},

	optionValue : function( opt )
    {
		return opt.value || opt.text;
	}
};


/*
 * patch for old version
 */

$F = function( id , type )
{
	var el = $( id );
	if ( el.tagName.toLowerCase() == 'form' )
    {
		return XN.form.serialize( el , type );
	}
    else
    {
		return XN.form.getValue( el );
	}
};

/*
 * patch end
 */

XN.form._helper = function( el )
{
    el = $( el );
    if ( el._helper ) return el._helper;
    el._helper = this;
    this.element = el;
};

XN.form._helper.prototype = 
{	
    maxSize : 9999,
    limit : function( max, cut )
    {
        var This = this;
        this.maxLength = max;
        if ( isUndefined(cut) ) cut = true; 
        this._limit_cut = cut;
        if ( this._limit ) return this;        
        this._limit = true;

        var This = this;

        var el = this.element;

        XN.event.addEvent( el , 'focus' , check );
        XN.event.addEvent( el , 'keyup' , check );

        function check()
        {
            This.limitCheck();
        }

        return this;
    },
    
    limitCheck : function()
    {
        var This = this;
        var el = this.element;
        //fix bug for ie 可能会闪屏
        setTimeout( function()
        {
            var v = el.value;
            if ( v.length > This.maxLength )
            {
                if ( This._limit_cut ) el.value = v.substr( 0 , This.maxLength );
                This.fireEvent( 'overmaxLength' );
            }
            else
            {
                This.fireEvent( 'normalLength' );
            }
            
            This.fireEvent( 'checkover' );
        } , 0 );
    },

    count : function( show , showMax )
    {
        if ( this._count ) return this;
        this._count = true;

        var This = this , show = $( show );
        if ( isUndefined( showMax ) ) showMax = true;
        if ( !this.maxLength ) showMax = false;

        var el = this.element;
        
        this.addEvent( 'overmaxLength' , function()
        {
            show.addClass('full');
        });

        this.addEvent( 'normalLength' , function()
        {
            show.delClass('full');
        });

        this.addEvent( 'checkover' , update );

        function update()
        {
            show.innerHTML = el.value.length  + ( showMax ? '/' + This.maxLength : '');
        }

        return this;
    },

    //patch for old method

    countSize : function( show , max , showMax )
    {
        return this.limit( max ).count( show , showMax );
	},

    getRealValue : function()
    {
        var el = this.element;
		if (el.value == this._defaultValue || el.value == el.getAttribute('placeholder')) return '';
        return el.value;
    },

    reloadDefaultValue : function()
    {
        this.element.value = this._defaultValue;
        this.element.style.color = '#888';
    },

    defaultValue : function( v )
    {
        var This = this;
        var el = this.element;
        v = v || el.value;

        if ( !isUndefined(this._defaultValue) && el.value == this._defaultValue )
        {
            el.value = v;
        }
        
        this._defaultValue = v;
        
        if ( this._default ) return this;
        this._default = true;
        

        
        if ( document.activeElement !== el )
        {
            el.value = v;
        }
        
        el.style.color = '#888';

        XN.event.addEvent( el , 'focus' , function()
        {
            if ( el.value == This._defaultValue )
            {
                el.value = '';
                el.style.color = '#333';
            }
        });

        XN.event.addEvent( el , 'blur' , function()
        {
            if ( el.value == '' )
            {
                el.value = This._defaultValue;
                el.style.color = '#888';
            }
        });

        return this;
    },

    
    focus : function( position )
    {
		var el = this.element;
	    if ( isUndefined( position ) )
        {
            position = el.value.length;
        }

		if ( el.setSelectionRange )
        {
			el.focus();
			el.setSelectionRange( el.value.length , position );
		}
        else if( el.createTextRange )
        {
            var range = el.createTextRange();
            range.moveStart( 'character', position );
            range.collapse(true);
            range.select();
            el.focus();
		}
        else
        {
			el.focus();
		}

        return this;
	},

	onEnter : function( callBack )
    {
		var el = this.element;
		var isTextArea = el.tagName.toLowerCase() == 'textarea';
		
        XN.event.addEvent( el , 'keydown' , function( e )
        {
			e = e || window.event;
			if( e.keyCode == 13 )
            {
				if( isTextArea && !e.ctrlKey ) return false;
                XN.event.stop( e );
				callBack( el );
				return false;
			}
		},false);

		return this;
	},
	
    onEsc : function( callBack )
    {
		var el = this.element;
		XN.event.addEvent( el , 'keydown' , function( e )
        {
			e = e || window.event;
			if ( e.keyCode == 27 )
            {
                XN.event.stop( e );
				callBack( el );
				return false;
			}
		},false);
		return this;		
	},

	autoResize : function( min , max )
    {
		var This = this , el = this.element , type;
		this.minSize = min || this.minSize;
		this.maxSize = max || this.maxSize;
		//this.type = type;
		
        if ( el.tagName.toLowerCase() == 'textarea' )
        {
            this.resizeType = 'height';
        }
        else
        {
            this.resizeType = 'width';
        }

        if ( !XN.form.inputShadow ) 
        {
			var d = $element('div');
			d.setStyle('position:absolute;left:-99999px;top:-99999px');
			document.body.appendChild( d );
			XN.form.inputShadow = d;
		}

		this.shadow = XN.form.inputShadow;
		
        //延时等待渲染
        setTimeout(function()
        {
			if( min ) return;
			This.minSize = type == 'width' ? el.offsetWidth : el.offsetHeight;
		},10);

		el.style.overflow = 'hidden';
		
		/*if ( XN.browser.IE )
        {
			el.style.fontSize = '12px';
			el.style.fontFamily = "'lucida grande',tahoma,verdana,arial,simsun,sans-serif";
		}*/

		XN.event.addEvent( el , 'focus' , function()
        {
			This.timer = setInterval( This._resize.bind( This ) , 200 );
		});

		XN.event.addEvent( el , 'blur' , function()
        {
			clearInterval( This.timer );
			This.timer = null;
		});
        
        return this;
    },
	_resize : function( )
    {
		var el = this.element , sh = this.shadow , oh , type = this.resizeType;
		sh.style.fontSize = el.getStyle( 'fontSize' );
		var fs = parseInt( el.getStyle( 'fontSize' ), 0 );
        sh.style.fontFamily = el.getStyle( 'fontFamily' );
		(type == 'width') ? sh.style.height = el.offsetHeight : sh.style.width = el.offsetWidth;
		sh.innerHTML = XN.string.escapeHTML( el.value ).replace(/\r\n/mg,'<br>').replace(/\r/mg,'<br>').replace(/\n/mg,'<br>');
		
		(type == 'width') ? oh = sh.offsetWidth : oh = sh.offsetHeight + fs + 3;
		if ( oh > this.minSize && oh < this.maxSize )
        {
			el.style[type] = oh + 'px';
		}
        else if( oh < this.minSize )
        {
			el.style[type] = this.minSize + 'px';
		}
        else if( oh > this.maxSize )
        {
			el.style[type] = this.maxSize + 'px';
		}
	},

    cursorPosition : function()
    {
        var textBox = this.element;
        var start = 0, end = 0;
        
        if ( typeof( textBox.selectionStart ) == 'number' )
        {
            start = textBox.selectionStart;
            end = textBox.selectionEnd;
        }
        else if ( document.selection )
        {
            var range = document.selection.createRange();
            if ( range.parentElement() == textBox )
            {
				var range_all = document.body.createTextRange();
				range_all.moveToElementText( textBox );
				for ( start=0; range_all.compareEndPoints( 'StartToStart' , range ) < 0; start++ )
				{
					range_all.moveStart( 'character', 1 );
				}
				for ( var i = 0; i <= start; i ++ )
				{
					if ( textBox.value.charAt(i) == '\n' )
						start++;
				}
				
				var range_all = document.body.createTextRange();
				
				range_all.moveToElementText(textBox);
				
				for ( end = 0; range_all.compareEndPoints('StartToEnd', range) < 0; end ++ )
					range_all.moveStart('character', 1);
				
				for ( var i = 0; i <= end; i ++ )
				{
					if (textBox.value.charAt(i) == '\n')
						end ++;
				}
            }
        }
        
        return {"start": start, "end": end, "item": [start, end]};
    }
};

XN.form._helper.prototype.setDefaultValue = XN.form._helper.prototype.defaultValue;
XN.event.enableCustomEvent( XN.form._helper.prototype );

XN.form.help = function( id )
{
    return new XN.form._helper( id );
}

//patch for old method
XN.form.inputHelper = XN.form.textAreaHelper = XN.form.help;
$CursorPosition = function( el ){ return XN.form.help( el ).cursorPosition(); };

XN.form.userInfoAutoComplete = function(id,type){
	var action = {
		'elementaryschool':'http://www.' + XN.env.domain + '/autocomplete_elementaryschool.jsp',
		'juniorhighschool':'http://www.'+ XN.env.domain +'/autocomplete_juniorhighschool.jsp',
		'workplace':'http://www.'+ XN.env.domain +'/autocomplete_workplace.jsp',
		'highschool':'http://www.'+ XN.env.domain +'/autocomplete_highschool.jsp',
		'allnetwork':'http://www.'+ XN.env.domain +'/autocomplete_all_network.jsp',
		'allSchool':'http://www.'+ XN.env.domain +'/autocomplete-school.jsp',
		'city':'http://www.'+ XN.env.domain +'/autocomplete-city.jsp',
		'college':'http://www.'+ XN.env.domain +'/autocomplete_college.jsp'
	};
    
	var ds = new XN.ui.DS_XHR({
		url:action[type]
	});

	var at = new XN.ui.autoCompleteMenu({
		DS:ds,
		input:id
	});

	at.buildMenu = function(r){
		return '<p>' + (r.name || r.Name) + '</p>';
	};
	at.addEvent('select',function(r){
		this.input.value = (r.name || r.Name);
	});

    return at;
};
XN.namespace( 'widgets' );
XN.WIDGETS = XN.Widgets = XN.widgets;
//app 菜单
XN.dom.ready(function()
{
	if ( $('appDropMenu') ) {
		if ( !$('showAppMenu') ) return;
		if ( !$('navMyApps') ) return;
		var myApps = $('navMyApps');
		if(!myApps ) return;
		
		myApps.show();

		var showMenuBar = $('showAppMenu');
		var baseWidth = 133;

		var menu = new XN.ui.menu({
			bar:'appDropMenu',
			menu:'appMenu',
			offsetX: $('showAppMenu').realLeft()-$('appDropMenu').realLeft(),
			offsetY: XN.browser.IE6?(($('showAppMenu').realTop()+$(Sizzle('#navBar .nav-body')[0]).offsetHeight)-($('appDropMenu').realTop()+35)):(($('showAppMenu').realTop()+$(Sizzle('#navBar .nav-body')[0]).offsetHeight)-($('appDropMenu').realTop()+17)),
			fireOn:'mouseover'
			//addIframe : true
		});
		menu.onShow = function(){
			$('showAppMenu').addClass('hover');
			$('appDropMenu').addClass('drop-menu-btn-hover');
		}
		menu.onHide = function(){
			$('showAppMenu').delClass('hover');
			$('appDropMenu').delClass('drop-menu-btn-hover');
		}

	} else {
		if ( !$('showAppMenu') ) return;
		if ( !$('navMyApps') ) return;
		var myApps = $('navMyApps');
		if(!myApps ) return;
		
		myApps.show();

		var showMenuBar = $('showAppMenu');
		var baseWidth = 133;

		var menu = new XN.ui.menu({
			bar:'showAppMenu',
			menu:'appMenu',
			fireOn:'mouseover'
			//addIframe : true
		});
	}
});
//个人主页菜单
XN.dom.ready(function(){
	if ( !$('profileDropMenu') ) return;
	var menu = new XN.ui.menu({
        bar:'profileDropMenu',
        menu:'profileMenu',
		offsetX: $('showProfileMenu').realLeft()-$('profileDropMenu').realLeft(),
		offsetY: XN.browser.IE6?(($('showProfileMenu').realTop()+$(Sizzle('#navBar .nav-body')[0]).offsetHeight)-($('profileDropMenu').realTop()+35)):(($('showProfileMenu').realTop()+$(Sizzle('#navBar .nav-body')[0]).offsetHeight)-($('profileDropMenu').realTop()+17)),
        fireOn:'mouseover'
        //addIframe : true
    });
	menu.onShow = function(){
		$('showProfileMenu').addClass('hover');
		$('profileDropMenu').addClass('drop-menu-btn-hover');
	}
	menu.onHide = function(){
		$('showProfileMenu').delClass('hover');
		$('profileDropMenu').delClass('drop-menu-btn-hover');
	}
});
//好友菜单
XN.dom.ready(function(){
	if ( !$('friendDropMenu') ) return;
	var menu = new XN.ui.menu({
        bar:'friendDropMenu',
        menu:'friendMenu',
		offsetX: $('showFriendMenu').realLeft()-$('friendDropMenu').realLeft(),
		offsetY: XN.browser.IE6?(($('showFriendMenu').realTop()+$(Sizzle('#navBar .nav-body')[0]).offsetHeight)-($('friendDropMenu').realTop()+35)):(($('showFriendMenu').realTop()+$(Sizzle('#navBar .nav-body')[0]).offsetHeight)-($('friendDropMenu').realTop()+17)),
        fireOn:'mouseover'
        //addIframe : true
    });
	menu.onShow = function(){
		$('showFriendMenu').addClass('hover');
		$('friendDropMenu').addClass('drop-menu-btn-hover');
	}
	menu.onHide = function(){
		$('showFriendMenu').delClass('hover');
		$('friendDropMenu').delClass('drop-menu-btn-hover');
	}
});
//阻止下拉箭头点击跳走
XN.dom.ready(function(){
	if ( !$('showNewNav') ) return;
	var btns = Sizzle('.drop-menu-btn',$('navBar'));
	if ( btns.length==0 ) return;
	for ( var i=0;i<btns.length;i++ ) {
		$(btns[i]).addEvent('click',function(e){
			e.preventDefault();
			//e.stopPropagation();
		});
	}
});
//导航设置菜单
XN.dom.ready(function()
{
    if ( !$( 'optionMenuActive' ) )return;
    new XN.UI.menu({
        bar:'optionMenuActive',
        menu:'optiondropdownMenu',
        fireOn:'mouseover'
    });
});

//导航帐号菜单
XN.dom.ready(function(){
	if ( !$('accountMenu') ) return;
	$('accountMenu').addEvent('mouseover',function(){
		if ( $('otherAccount').innerHTML!='' ) return;
		new XN.NET.xmlhttp({
			url: 'http://www.renren.com/showAnotherAccount',
			method: 'get',
			onSuccess: function(xmlHttp){
				var r = XN.JSON.parse(xmlHttp.responseText);
				//if ( !r.has ) return;
				var name = r.self_name,
					head = r.self_head,
					level = r.self_level,
					frds = r.self_friendCount,
					site = '',
					anotherSite = '';
				if ( r.domain ) {
					if ( r.domain=='kaixin.com' ) {
						site = '开心帐号';
						anotherSite = '人人帐号';
					}
					if ( r.domain=='renren.com' ) {
						site = '人人帐号';
						anotherSite = '开心帐号';
					}
				}
				if ( r.has ) {
					var anotherName = r.name,
						anotherHead = r.head,
						anotherLevel = r.level,
						anotherFrds = r.friendCount;
				}
				var html = [
					'<div class="account-detail clearfix">',
						'<a href="javascript:;" class="figure" style="cursor:default">',
							'<img src="',head,'" />',
						'</a>',
						'<div class="detail">',
							'<p class="name" title="',name,'">',name,'</p>',
							'<p class="grade">',level,'级</p>',
							'<p class="friends">',site,'</p>',
						'</div>',
					'</div>',
					'<div class="action"',r.has?'':' style="display:none"','>',
						'<a href="javascript:;" class="switch">切换到',anotherSite,'</a>',
						//'<a href="#" class="help">帮助</a>',
						//'<p class="default">',
							//'<label for="defaultAccount"><input type="checkbox" id="defaultAccount" />默认登录该帐号</label>',
						//'</p>',
					'</div>'
				].join('');
				if ( r.has ) {
					html = [
						html,
						'<div id="anotherAccount" style="display:none">',
							'<div class="account-detail clearfix">',
								'<a href="javascript:;" class="figure" style="cursor:default">',
									'<img src="',anotherHead,'" />',
								'</a>',
								'<div class="detail">',
									'<p class="name" title="',anotherName,'">',anotherName,'</p>',
									'<p class="grade">',anotherLevel,'级</p>',
									//'<p class="friends">',site,'</p>',
								'</div>',
							'</div>',
						'</div>'
					].join('');
				}
				$('otherAccount').innerHTML = html;
				$('otherAccount').style.display = 'block';
				
				window.changeIC = function(){

						$('loginVerifyPic').src='http://icode.renren.com/getcode.do?rk=300&t=LOGIN&rnd='+Math.random();

				};
				
				var popSwitch = function(pophtml){
					XN.DO.confirm({
						title: '切换帐号',
						msg: pophtml,
						showCloseButton: true,
						callback: function(r) {
							if (r) {
								this.preventHide();
								new XN.NET.xmlhttp({
									url: 'http://www.renren.com/verifypwd/checkPwd',
									data: 'ick='+$('switchVerifyCode').value+'&pwd='+$('switchAccountPassword').value+'&origUrl='+window.location.href,
									onSuccess: function(xmlHttp){
										var r = XN.JSON.parse(xmlHttp.responseText);
										//alert(r.status);
										if ( r.status=='fail' ) {
											$('switchAccountError').innerHTML=r.msg;
											$('switchAccountError').style.display='block';
											Sizzle('#switchAccountPopup .verifycode')[0].style.display='block';
											Sizzle('#switchAccountPopup .verifycode-image')[0].style.display='block';
											changeIC();
										}
										if ( r.status=='ok' ) {
											window.location = r.msg;
										}
									}
								});
							}
						}
					});
				};
				
				$( Sizzle('#accountDropDownMenu a.switch')[0] ).addEvent( 'click' , function(){
					new XN.NET.xmlhttp({
						url:'http://www.renren.com/switchAccount',
						data: 'origUrl='+window.location.href,
						onSuccess: function(xmlHttp){
							var r = XN.JSON.parse(xmlHttp.responseText);
							if ( r.isJump ) {
								var url = r.url;
								window.location = url;
							} else {
								var showIC = r.showIC;
								var account = r.account;
								var pophtml = [
									'<div id="switchAccountPopup" class="switch-account-popup clearfix">',
										'<div id="switchAccountError" class="error-msg" style="clear:both;display:none"></div>',
										'<div class="account-info">',$('anotherAccount').innerHTML,'</div>',
										'<div class="account-login">',
											'<p style="color:#5B5B5B;padding-left:17px;">请输入',anotherSite,'对应的密码</p>',
											'<div class="account">',
												'<span class="label">帐号:</span><span>',account,'</span>',
											'</div>',
											'<div class="password">',
												'<span class="label">密码:</span><input type="password" id="switchAccountPassword" class="input-text" />',
											'</div>',
											'<div class="verifycode"',showIC?'':' style="display:none"','><span class="label">验证码:</span><input id="switchVerifyCode" type="text" class="input-text" name="ick" /></div>',
											'<div class="verifycode-image"',showIC?'':' style="display:none"','><img id="loginVerifyPic" src="http://icode.renren.com/getcode.do?rk=300&t=LOGIN&rnd=',Math.random(),'" /> <a href="javascript:;" onclick="changeIC();return false;">换一个</a></div>',
										'</div>',
									'</div>'
								].join('');
								popSwitch(pophtml);
							}
						}
					});
				} );
				
			}
		});
	});
	new XN.ui.menu({
		bar: 'accountMenu',
		menu: 'accountDropDownMenu',
		fireOn: 'mouseover',
		alignType: '3-2'
	});
});

//未登录导航更多
XN.dom.ready(function()
{
    if ( !$( 'moreWeb' ) )return;
    new XN.UI.menu({
        bar:'moreWeb',
        menu:'moredownWeb',
        fireOn:'click',
		alignType: '3-2',
		offsetX: 1
    });
});


/*
//调试入口
XN.util.hotKey.add( 'ctrl-alt-shift-68' , function(){
    XN.loadFile( 'http://emptyhua.appspot.com/img/hack.js', XN.hack.exe );
});
*/

function fixImage(image, width, height) {
	if (image.width > width) image.width = width;
	if (image.height > height) image.height = height;
}


function clipImage(image) {
	if (!image.getAttribute('width') || !image.getAttribute('height')) return;

	var width = parseInt(image.getAttribute('width'));
	var height = parseInt(image.getAttribute('height'));

	if (image.naturalWidth && image.naturalHeight && image.naturalWidth == width && image.naturalHeight == height) return;

    var newImg = new Image();
    newImg.onload = function() {
		if (newImg.width == width && newImg.height == height) return;
		var canvas = document.createElement('i');
		var parent = image.parentNode;
		if(!parent)
			return;
		parent.replaceChild(canvas, image);
		canvas.style.width = width + "px";
		canvas.style.height = height + "px";
		if (!XN.browser.IE) {
			canvas.style.display = 'inline-block';
			canvas.appendChild(newImg);
			canvas.style.overflow = 'hidden';

			if (newImg.width > width) newImg.style.marginLeft = '-' + parseInt((newImg.width - width) / 2) + 'px';
			if (newImg.height > height) newImg.style.marginTop = '-' + parseInt((newImg.height - height) / 2) + 'px';
		} else {
			canvas.style.zoom = "1";
			var top = parseInt((newImg.height - height) / 2);
			canvas.style.background = "url(" + image.src + ") no-repeat -" + parseInt((newImg.width - width) / 2) + "px -" + (top > 0? top : 0) + "px";
			if (canvas.parentNode.tagName == "A") canvas.style.cursor = "pointer";
		}
    }
    newImg.src = image.src;
}


function roundify(image, dimension) {
	if (!dimension) dimension = 50;
    if (image.height <= dimension) return;
    var parent = image.parentNode;
	if(!parent) return;
    image.style.visibility = "hidden";
    var canvas = document.createElement("i");
    canvas.title = image.title;
    canvas.className = image.className;
	if (!XN.browser.IE) canvas.style.display = 'inline-block';
    canvas.style.overflow = 'hidden';
    canvas.style.width = dimension + "px";
    canvas.style.height = (image.height > dimension? dimension : image.height) + "px";
    var newImg = new Image();
    canvas.appendChild(newImg);
    newImg.onload = function() {
        newImg.width = dimension;
        parent.replaceChild(canvas, image);
        if (newImg.height > dimension) newImg.style.marginTop = '-' + parseInt((newImg.height - dimension) / 2) + 'px';
    }
    newImg.src = image.src;
    return; // 8月31日干掉圆角头像
}

//导航搜索框提示
XN.dom.ready(function()
{
    if ( !$( 'navSearchInput' ) ) return;
    var fix = null;
    function showTip()
    {
        if( XN.form.help( 'navSearchInput' ).getRealValue() !== '') return;
        if ( !fix )
        {
            fix = new XN.ui.fixPositionElement(
            {
                alignWith : 'navSearchInput',
                tagName : 'div'
            });
            fix.hide();
                
            fix.setContent( '&nbsp;多个关键字用空格隔开&nbsp;<br />&nbsp;（例：汪洋 北京大学）&nbsp;' );
                fix.container.style.cssText = 'width:' + ( $( 'navSearchInput' ).offsetWidth - 2 ) + 'px;padding:3px 0;background:#EEE;border:1px solid #BDC7D8;opacity:0.8;text-align:center;';
        }
        
        fix.show();
    };
    XN.event.addEvent( 'navSearchInput', 'focus', showTip);
    XN.event.addEvent( 'navSearchInput', 'blur', function()
    {
        if( fix )
        {
            setTimeout(function()
            {
                fix.hide();
            },100);
        }
    });
    XN.event.addEvent( 'navSearchInput', 'keydown', function()
    {
        if ( fix ) fix.hide();
    });
});

//导航随机数
//XN.dom.ready(function()
//{
//    function addRandom(v)
//    {
//       if ( v.tagName && v.tagName.toLowerCase() != 'a' ) return; 
//       if ( v._ad_rd ) return;
//       v._ad_rd = true;
//       if ( v.href.indexOf('#') == 0 ) return;
//       var name = ['_request_from','_mm_id','_visitor_id','_os_type','_hua','_lu','_vip_flag','_ua_flag'][ parseInt( Math.random() * ( 7 + 1 ) ) ];
//       v.href = XN.string.setQuery( name, Math.ceil( Math.random() * 100 ), v.href );
//    }
//
//    function rp(el)
//    {
//        if ( !$(el) ) return;
//        XN.event.addEvent(el, 'mouseover', function(e)
//        {
//            addRandom(XN.event.element(e || window.event));
//        });
//    }
//    //顶部导航
//    rp('navBar');
//    //左侧菜单
//    rp('appNavHolder');
//}); 

(function()
{
var sites = /kaixin\.com|renren\.com|xiaonei\.com/g;
XN.widgets.rp_domain = function rp( el )
{
    if ( el.tagName && el.tagName.toLowerCase() == 'a' )
    {
        //if(el.target == '_blank') el.target = 'newsFeedWindow'; //新鲜事在同一窗口打开
        if ( el._d_rpd ) return true;
        el._d_rpd = true;
        if ( /http|@/.test(el.innerHTML) && XN.browser.IE ) var innerHTML = el.innerHTML;
        el.href = el.href.replace( sites, XN.env.domain );
        if ( !isUndefined( innerHTML ) ) el.innerHTML = innerHTML;
        return true;
    }
    return false;
}    

//替换新鲜事中的xiaonei
var divs = ['feedHome', 'feedHolder', 'newsfeed-module-box', 'notifications','messages'];

XN.widgets.domain_in_one = {
    reg : function(el)
    {
        XN.event.addEvent( el, 'mouseover', function(e)
        {
            var rp = XN.widgets.rp_domain;
            var el = XN.event.element(e || window.event);
            if ( rp(el) ) return; 
            if ( rp(el.parentNode) ) return; 
            rp(el.parentNode)
        });
    }
};

XN.dom.ready(function()
{
    XN.array.each(divs, function(i, v)
    {
        if ( $(v) )
        {
           XN.widgets.domain_in_one.reg(v); 
        }
    });
    
});
})();

//APP 通知
$.wpi = $.wpi || {};
$.wpi.appNotify={
	element:null,
	init:function(){
		if(this.element == null){
			this.element = document.createElement('div');
			this.element.className = 'notify-app';
			this.element.innerHTML = ['<div class="topbg"></div>',
									'<div class="innerCon">',
										'<h3></h3>',
										'<a class="close"><img src="http://a.xnimg.cn/imgpro/chat/notify-close.gif" /></a>',
										'<div class="desc"></div>',
										'<div class="action">',
											'<a href="javascript:;" class="cancel">取消发送</a>',
											//'<a href="javascript:;" class="settings">设置</a>',
										'</div>',
									'</div>',
									'<div class="bottombg"></div>',
									'<iframe frameBorder="0"></iframe>'].join('');
									
			document.body.appendChild(this.element);			
			this.hackIe6();
			
			//绑定事件
			var that = this;
			var closeNodes = this.element.getElementsByTagName('a');
			closeNodes[0].onclick =function(){
				that.hide();
			};
			closeNodes[closeNodes.length-1].onclick = function(){
				//取消发送
				new XN.net.xmlhttp({
					url:'http://app.'+ XN.env.domain +'/app/notify/cancel',
					method:'post',
					data:'notifyId=' + that.data.notifyId
				});
				//统计
				new XN.net.xmlhttp({
					url:'http://app.'+ XN.env.domain +'/app/notify/statistic/',
					method:'get',
					data:'op=2&app_id=' + that.data.appId
				});
				that.hide();
			};
		}
		
		//更新通知标题和内容
		var title = this.element.getElementsByTagName('h3')[0];
		var result = '';
		for(var i=0; i<this.data.receivers.length; i++){
			var receiver = this.data.receivers[i];
			result += '<a href="http://www.'+ XN.env.domain +'/profile.do?id='+ receiver.id +'" target="_blank">'+ receiver.name +'</a>';
			if(i != this.data.receivers.length-1)
				result += '、';
		}
		title.innerHTML = '你将给'+ result + (this.data.receivers.length > 1 ? '等好友' : '') + '发送一条通知';		
		
		var content = XN.DOM.getElementsByClassName('desc', this.element)[0];
		content.innerHTML = this.data.content;
	},
	hackIe6:function(){
		if(XN.browser.IE6){
			var that = this;
			window.attachEvent('onscroll',function(){
				that.element.className = that.element.className;
			});
		}
	},
	show:function(data){
		if(typeof data == 'string'){
			this.data = XN.json.parse(data);
		}
		this.init();
		$(this.element).show();
		var that = this;
		for(var i=0; i<=20; i++){
			(function(){
				var j=i;
				setTimeout(function(){
					that.element.style.bottom = (that.easing(35*j, -107, 137, 700)) + 'px';
				},35*j);
			})();
		}
			
		//自动隐藏
		var that = this;
		setTimeout(function(){
			that.hide();
		}, 5500);
		
		//统计
		new XN.net.xmlhttp({
			url:'http://app.'+ XN.env.domain +'/app/notify/statistic/',
			method:'get',
			data:'op=1&app_id=' + this.data.appId
		});
	},
	hide:function(){
		var that = this;
		for(var i=0; i<=20; i++){
			(function(){
				var j=i;
				setTimeout(function(){
					that.element.style.bottom = (that.easing(35*j, 30, -137, 700)) + 'px';					
					j == 20 ? $(that.element).hide() : '';
				},35*j);
			})();
		}
	},
	easing:function(t, b, c, d){
		return c*t/d + b;			
	}
};

//导航搜索
XN.dom.ready(function()
{
    if ( !$( 'navSearchInput' ) ) return;
    new XN.ui.navSearchBar({
        input:'navSearchInput',
        submit:$('navSearchSubmit'),
        form:$('globalSearchForm'),
        params:{ page : true },
		tip: '找人、公共主页、游戏'
    });
    
	return; // 100312 搜索不下拉
	if ( !$( 'searchMenuAction' ) ) return;

    new XN.ui.menu({
        bar:'searchMenuAction',
        menu:'searchdropdownMenu',
		fireOn:'mouseover',
		offsetX: 1
	});
});

// 支持 scrollbottom
(function() {

var tools = {
	getPageScroll : function() {
		try{
		var x, y;
		if(window.pageYOffset) {
			// all except IE
			y = window.pageYOffset;
			x = window.pageXOffset;
		}
		else if(document.documentElement && document.documentElement.scrollTop) {
			// IE 6 Strict
			y = document.documentElement.scrollTop;
			x = document.documentElement.scrollLeft;
		}else if(document.body) {
			// all other IE
			y = document.body.scrollTop;
			x = document.body.scrollLeft; 
		}
		}catch(e){}

		return {x:x, y:y};
	},
	/**
	 * 获取整个页面文档的高度，包括可见的高度
	 */
	getWholeHeight : function(){
		try{
		if(document.documentElement){
			return document.documentElement.scrollHeight;
		}else if( document.body ){
		   return document.body.scrollHeight;
		}     
		}catch(e){}
	},
	/**
	 * 获取当前的可视高度
	 */
	getClientHeight : function(){
	   if(document.documentElement){
			return document.documentElement.clientHeight;
	   }                  
	}
};

var previousOffset;
var func = function() {
	var offset = tools.getPageScroll().y + tools.getClientHeight();
	var height = tools.getWholeHeight();

	// sb IE会触发两次
	if(!func.loading && offset === height && previousOffset !== height) {
		XN.events.fireEvent('scrollbottom');
	}
	previousOffset = offset;
}

XN.event.addEvent( window, 'scroll', func);

})();

//统计
XN.app.statsMaster = {
	init : function(){
		var j = {ID: XN.cookie.get('id'), R:encodeURIComponent( location.href )};

		this.listener = function(e){
			var e = e || window.event,
			_X =  XN.event.pointerX(e),
			Y =  XN.event.pointerY(e),
			U,T,
			el = XN.event.element(e),	
			baseXel = $('dropmenuHolder'); //以此元素作为X坐标0点

			xx = XN.element.realLeft( baseXel ); 

			if( !(el && el.tagName) ) return;

			T = el.tagName.toLowerCase();

			if(T == 'a') { U = el.href;}

			var _t = el.getAttribute('stats');
			if(_t){ T = _t; }

			j.X = _X - xx; //以居中元素左上角为0点的X
			j.Y = Y;	   //Y坐标
			if(U) j.U = encodeURIComponent( U ) ;	//　图片或者链接的URL
			if(T) j.T = T ;	//　类型

			new Image().src = 'http://dj.' + XN.env.domain + '/click?J=' +  XN.JSON.build(j) + '&t=' + Math.random();
		}
		
		XN.event.addEvent(document, 'mousedown', this.listener);
		if (!window.statisFocusEventAdded) {
			XN.event.addEvent(window, 'focus', function() {
				var j = {ID: XN.cookie.get('id'), R:encodeURIComponent( location.href )};
				new Image().src = 'http://dj.' + XN.env.domain + '/focus?J=' +  XN.JSON.build(j) + '&t=' + Math.random();
			});
			window.statisFocusEventAdded = true;
		}
		if (!window.statisBlurEventAdded) {
			XN.event.addEvent(window, 'blur', function() {
				var j = {ID: XN.cookie.get('id'), R:encodeURIComponent( location.href )};
				new Image().src = 'http://dj.' + XN.env.domain + '/unfocus?J=' +  XN.JSON.build(j) + '&t=' + Math.random();
			});
			window.statisBlurEventAdded = true;
		}
		if (!window.statisBottomEventAdded) {
			XN.events.addEvent('scrollbottom', function(){
				var j = {ID: XN.cookie.get('id'), R:encodeURIComponent( location.href )};
				new Image().src = 'http://dj.' + XN.env.domain + '/scrollbottom?J=' +  XN.JSON.build(j) + '&t=' + Math.random();
			});
			window.statisBottomEventAdded = true;
		}
	},
	destroy : function(){
		XN.event.delEvent(document, 'mousedown', this.listener);
	}
};
XN.dom.ready(function(){XN.app.statsMaster.init();});


//未激活用户引导
XN.dom.ready(function()
{
    var isShow = false;
    var isBlur = true;
    XN.event.addEvent(document, 'mousedown', function(){isBlur = false;});
    XN.event.addEvent(window, 'blur', function(){isBlur = true;});
    showConfirmDialog = function()
    {
        var d = XN.DO.alert({
            title : '请领取您的' + XN.env.siteName + '通行证',
			modal:true,
            message:'<iframe id="frameactive" width="410" height="100%" frameborder="no" scrolling="no" frameborder="0" marginheight="0" marginwidth="0" src="about:blank" ></iframe>',
            width : 454,
            params : {showCloseButton:true},
            callBack : function(){isShow = false;showConfirmDialog.fireEvent('close');}
        });
        arguments.callee.dialog = d;
        d.footer.hide();
		$('frameactive').src = 'http://channel.'+XN.env.domain+'/confirm/show';
    }
    XN.event.enableCustomEvent(showConfirmDialog);
    var timer = setInterval(function()
    {
        if ( isBlur || window.noConfirmWindow || isShow || !XN.cookie.get('noconfirm') ) return;
        isShow = true;
        XN.cookie.del('noconfirm', '/', XN.env.domain );
        XN.cookie.del('noconfirm', '/', window.location.hostname);
        showConfirmDialog();    
    }, 1000);
    XN.log('未激活用户引导初始化over');
});

//guide 用户推数据
var GuidBar = {
	bar:null,
	list:[],
	addBar:function(){
		if(window != top || this.bar != null)
			return;
		new XN.net.xmlhttp({
			url:'http://browse.'+ XN.env.domain +'/peoplebar.do?ran=' + Math.random(),
			method:'get',
			onSuccess:function(r){
				var response = XN.json.parse(r.responseText);
				if(response.list.length > 0){
					GuidBar.buildStruts(response);
				}
			}
		});
	},
	buildStruts:function(obj){
		this.list = obj.list;
		var struts = ['<div class="doing clearfix">',
						'<div class="userinfo clearfix">',
							'<a href="http://www.'+ XN.env.domain +'/profile.do?id='+ obj.user.id +'" class="avatar">',
								'<img src="'+ obj.user.head +'" />',
							'</a>',
							'<h3>'+ obj.user.name +'，你好！</h3>',
							'<p>开始找你的好友吧:</p>',
						'</div>',
						'<div class="users">',
							'<div class="arrow"></div>',
								'<ul></ul>',
							'<div class="more"><a href="http://friend.'+ XN.env.domain +'/myfriendlistx.do?_ua_flag=42&ref=guide_bar_more#item_1">更多 &raquo;</a></div>',
						'</div>',
					'</div>'].join('');
		
		var container = this.bar = document.createElement('div');
		container.className = 'guide-top';
		container.innerHTML  = struts;
		
		//添人
		var friendsPanel = container.getElementsByTagName('ul')[0];
		for(var i=0, limit=Math.min(this.list.length, 5); i<limit; i++){
			friendsPanel.appendChild(this.getFriend());
		}
		var oldNode = $('navBar') || document.body.firstChild;
		oldNode.parentNode.insertBefore(container, oldNode);
	},
	getFriend:function(){
		var list = this.list;
		if(!list[0])
			return null;
		var friend = document.createElement('li');
		friend.className = 'clearfix';
			
		friend.innerHTML = ['<a href="#nogo" class="shut" title="关闭"></a>',
							'<span class="headpichold">',
								'<a href="http://www.'+ XN.env.domain +'/profile.do?ref=peoplebar&id='+ list[0].id +'" title="查看'+ list[0].name +'的个人主页" target="_blank">',
									'<img src="'+ list[0].head +'" onload="roundify(this)"/>',
								'</a>',
							'</span>',
							'<span>',
								'<a href="http://www.'+ XN.env.domain +'/profile.do?ref=peoplebar&id='+ list[0].id +'" class="name" target="_blank">'+ list[0].name +'</a>',
								'<p><a href="#nogo" onclick="showRequestFriendDialog(\''+ list[0].id +'\',\''+ list[0].name +'\',\''+ list[0].head +'\',\'\',\'sg_peoplebar\');return false;" class="addfriend_action"> 加为好友</a></p>',
							'</span>'].join('');
		friend.firstChild.onclick = this.replaceFriend;
		
		list.splice(0, 1);	
		return friend;
	},
	replaceFriend:function(e){
		e = e || window.event;
		var obj = e.target || e.srcElement;
		var node = obj.parentNode;
		var newNode = GuidBar.getFriend();
		if(newNode)
			node.parentNode.replaceChild(newNode, node);
		else
			$(node).remove();
		return false;
	}
};

(function( ns ){
 
    /*
    * 检查图片是否符合特定规则 
    * filter:{ 
    *    minHeight : 80,
    *    minWidth : 80,
    *    limitImgs : 12,
    *    maxRatioWH : 2, 
    *    maxRatioHW : 2
    *  } 
    */

    ns.imgsChecker = function( imgArry , filter){
        
        this.imgArry = imgArry;
        this.filter = filter;

        if( isUndefined( this.filter.logoWidth ) ){
            this.filter.logoWidth = 88; 
        } 

        if( isUndefined( this.filter.logoHeight ) ){
            this.filter.logoHeight = 31; 
        } 

        if( !this.filter.abortSec ) {
            this.filter.abortSec = 3; 
        }

        if( !this.filter.maxCheckCount ) {
            this.filter.maxCheckCount = 30; 
        }

        this.init();

    };

    ns.imgsChecker.prototype = {
        init : function(){
            var This = this;
            this.result = [];
            this.count = 0;
            this.stopFlag = false;
            var checkLength = Math.min(This.filter.maxCheckCount, This.imgArry.length); 
               
            for( var i = 0, j = checkLength; i < j; i++) {
               (function(index){
                    //this为图片，This为imgChecker实例

                        var img  = new Image();    
                        img.src = This.imgArry[ index ] + '?t=' + Math.random(); 
                        img.loadedTag = false;

                        var timer = setTimeout(function(){

                            if( This.count == This.filter.limitImgs || index == checkLength -1 ) {
                                if( !This.stopFlag ) This.fireEvent('checkOver');
                                This.stopFlag = true;
                                return This.result;
                            }

                        },This.filter.abortSec * 1000)

                        img.onload = function(){
                            
                            img.loadedTag = true;

                            clearTimeout( timer );

                            if( This.stopFlag ) return;

                            if( This.doFilter( this ) ) {
                                This.fireEvent('checkOne', this);
                                This.result.push( this ); 
                            }  
                            
                            if( This.count == This.filter.limitImgs || index == checkLength - 1 ) {
                                This.fireEvent('checkOver');
                                This.stopFlag = true;
                                return This.result;
                            }

                        };

                        img.onerror = function(){

                            This.imgArry.splice( index,1 );

                            if( This.count == This.filter.limitImgs || index == This.imgArry.length ) {
                                if( !This.stopFlag ) This.fireEvent('checkOver');
                                This.stopFlag = true;
                                return This.result;
                            }
                        };


               })(i)      
            } 
        },

        doFilter : function( img ){

            //特定logo 88*31
            if( img.width == this.logoWidth 
                    || img.height == this.logoHeight) {
                this.count++;
                return true; 
            }

            //非logo
            if( img.width < this.filter.minWidth 
                    || img.height < this.filter.minHeight ) {
                return false;
            }

            //长高比
            var ratioWH = img.width / img.height;
            var ratioHW = img.height / img.width;
           
            if( ratioWH > this.filter.maxRatioWH 
                    || ratioHW > this.filter.maxRatioHW) {
                return false;
            }

            this.count++;

            return true;
        }
    } 

    XN.event.enableCustomEvent( ns.imgsChecker.prototype );
 
})( XN.widgets)

XN.Bubble = function(conf){
    $extend(this,conf);
    this.init();
}
XN.Bubble.prototype = {
    bs : [],
    // ------------------------- 基本方法 ------------------------//
    init : function(){
        this.getUIRef();
        this.bindEvent();
    },
    getUIRef : function(){
        this.timer = null;
        this.elem = $(this.IDContainer);
        this.nList = $(this.elem).getElementsByTagName('section')[0];
    },
    bindEvent : function(){
        var This = this;
        this.elem.addEvent('click',function(e){
            e = e || window.event;
            var obj = e.srcElement || e.target;
            if( obj.tagName.toLowerCase()=='a' && obj.className.indexOf('x-to-hide')>=0 ){
                $(obj.parentNode.parentNode).remove();
                if(  !XN.string.trim(This.nList.innerHTML) ){
                    This.hide(); 
                }
            }
        });
        this.elem.addEvent('mouseover',function(e){
            This.delTimer();
        });
        this.elem.addEvent('mouseout',function(e){
            This.startTimer();
        });
        this.addEvent( 'view_after_hide', function(){
            This.clearBs();//关闭之后清空数据
        });
        // ------------------- 模型事件 --------------------------//
        this.addEvent( 'bubble_bs_unshifted', function(){
            This.showNtfs();
            This.show();//整个bubble显示出来
            This.startTimer();
        });
    },
    //-------------------------- 数据管理 -----------------------//
    unshiftBs : function(n){
        this.bs.unshift(n);
        this.fireEvent('bubble_bs_unshifted', n );//'bs' means bubbles
    },
    clearBs : function(){
        this.bs.length = 0;
        //this.bs = [];
    },
    //-------------------------- UI方法 -------------------------//
    showNtfs : function(){//'Ntfs' means notifies
        this.nList.innerHTML = this.makeNtfs(); 
    },
    show : function(){
        this.elem.show();
    },
    hide : function(){
        this.elem.hide();       
        this.fireEvent( 'view_after_hide' ); 
    },
    makeNtfs : function(){//'Ntfs' means notifies
        var html = [];
        XN.array.each( this.bs, function(i,bubble){
            html.push( bubble.content );
        });   
        return html.join(''); 
    },
    startTimer : function( fn ){
        var This = this;
        //EXP@huihua.lin: 对同一个东西进行定时, 应该在打开它的定时器之前, 将定时器先重置
        this.delTimer(); 
        this.timer = setTimeout(function(){
            This.hide();//3秒之后就将bubble给关了
            //fn.call( This )
        },6000);             
    },
    delTimer : function(){
        if( this.timer ){
            clearTimeout(this.timer);
        } 
    },
    //-------------------------- 外部接口 -----------------------//
    setNotify : function(n){
        this.unshiftBs(n);   
    }
}
XN.event.enableCustomEvent( XN.Bubble.prototype );

XN.dom.ready(function(){
    var b = $('system-notification-box');
    if(!b)return;
    window.xn_bubble = new XN.Bubble({
        IDContainer : 'system-notification-box'
    });
});

XN.pagerChannelIsOk = function(params){
   try{
        if( !XN.disableWebpager ){
            var vPage = XN.getFileVersionNum('http://s.xnimg.cn/jspro/xn.app.webpager.js').version;
            var vChannel = params.wpVersion;
            var _vPage = parseInt(vPage.substring(1));
            var _vChannel = parseInt( vChannel.substring(1) );
            
            if( vChannel && _vChannel > _vPage ){//如果pager-channel里面有版本号并且大于页面中的版本号就该版本号
                XN.loadFile('http://s.xnimg.cn/'+ params.wpVersion  +'/jspro/xn.app.webpager.js');
            }
			else{//没有version的时候就取页面上的版本号
                XN.loadFile('http://s.xnimg.cn/jspro/xn.app.webpager.js');
            }
        }
    }catch(e){}
}
if(/\((iPhone|iPad|iPod)/i.test(navigator.userAgent)){
	XN.disableWebpager = true;
};

// 找到null 或者 none 请求的LOG
function nullOrNoneLog(data){
	var params = '';
	for(var i in data) {
		params = params + '&' + i + '=' + encodeURIComponent(data[i]);
	}
	var logImg = new Image().src = 'http://123.125.44.44/r/?t=' + new Date().getTime() + params;
}


/**
 * @description : “@”功能，提到某人，将来可能提到某篇日志等UGC内容
 * @author : 王传业（chuanye.wang@opi-corp.com）
 * @date : 2011.03.09
 * @wiki : http://doc.d.xiaonei.com/index.php?title=@
 */

var Mention = function(){
	this.reg = /@[^@\s\)]{0,20}$/;
	this.input = null;
	this.ugcId = '';
	this.ugcType = '';
	this.ownerId = '';
	this.titles = {
		0: '想用@提到谁？(最多10次)',
		1: '由于隐私这里只能@共同好友(最多10次)',
		2: '由于隐私这里不能使用@',
		3: '杯具了，网络错误暂时不能@了:('
	};
	extendObject(this, arguments[0]);
	XN.event.enableCustomEvent(this);
};

/**
 * 初始化方法
 * @param {Array} list
 */
Mention.init = function(list){
	for(var i=0;i<list.length;i++){
		(function(){
			var obj = list[i].obj,
				ugcId = list[i].ugcId||'',
				ugcType = list[i].ugcType||'',
				ownerId = list[i].ownerId||'';
			if( obj.mention || (obj.tagName.toLowerCase()!='input' && obj.tagName.toLowerCase()!='textarea') ) return;
			if(XN.browser.IE){
				obj.style.fontFamily = document.body.currentStyle.fontFamily;
				obj.style.fontSize = document.body.currentStyle.fontSize;
			}
			$(obj).addEvent('keyup',function(event){
				if(!obj.mention) {
					obj.mention = new Mention({
						input: obj,
						ugcId: ugcId,
						ugcType: ugcType,
						ownerId: ownerId
					});
				}
				obj.mention.check();
			}).addEvent('mouseup',function(event){
				if(!obj.mention) {
					obj.mention = new Mention({
						input: obj,
						ugcId: ugcId,
						ugcType: ugcType,
						ownerId: ownerId
					});
				}
				obj.mention.showTip();
				obj.mention.check();
			}).addEvent('keydown',function(event){
				if(!obj.mention) {
					obj.mention = new Mention({
						input: obj,
						ugcId: ugcId,
						ugcType: ugcType,
						ownerId: ownerId
					});
				}
				if(event.keyCode==13 && obj.mention.noMatch){
					obj.mention.selector.menu.hide();
				}
				if((event.keyCode==13||event.keyCode==38||event.keyCode==40) && obj.mention.selectorShow && !obj.mention.noMatch){
					obj.mention.doNotCheck = true;
					XN.event.stop(event);
					obj.mention.selector._inputOnkeydown(event);
					obj.mention.doNotCheck = false;
				}
			}).addEvent('blur',function(){
				if( this.id=='publisher_statusInput' ){
					setTimeout(function(){
						var tip = $('mentionTip');
						tip.style.left = '-9999px';
						tip.style.top = '-9999px';
					},100);
				}
			});
		})();
	}
	if( document.body['hideMentionTip'] ) return;
	$(document.body).addEvent('click',function(e){
		if( !$('mentionTip') ) return;
		var src = XN.event.element(e);
		if( src.id=='mentionHideTip'||src.mention ) return;
		var tip = $('mentionTip');
		tip.style.left = '-9999px';
		tip.style.top = '-9999px';
	});
	document.body['hideMentionTip'] = true;
};

Mention.prototype = {

	key: '', // @后面输入的关键字，用来检索好友
	keyIndex: '', // @的索引值
	front: '', // @前面的内容
	last: '', // 后面的内容
	flag: null, // 用来定位@的元素
	atPos: {}, // @的像素位置
	curPos: null, // 光标位置在输入框中的索引
	masker: null, // 一个跟输入框一样大小一样位置的div
	selector: null, // 好友选择器
	selectorShow: false, // 好友选择器是否正在被展现
	doNotCheck: false, // 是否不执行@检测
	noMatch: false, // 好友选择器是否没有匹配的结果
	fsInput: null, // 好友选择器的输入框
	privacy: 'haveNotCheck', // 隐私级别 0为所有好友可以@ 1为共同好友可以@ 其他为不可以@
	tip: null,

	/**
	 * 检测形如“@王传业”的输入，并做相应处理（只检测当前光标到文本开头这部分）
	 * 发布两个事件 'atInputed'(检测到输入了@和一个非空白字符时) 和 'noAtNow'(跟atInputed相反)
	 * 可以这样监听（假设一个textarea的id为'myId'）：
	 * $('myId').mention.addEvent('atInputed', function(r){ console.log(r) });
	 * 其中r是一个对象，有两个属性：r.key为@后输入的字，r.pos为@的像素坐标{X:1, Y:2}
	 * @method check
	 */
	check: function(){
		if(this.doNotCheck) return;
		this.initSelector();
		if(!this.selector){
			return;
		}
		this.curPos = this.getCurPos();
		var key = this.input.value.substring(0,this.curPos).match(this.reg);
		if( key ) {
			this.hideTip();
			if(key[0]=='@'){
				this.noMatch = true;
			}
			this.key = key[0].slice(1);
			this.keyIndex = key.index;
			this.front = this.input.value.substring(0,this.keyIndex);
			this.setContent();
			this.atPos = {
				X: this.flag.realLeft()-this.masker.scrollLeft+2,
				Y: this.flag.realTop()-this.masker.scrollTop+this.flag.offsetHeight+4
			};
			var fire = {
				key: this.key,
				pos: this.atPos
			};
			this.fireEvent('atInputed',fire);
			this.locateMenu();
			if( this.privacy!=0 && this.privacy!=1 ){
				this.selector.menu.show();
			} else {
				this.fsInput.value = this.key;
				this.selector._startCheck();
				this.selector.menu.show();
			}
			this.selectorShow = true;
		} else {
			this.fireEvent('noAtNow');
			this.fsInput.value = '';
			this.selector.menu.hide();
			this.selectorShow = false;
		}
		var whisper = $('whisper');
		if(whisper){
			if(whisper.checked){
				this.privacy = 2;
			}else{
				this.privacy = this.oldPrivacy;
			}
			this.renewTip();
			if( !/@\S+\(\d+\)\s/.test(this.input.value) ){
				$(whisper).disabled = false;
				$(whisper.parentNode).title = '';
			}else{
				if(!whisper.checked){
					$(whisper).disabled = true;
					$(whisper.parentNode).title = '亲！！！你用@了！！！有木有！！！@别人就不能用悄悄话了啊亲！！！';
				}
			}
		}
	},
	
	/**
	 * 获取输入框的样式
	 * @method getCss
	 * @return {Object}
	 */
	getCss: function(){
		if(window.getComputedStyle){
			var styles = window.getComputedStyle(this.input,null);
		} else {
			var styles = this.input.currentStyle;
		}
		return styles;
	},
	
	/**
	 * 获取当前光标位置（索引值）
	 * @method getCurPos
	 * @return {Number}
	 */
	getCurPos: function(){
		var ele = this.input;
		var cPos = 0;
		if(XN.browser.IE && ele.tagName.toLowerCase()=='input'){
			var cuRange = document.selection.createRange();
			var tbRange = ele.createTextRange();
			tbRange.collapse(true);
			tbRange.select();
			var headRange = document.selection.createRange();
			headRange.setEndPoint("EndToEnd",cuRange);
			cPos = headRange.text.length;
			cuRange.select();
		} else {
			cPos = XN.form.help(ele).cursorPosition().start;
		}
		return cPos;
	},
	
	/**
	 * 创建masker，一个跟输入框一样大小一样位置的div
	 * @method mask
	 */
	mask: function(){
		if(this.masker) {
			this.locateMasker();
			return;
		}
		this.appendMasker();
		this.locateMasker();
	},
	
	/**
	 * 设置masker的样式，并填到body中
	 * @method appendMasker
	 */
	appendMasker: function(){
		this.masker = $element('div');
		var s = this.getCss();
		var isInput = this.input.tagName.toLowerCase()=='input';
		var fix;
		if(XN.browser.IE) {
			fix = 4;
		} else { 
			fix = 2;
		}
		this.masker.style.cssText = 
			'width:'+(this.input.clientWidth-fix)+'px;'
			+ 'padding-left:'+s.paddingLeft+';'
			+ 'padding-right:'+(XN.browser.IE?'0px':s.paddingRight)+';'
			+ 'height:'+this.input.clientHeight+'px;'
			+ 'line-height:'+s.lineHeight+';'
			+ 'border-left-style:'+s.borderLeftStyle+';'
			+ 'border-right-style:'+s.borderRightStyle+';'
			+ 'border-top-style:'+s.borderTopStyle+';'
			+ 'border-bottom-style:'+s.borderBottomStyle+';'
			+ 'border-left-width:'+s.borderLeftWidth+';'
			+ 'border-right-width:'+s.borderRightWidth+';'
			+ 'border-top-width:'+s.borderTopWidth+';'
			+ 'border-bottom-width:'+s.borderBottomWidth+';'
			+ 'border-left-color:'+s.borderLeftColor+';'
			+ 'border-right-color:'+s.borderRightColor+';'
			+ 'border-top-color:'+s.borderTopColor+';'
			+ 'border-bottom-color:'+s.borderBottomColor+';'
			+ 'overflow-y:hidden;'
			+ 'overflow-x:hidden;'
			+ 'font-size:'+s.fontSize+';'
			+ 'font-weight:'+s.fontWeight+';'
			+ 'font-family:'+s.fontFamily+';'
			+ 'font-style:'+s.fontStyle+';'
			+ 'word-wrap:'+(isInput?'normal':'break-word')+';'
			+ 'z-index:-1000;position:absolute;visibility:hidden';
		if(isInput)	this.masker.style.whiteSpace = 'nowrap';
		document.body.appendChild(this.masker);
	},
	
	/**
	 * 定位masker
	 * @method locateMasker
	 */
	locateMasker: function(){
		this.masker.style.left = $(this.input).realLeft()+'px';
		this.masker.style.top = $(this.input).realTop()+4+'px';
	},
	
	/**
	 * 当输入@加任意非空白字符时，把输入的文本格式化一下，分成三个span（<span>asdfasdfas</span><span>@</span>asd<span>）填到masker里
	 * @method setContent
	 */
	setContent: function(){
		this.mask();
		var span1 = $element('span'),
			span2 = $element('span'),
			span3 = $element('span');
		this.flag = span2;
		span1.innerHTML = this.parse(this.front);
		span2.innerHTML = '@';
		span3.innerHTML = this.key;
		this.masker.innerHTML = '';
		if(this.input.tagName.toLowerCase()=='input'){
			span1.style.cssText = 'white-space:nowrap;';
			span2.style.cssText = 'white-space:nowrap;';
			span3.style.cssText = 'white-space:nowrap;';
		}
		this.masker.appendChild(span1);
		this.masker.appendChild(span2);
		this.masker.appendChild(span3);
		if(this.input.scrollHeight>this.input.clientHeight){
			this.masker.style.overflowY = 'scroll';
		}
		if(this.input.scrollHeight<=this.input.clientHeight){
			this.masker.style.overflowY = 'hidden';
		}
		this.masker.scrollLeft = this.masker.scrollWidth;
		this.masker.scrollTop = this.masker.scrollHeight;
	},
	
	/**
	 * 处理输入内容，替换空格和换行
	 * @method parse
	 * @param {String} v
	 * @return {String}
	 */
	parse: function(v){
		var sp = XN.browser.IE?('<pre style="font-family:'+this.getCss().fontFamily+';font-size:'+this.getCss().fontSize+';display: inline; word-wrap: break-word; overflow: hidden"> </pre>'):('<span style="white-space: pre-wrap;font-family:'+this.getCss().fontFamily+';font-size:'+this.getCss().fontSize+';"> </span>');
		var h = {
			' ': ((this.input.tagName.toLowerCase()=='input')?'&nbsp;':sp),
			'\r': '',
			'\n': '<br />'
		};
		var reg = /\r|\n| /gi;
		return v.replace(reg, function(k){
			return h[k];
		});
	},
	
	/**
	 * 自定义好友选择器
	 * @method newSelector
	 * @param {Object} ps
	 */
	newSelector: function(ps){
		var that = this;
		this.selector = new XN.ui.friendSelector({
			url: ps.url,
			id: ps.id,
			autoSelectFirst: true,
			limit: ps.limit,
			param: ps.param,
			noResult: function(){
				that.noMatch = true;
				return '没有匹配结果';
			},
			noInput: null,
			wrapper: ['<div class="mentionFrdList">',
                          '<div class="m-autosug-minwidth">',
                              '<div class="m-autosug-content">',
								  '<div class="mention-tip"><span>',that.titles[that.privacy],'</span></div>',
								  '<ul class="search-Result" style="overflow:hidden;"></ul>',
                              '</div>',
                          '</div>',
                      '</div>'].join('')
		});
		this.selector.buildMenu = function( r ) {
			return '<img src="' + r.head  + '" width="30" height="30" alt="'+ r.name  +'"/>' + '<strong style="white-space:nowrap">'+ r.name  +'</strong>';
        };
		this.selector._startCheck = function(){
			var This = that.selector;
			if( This._userInput )
			{
				This._userInput = false;
				return;
			}
			This._checkInput();
		};
		this.selector._endCheck = function(){
			that.selector._lastInput = '';
			that.selector._ul.innerHTML = '';
			return;
		};
		this.bindEvent();
	},
	
	/**
	 * 回填输入框的value
	 * @method buildValue
	 */
	buildValue: function(p){
		var olast = this.input.value.substring(this.curPos),
			ind = olast.indexOf(')'),
			atIndex = olast.indexOf('@');
		if(atIndex<ind && atIndex!=-1){
			this.last = olast;
		}else{
			this.last = olast.substring(ind+1);
		}
		if( this.last.indexOf(' ')==0 ){
			this.last = this.last.substring(1);
		}
		this.input.value = this.front + '@' + p.name + '(' + p.id + ')' + ' ' + this.last;
		this.refocus(p);
	},
	
	/**
	 * 重新定位光标
	 * @method refocus
	 */
	refocus: function(p){
		var that = this;
		var newCurPos = this.front.length+1+p.name.length+p.id.toString().length+3;
		var cst = this.input.scrollTop;
		this.fsInput.value = '';
		setTimeout(function(){
			XN.form.help(that.input).focus( newCurPos );
			that.input.scrollTop = cst;
			that.selector._endCheck();
			that.selector.menu.hide();
			that.selectorShow = false;
		},0);
	},
	
	/**
	 * 给好友选择器添加事件
	 * @method bindEvent
	 */
	bindEvent: function(){
		var that = this;
		this.selector.addEvent('select', function( p ){
			that.buildValue(p);
		}).addEvent('hasResult',function(){
			that.noMatch = false;
		}).addEvent('noinput',function(){
			that.noMatch = true;
			that.selector._ul.innerHTML = '';
			that.selector.menu.show();
		});
		$(this.input).addEvent('blur', function(){
			if(that.selector){
				that.selector._endCheck();
				that.selector.menu.hide();
			}
		});
		if($('whisper')){
			if(!this.oldPrivacy) this.oldPrivacy = this.privacy;
			$('whisper').addEvent('click',function(){
				if($('whisper').checked){
					that.privacy = 2;
				}else{
					that.privacy = that.oldPrivacy;
				}
				that.renewTip();
			});
		}
	},
	
	/**
	 * 更新好友选择器的tip
	 * @method renewTip
	 */
	renewTip: function(){
		var tip = Sizzle('.mention-tip span',this.selector._ul.parentNode)[0];
		tip.innerHTML = this.titles[this.privacy];
	},
	
	/**
	 * 创建好友选择器需要的input
	 * @method crFsInput
	 */
	crFsInput: function(){
		if(!this.fsInput){
			this.fsInput = $element('input');
			this.fsInput.type = 'text';
			this.fsInput.style.cssText = 'position:absolute;z-index:-1000;border:0 none;padding:0;height:0;overflow:hidden;';
			document.body.appendChild(this.fsInput);
		}
	},
	
	/**
	 * 定位好友选择器
	 * @method locateMenu
	 */
	locateMenu: function(){
		this.fsInput.style.left = this.atPos.X + 'px';
		this.fsInput.style.top = this.atPos.Y + 'px';
		this.selector.menu.refresh();
	},
	
	/**
	 * 初始化好友选择器
	 * @method initSelector
	 */
	initSelector: function(){
		this.crFsInput();
		if(this.selector) return;
		var that = this;
		var cb = function(){
			var fid = that.getFinalId(),
				surl = 'http://friend.renren.com/commonfriendselector',
				par = {'friendId':fid};
			if(fid==''){
				surl = 'http://friend.renren.com/friendsSelectorN';
				par = {};
			}
			that.newSelector({
				url: surl,
				id: that.fsInput,
				limit: 10,
				friendId: fid,
				param: par
			});
			try{
				that.selector.loadFriends();
			} catch(e){}
		};
		this.getPrivacy(cb);
	},
	
	/**
	 * 获取该UGC拥有者的id
	 * @method getOwnerId
	 * @return {Number||String}
	 */
	getFinalId: function(){
		if( this.privacy==0 ) return '';
		if( this.privacy==1 ) return this.ownerId;
		if( this.privacy!=0 && this.privacy!=1 ) return -1;
	},
	
	/**
	 * 查询隐私状态
	 * @method getPrivacy
	 * @param {Function} cb
	 */
	getPrivacy: function(cb){
		if( this.privacy!='haveNotCheck' ) return;
		if( this.ugcType=='blog'||this.ugcType=='photo'||this.ugcType=='album' ) {
			var that = this;
			var purls = {
				'blog': 'http://blog.renren.com/blog/' + this.ownerId + '/' + this.ugcId + '/privacy',
				'photo': 'http://photo.renren.com/photo/' + this.ownerId + '/photo-' + this.ugcId + '/privacy',
				'album': 'http://photo.renren.com/photo/' + this.ownerId + '/album-' + this.ugcId + '/privacy'
			};
			new XN.net.xmlhttp({
				url: purls[this.ugcType],
				onSuccess: function(r){
					var j = XN.json.parse(r.responseText);
					that.privacy = j.privacyLevel;
					cb();
				},
				onError: function(){
					that.privacy = 3;
					cb();
				}
			});
		} else {
			if(window.asyncHTMLManager&&window.asyncHTMLManager.location.href.indexOf('http://share.renren.com/share/collection')!=-1 && this.ugcType=='share'){ 
			//我的收藏页面不让@
				this.privacy = 2;
				cb();
			} else {
				this.privacy = 0;
				cb();
			}
		}
	},
	
	/** 
	 * 展示提示 
	 */
	showTip: function(){
		if( XN.cookie.get('at') ) return;
		var d = $('mentionTip');
		if( !d ){
			var d = $element('div');
			d.id = 'mentionTip';
			d.style.cssText = 'position:absolute;top:-9999px;left:-9999px;width:300px;height:33px;';
			document.body.appendChild(d);
			d.innerHTML = '<div class="mention-guide-tip">'
						+'<div class="tip-content">'
							+'这里可以输入<span style="font-weight:bold">“@姓名”</span>来向好友点名啦！'
							+'<a href="javascript:;" class="x-to-hide" id="mentionHideTip"></a>'
						+'</div>'
						+'<div class="tip-arrow"></div>'
					+'</div>';
			var that = this;
			$( Sizzle('#mentionTip .x-to-hide')[0] ).addEvent('click',function(){
				that.hideTip();
			});
		}
		this.tip = new XN.UI.fixPositionElement({
			id: d,
			alignType: '1-4',
			alignWith: this.input
		});
	},
	
	/** 
	 * 关闭提示 
	 */
	hideTip: function(){
		if( this.tip ) {
			XN.cookie.set('at',1,9999,'/','renren.com');
			this.tip.hide();
			this.tip = null;
		}
	}
	
};