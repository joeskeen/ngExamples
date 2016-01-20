'use strict';
(function(){
	angular.module('MarsApp')
		.service('newsService', NewsService);

	NewsService.$inject = ['$http'];
	function NewsService($http) {
		return {
			getNews: getNews
		};

		function getNews() {
			var url = 'api/news';
			return $http.get(url)
				.then(function(response) {
					var obj = xml2json(response.data);
					return obj;
				});
		}
	}

	function xml2json(xmlString) {
		var parser = new DOMParser();
		var xml = parser.parseFromString(xmlString, 'text/xml');
		return convertNode(xml.childNodes[0]);
	}

	function convertNode(node) {
		var attributes = node.attributes;
		var childNodes = node.childNodes;

		var obj = { $nodeName: node.nodeName };
		for (var i = 0; i < attributes.length; i++) {
			var attribute = attributes[i];
			obj['@'+attribute.name] = attribute.value;
		}

		if (childNodes.length > 0) {
			var children = [];
			for (var j = 0; j < childNodes.length; j++) {
				var childNode = childNodes[j];
				var child = null;
				switch(childNode.nodeType) {
					case Node.ELEMENT_NODE:	//1
						child = { $type: 'ELEMENT', value: convertNode(childNode) };
						break;
					// case Node.ATTRIBUTE_NODE:	//2 //It seems that the attributes are filtered out of this collection
					// 	child = { $type: 'ATTRIBUTE' };
					// 	break;
					case Node.TEXT_NODE:	//3
						var textContent = childNode.textContent.trim();
						if (textContent !== '')
							child = { $type: 'TEXT', value: childNode.textContent };
						break;
					case Node.CDATA_SECTION_NODE:	//4
						child = { $type: 'CDATA_SECTION', value: childNode.nodeValue };
						break;
					case Node.ENTITY_REFERENCE_NODE:	//5
						child = { $type: 'ENTITY_REFERENCE', value: childNode.nodeValue };
						break;
					case Node.ENTITY_NODE:	//6
						child = { $type: 'ENTITY', value: childNode.nodeValue };
						break;
					case Node.PROCESSING_INSTRUCTION_NODE:	//7
						child = { $type: 'PROCESSING_INSTRUCTION', value: childNode.nodeValue };
						break;
					case Node.COMMENT_NODE:	//8
						child = { $type: 'COMMENT', value: childNode.nodeValue };
						break;
					case Node.DOCUMENT_NODE:	//9
						child = { $type: 'DOCUMENT', value: childNode.nodeValue };
						break;
					case Node.DOCUMENT_TYPE_NODE:	//10
						child = { $type: 'DOCUMENT_TYPE', value: childNode.nodeValue };
						break;
					case Node.DOCUMENT_FRAGMENT_NODE:	//11
						child = { $type: 'DOCUMENT_FRAGMENT', value: childNode.nodeValue };
						break;
					case Node.NOTATION_NODE:	//12
						child = { $type: 'NOTATION', value: childNode.nodeValue };
						break;
				}
				if (child)
					children.push(child);
			}
			if(attributes.length === 0 && children.length === 1) {
				obj[node.nodeName] = children[0].value;
			} else {
				for (var k = 0; k < children.length; k++) {
					var childInfo = children[k];

					if (childInfo.$type === 'ELEMENT') {
						var key = childInfo.value.$nodeName;
						delete childInfo.value.$nodeName;
						if(obj[key]) {
							if(obj[key].length) {
								obj[key].push(childInfo.value);
							} else {
								obj[key] = [ obj[key] ];
								obj[key].push(childInfo.value);
							}
						} else {
							if(childInfo.value[key]) {
								obj[key] = childInfo.value[key];
							} else {
								obj[key] = childInfo.value;
							}
						}
					} else {
						obj.$children = children;
					}
				}
			}
		}
		return obj;
	}

	function getObjectLength(obj) {
	    var size = 0;
	    for (var key in obj) {
	        if (obj.hasOwnProperty(key)) size++;
	    }
	    return size;
	}
})();