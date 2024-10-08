function simple(node, visitors, baseVisitor, state, override) {
  if (!baseVisitor) {
    baseVisitor = base;
  }
  (function c(node2, st, override2) {
    var type = override2 || node2.type;
    baseVisitor[type](node2, st, c);
    if (visitors[type]) {
      visitors[type](node2, st);
    }
  })(node, state, override);
}
function ancestor(node, visitors, baseVisitor, state, override) {
  var ancestors = [];
  if (!baseVisitor) {
    baseVisitor = base;
  }
  (function c(node2, st, override2) {
    var type = override2 || node2.type;
    var isNew = node2 !== ancestors[ancestors.length - 1];
    if (isNew) {
      ancestors.push(node2);
    }
    baseVisitor[type](node2, st, c);
    if (visitors[type]) {
      visitors[type](node2, st || ancestors, ancestors);
    }
    if (isNew) {
      ancestors.pop();
    }
  })(node, state, override);
}
function recursive(node, state, funcs, baseVisitor, override) {
  var visitor = funcs ? make(funcs, baseVisitor || void 0) : baseVisitor;
  (function c(node2, st, override2) {
    visitor[override2 || node2.type](node2, st, c);
  })(node, state, override);
}
function makeTest(test) {
  if (typeof test === "string") {
    return function(type) {
      return type === test;
    };
  } else if (!test) {
    return function() {
      return true;
    };
  } else {
    return test;
  }
}
var Found = function Found2(node, state) {
  this.node = node;
  this.state = state;
};
function full(node, callback, baseVisitor, state, override) {
  if (!baseVisitor) {
    baseVisitor = base;
  }
  var last;
  (function c(node2, st, override2) {
    var type = override2 || node2.type;
    baseVisitor[type](node2, st, c);
    if (last !== node2) {
      callback(node2, st, type);
      last = node2;
    }
  })(node, state, override);
}
function fullAncestor(node, callback, baseVisitor, state) {
  if (!baseVisitor) {
    baseVisitor = base;
  }
  var ancestors = [], last;
  (function c(node2, st, override) {
    var type = override || node2.type;
    var isNew = node2 !== ancestors[ancestors.length - 1];
    if (isNew) {
      ancestors.push(node2);
    }
    baseVisitor[type](node2, st, c);
    if (last !== node2) {
      callback(node2, st || ancestors, ancestors, type);
      last = node2;
    }
    if (isNew) {
      ancestors.pop();
    }
  })(node, state);
}
function findNodeAt(node, start, end, test, baseVisitor, state) {
  if (!baseVisitor) {
    baseVisitor = base;
  }
  test = makeTest(test);
  try {
    (function c(node2, st, override) {
      var type = override || node2.type;
      if ((start == null || node2.start <= start) && (end == null || node2.end >= end)) {
        baseVisitor[type](node2, st, c);
      }
      if ((start == null || node2.start === start) && (end == null || node2.end === end) && test(type, node2)) {
        throw new Found(node2, st);
      }
    })(node, state);
  } catch (e) {
    if (e instanceof Found) {
      return e;
    }
    throw e;
  }
}
function findNodeAround(node, pos, test, baseVisitor, state) {
  test = makeTest(test);
  if (!baseVisitor) {
    baseVisitor = base;
  }
  try {
    (function c(node2, st, override) {
      var type = override || node2.type;
      if (node2.start > pos || node2.end < pos) {
        return;
      }
      baseVisitor[type](node2, st, c);
      if (test(type, node2)) {
        throw new Found(node2, st);
      }
    })(node, state);
  } catch (e) {
    if (e instanceof Found) {
      return e;
    }
    throw e;
  }
}
function findNodeAfter(node, pos, test, baseVisitor, state) {
  test = makeTest(test);
  if (!baseVisitor) {
    baseVisitor = base;
  }
  try {
    (function c(node2, st, override) {
      if (node2.end < pos) {
        return;
      }
      var type = override || node2.type;
      if (node2.start >= pos && test(type, node2)) {
        throw new Found(node2, st);
      }
      baseVisitor[type](node2, st, c);
    })(node, state);
  } catch (e) {
    if (e instanceof Found) {
      return e;
    }
    throw e;
  }
}
function findNodeBefore(node, pos, test, baseVisitor, state) {
  test = makeTest(test);
  if (!baseVisitor) {
    baseVisitor = base;
  }
  var max;
  (function c(node2, st, override) {
    if (node2.start > pos) {
      return;
    }
    var type = override || node2.type;
    if (node2.end <= pos && (!max || max.node.end < node2.end) && test(type, node2)) {
      max = new Found(node2, st);
    }
    baseVisitor[type](node2, st, c);
  })(node, state);
  return max;
}
function make(funcs, baseVisitor) {
  var visitor = Object.create(baseVisitor || base);
  for (var type in funcs) {
    visitor[type] = funcs[type];
  }
  return visitor;
}
function skipThrough(node, st, c) {
  c(node, st);
}
function ignore(_node, _st, _c) {
}
var base = {};
base.Program = base.BlockStatement = base.StaticBlock = function(node, st, c) {
  for (var i = 0, list = node.body; i < list.length; i += 1) {
    var stmt = list[i];
    c(stmt, st, "Statement");
  }
};
base.Statement = skipThrough;
base.EmptyStatement = ignore;
base.ExpressionStatement = base.ParenthesizedExpression = base.ChainExpression = function(node, st, c) {
  return c(node.expression, st, "Expression");
};
base.IfStatement = function(node, st, c) {
  c(node.test, st, "Expression");
  c(node.consequent, st, "Statement");
  if (node.alternate) {
    c(node.alternate, st, "Statement");
  }
};
base.LabeledStatement = function(node, st, c) {
  return c(node.body, st, "Statement");
};
base.BreakStatement = base.ContinueStatement = ignore;
base.WithStatement = function(node, st, c) {
  c(node.object, st, "Expression");
  c(node.body, st, "Statement");
};
base.SwitchStatement = function(node, st, c) {
  c(node.discriminant, st, "Expression");
  for (var i$1 = 0, list$1 = node.cases; i$1 < list$1.length; i$1 += 1) {
    var cs = list$1[i$1];
    if (cs.test) {
      c(cs.test, st, "Expression");
    }
    for (var i = 0, list = cs.consequent; i < list.length; i += 1) {
      var cons = list[i];
      c(cons, st, "Statement");
    }
  }
};
base.SwitchCase = function(node, st, c) {
  if (node.test) {
    c(node.test, st, "Expression");
  }
  for (var i = 0, list = node.consequent; i < list.length; i += 1) {
    var cons = list[i];
    c(cons, st, "Statement");
  }
};
base.ReturnStatement = base.YieldExpression = base.AwaitExpression = function(node, st, c) {
  if (node.argument) {
    c(node.argument, st, "Expression");
  }
};
base.ThrowStatement = base.SpreadElement = function(node, st, c) {
  return c(node.argument, st, "Expression");
};
base.TryStatement = function(node, st, c) {
  c(node.block, st, "Statement");
  if (node.handler) {
    c(node.handler, st);
  }
  if (node.finalizer) {
    c(node.finalizer, st, "Statement");
  }
};
base.CatchClause = function(node, st, c) {
  if (node.param) {
    c(node.param, st, "Pattern");
  }
  c(node.body, st, "Statement");
};
base.WhileStatement = base.DoWhileStatement = function(node, st, c) {
  c(node.test, st, "Expression");
  c(node.body, st, "Statement");
};
base.ForStatement = function(node, st, c) {
  if (node.init) {
    c(node.init, st, "ForInit");
  }
  if (node.test) {
    c(node.test, st, "Expression");
  }
  if (node.update) {
    c(node.update, st, "Expression");
  }
  c(node.body, st, "Statement");
};
base.ForInStatement = base.ForOfStatement = function(node, st, c) {
  c(node.left, st, "ForInit");
  c(node.right, st, "Expression");
  c(node.body, st, "Statement");
};
base.ForInit = function(node, st, c) {
  if (node.type === "VariableDeclaration") {
    c(node, st);
  } else {
    c(node, st, "Expression");
  }
};
base.DebuggerStatement = ignore;
base.FunctionDeclaration = function(node, st, c) {
  return c(node, st, "Function");
};
base.VariableDeclaration = function(node, st, c) {
  for (var i = 0, list = node.declarations; i < list.length; i += 1) {
    var decl = list[i];
    c(decl, st);
  }
};
base.VariableDeclarator = function(node, st, c) {
  c(node.id, st, "Pattern");
  if (node.init) {
    c(node.init, st, "Expression");
  }
};
base.Function = function(node, st, c) {
  if (node.id) {
    c(node.id, st, "Pattern");
  }
  for (var i = 0, list = node.params; i < list.length; i += 1) {
    var param = list[i];
    c(param, st, "Pattern");
  }
  c(node.body, st, node.expression ? "Expression" : "Statement");
};
base.Pattern = function(node, st, c) {
  if (node.type === "Identifier") {
    c(node, st, "VariablePattern");
  } else if (node.type === "MemberExpression") {
    c(node, st, "MemberPattern");
  } else {
    c(node, st);
  }
};
base.VariablePattern = ignore;
base.MemberPattern = skipThrough;
base.RestElement = function(node, st, c) {
  return c(node.argument, st, "Pattern");
};
base.ArrayPattern = function(node, st, c) {
  for (var i = 0, list = node.elements; i < list.length; i += 1) {
    var elt = list[i];
    if (elt) {
      c(elt, st, "Pattern");
    }
  }
};
base.ObjectPattern = function(node, st, c) {
  for (var i = 0, list = node.properties; i < list.length; i += 1) {
    var prop = list[i];
    if (prop.type === "Property") {
      if (prop.computed) {
        c(prop.key, st, "Expression");
      }
      c(prop.value, st, "Pattern");
    } else if (prop.type === "RestElement") {
      c(prop.argument, st, "Pattern");
    }
  }
};
base.Expression = skipThrough;
base.ThisExpression = base.Super = base.MetaProperty = ignore;
base.ArrayExpression = function(node, st, c) {
  for (var i = 0, list = node.elements; i < list.length; i += 1) {
    var elt = list[i];
    if (elt) {
      c(elt, st, "Expression");
    }
  }
};
base.ObjectExpression = function(node, st, c) {
  for (var i = 0, list = node.properties; i < list.length; i += 1) {
    var prop = list[i];
    c(prop, st);
  }
};
base.FunctionExpression = base.ArrowFunctionExpression = base.FunctionDeclaration;
base.SequenceExpression = function(node, st, c) {
  for (var i = 0, list = node.expressions; i < list.length; i += 1) {
    var expr = list[i];
    c(expr, st, "Expression");
  }
};
base.TemplateLiteral = function(node, st, c) {
  for (var i = 0, list = node.quasis; i < list.length; i += 1) {
    var quasi = list[i];
    c(quasi, st);
  }
  for (var i$1 = 0, list$1 = node.expressions; i$1 < list$1.length; i$1 += 1) {
    var expr = list$1[i$1];
    c(expr, st, "Expression");
  }
};
base.TemplateElement = ignore;
base.UnaryExpression = base.UpdateExpression = function(node, st, c) {
  c(node.argument, st, "Expression");
};
base.BinaryExpression = base.LogicalExpression = function(node, st, c) {
  c(node.left, st, "Expression");
  c(node.right, st, "Expression");
};
base.AssignmentExpression = base.AssignmentPattern = function(node, st, c) {
  c(node.left, st, "Pattern");
  c(node.right, st, "Expression");
};
base.ConditionalExpression = function(node, st, c) {
  c(node.test, st, "Expression");
  c(node.consequent, st, "Expression");
  c(node.alternate, st, "Expression");
};
base.NewExpression = base.CallExpression = function(node, st, c) {
  c(node.callee, st, "Expression");
  if (node.arguments) {
    for (var i = 0, list = node.arguments; i < list.length; i += 1) {
      var arg = list[i];
      c(arg, st, "Expression");
    }
  }
};
base.MemberExpression = function(node, st, c) {
  c(node.object, st, "Expression");
  if (node.computed) {
    c(node.property, st, "Expression");
  }
};
base.ExportNamedDeclaration = base.ExportDefaultDeclaration = function(node, st, c) {
  if (node.declaration) {
    c(node.declaration, st, node.type === "ExportNamedDeclaration" || node.declaration.id ? "Statement" : "Expression");
  }
  if (node.source) {
    c(node.source, st, "Expression");
  }
};
base.ExportAllDeclaration = function(node, st, c) {
  if (node.exported) {
    c(node.exported, st);
  }
  c(node.source, st, "Expression");
};
base.ImportDeclaration = function(node, st, c) {
  for (var i = 0, list = node.specifiers; i < list.length; i += 1) {
    var spec = list[i];
    c(spec, st);
  }
  c(node.source, st, "Expression");
};
base.ImportExpression = function(node, st, c) {
  c(node.source, st, "Expression");
};
base.ImportSpecifier = base.ImportDefaultSpecifier = base.ImportNamespaceSpecifier = base.Identifier = base.PrivateIdentifier = base.Literal = ignore;
base.TaggedTemplateExpression = function(node, st, c) {
  c(node.tag, st, "Expression");
  c(node.quasi, st, "Expression");
};
base.ClassDeclaration = base.ClassExpression = function(node, st, c) {
  return c(node, st, "Class");
};
base.Class = function(node, st, c) {
  if (node.id) {
    c(node.id, st, "Pattern");
  }
  if (node.superClass) {
    c(node.superClass, st, "Expression");
  }
  c(node.body, st);
};
base.ClassBody = function(node, st, c) {
  for (var i = 0, list = node.body; i < list.length; i += 1) {
    var elt = list[i];
    c(elt, st);
  }
};
base.MethodDefinition = base.PropertyDefinition = base.Property = function(node, st, c) {
  if (node.computed) {
    c(node.key, st, "Expression");
  }
  if (node.value) {
    c(node.value, st, "Expression");
  }
};
export {
  ancestor,
  base,
  findNodeAfter,
  findNodeAround,
  findNodeAt,
  findNodeBefore,
  full,
  fullAncestor,
  make,
  recursive,
  simple
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2xpYnMvd2Fsay5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gQVNUIHdhbGtlciBtb2R1bGUgZm9yIEVTVHJlZSBjb21wYXRpYmxlIHRyZWVzXHJcblxyXG4vLyBBIHNpbXBsZSB3YWxrIGlzIG9uZSB3aGVyZSB5b3Ugc2ltcGx5IHNwZWNpZnkgY2FsbGJhY2tzIHRvIGJlXHJcbi8vIGNhbGxlZCBvbiBzcGVjaWZpYyBub2Rlcy4gVGhlIGxhc3QgdHdvIGFyZ3VtZW50cyBhcmUgb3B0aW9uYWwuIEFcclxuLy8gc2ltcGxlIHVzZSB3b3VsZCBiZVxyXG4vL1xyXG4vLyAgICAgd2Fsay5zaW1wbGUobXlUcmVlLCB7XHJcbi8vICAgICAgICAgRXhwcmVzc2lvbjogZnVuY3Rpb24obm9kZSkgeyAuLi4gfVxyXG4vLyAgICAgfSk7XHJcbi8vXHJcbi8vIHRvIGRvIHNvbWV0aGluZyB3aXRoIGFsbCBleHByZXNzaW9ucy4gQWxsIEVTVHJlZSBub2RlIHR5cGVzXHJcbi8vIGNhbiBiZSB1c2VkIHRvIGlkZW50aWZ5IG5vZGUgdHlwZXMsIGFzIHdlbGwgYXMgRXhwcmVzc2lvbiBhbmRcclxuLy8gU3RhdGVtZW50LCB3aGljaCBkZW5vdGUgY2F0ZWdvcmllcyBvZiBub2Rlcy5cclxuLy9cclxuLy8gVGhlIGJhc2UgYXJndW1lbnQgY2FuIGJlIHVzZWQgdG8gcGFzcyBhIGN1c3RvbSAocmVjdXJzaXZlKVxyXG4vLyB3YWxrZXIsIGFuZCBzdGF0ZSBjYW4gYmUgdXNlZCB0byBnaXZlIHRoaXMgd2Fsa2VkIGFuIGluaXRpYWxcclxuLy8gc3RhdGUuXHJcblxyXG5mdW5jdGlvbiBzaW1wbGUobm9kZSwgdmlzaXRvcnMsIGJhc2VWaXNpdG9yLCBzdGF0ZSwgb3ZlcnJpZGUpIHtcclxuICBpZiAoIWJhc2VWaXNpdG9yKSB7IGJhc2VWaXNpdG9yID0gYmFzZVxyXG4gIDsgfShmdW5jdGlvbiBjKG5vZGUsIHN0LCBvdmVycmlkZSkge1xyXG4gICAgdmFyIHR5cGUgPSBvdmVycmlkZSB8fCBub2RlLnR5cGU7XHJcbiAgICBiYXNlVmlzaXRvclt0eXBlXShub2RlLCBzdCwgYyk7XHJcbiAgICBpZiAodmlzaXRvcnNbdHlwZV0pIHsgdmlzaXRvcnNbdHlwZV0obm9kZSwgc3QpOyB9XHJcbiAgfSkobm9kZSwgc3RhdGUsIG92ZXJyaWRlKTtcclxufVxyXG5cclxuLy8gQW4gYW5jZXN0b3Igd2FsayBrZWVwcyBhbiBhcnJheSBvZiBhbmNlc3RvciBub2RlcyAoaW5jbHVkaW5nIHRoZVxyXG4vLyBjdXJyZW50IG5vZGUpIGFuZCBwYXNzZXMgdGhlbSB0byB0aGUgY2FsbGJhY2sgYXMgdGhpcmQgcGFyYW1ldGVyXHJcbi8vIChhbmQgYWxzbyBhcyBzdGF0ZSBwYXJhbWV0ZXIgd2hlbiBubyBvdGhlciBzdGF0ZSBpcyBwcmVzZW50KS5cclxuZnVuY3Rpb24gYW5jZXN0b3Iobm9kZSwgdmlzaXRvcnMsIGJhc2VWaXNpdG9yLCBzdGF0ZSwgb3ZlcnJpZGUpIHtcclxuICB2YXIgYW5jZXN0b3JzID0gW107XHJcbiAgaWYgKCFiYXNlVmlzaXRvcikgeyBiYXNlVmlzaXRvciA9IGJhc2VcclxuICA7IH0oZnVuY3Rpb24gYyhub2RlLCBzdCwgb3ZlcnJpZGUpIHtcclxuICAgIHZhciB0eXBlID0gb3ZlcnJpZGUgfHwgbm9kZS50eXBlO1xyXG4gICAgdmFyIGlzTmV3ID0gbm9kZSAhPT0gYW5jZXN0b3JzW2FuY2VzdG9ycy5sZW5ndGggLSAxXTtcclxuICAgIGlmIChpc05ldykgeyBhbmNlc3RvcnMucHVzaChub2RlKTsgfVxyXG4gICAgYmFzZVZpc2l0b3JbdHlwZV0obm9kZSwgc3QsIGMpO1xyXG4gICAgaWYgKHZpc2l0b3JzW3R5cGVdKSB7IHZpc2l0b3JzW3R5cGVdKG5vZGUsIHN0IHx8IGFuY2VzdG9ycywgYW5jZXN0b3JzKTsgfVxyXG4gICAgaWYgKGlzTmV3KSB7IGFuY2VzdG9ycy5wb3AoKTsgfVxyXG4gIH0pKG5vZGUsIHN0YXRlLCBvdmVycmlkZSk7XHJcbn1cclxuXHJcbi8vIEEgcmVjdXJzaXZlIHdhbGsgaXMgb25lIHdoZXJlIHlvdXIgZnVuY3Rpb25zIG92ZXJyaWRlIHRoZSBkZWZhdWx0XHJcbi8vIHdhbGtlcnMuIFRoZXkgY2FuIG1vZGlmeSBhbmQgcmVwbGFjZSB0aGUgc3RhdGUgcGFyYW1ldGVyIHRoYXQnc1xyXG4vLyB0aHJlYWRlZCB0aHJvdWdoIHRoZSB3YWxrLCBhbmQgY2FuIG9wdCBob3cgYW5kIHdoZXRoZXIgdG8gd2Fsa1xyXG4vLyB0aGVpciBjaGlsZCBub2RlcyAoYnkgY2FsbGluZyB0aGVpciB0aGlyZCBhcmd1bWVudCBvbiB0aGVzZVxyXG4vLyBub2RlcykuXHJcbmZ1bmN0aW9uIHJlY3Vyc2l2ZShub2RlLCBzdGF0ZSwgZnVuY3MsIGJhc2VWaXNpdG9yLCBvdmVycmlkZSkge1xyXG4gIHZhciB2aXNpdG9yID0gZnVuY3MgPyBtYWtlKGZ1bmNzLCBiYXNlVmlzaXRvciB8fCB1bmRlZmluZWQpIDogYmFzZVZpc2l0b3JcclxuICA7KGZ1bmN0aW9uIGMobm9kZSwgc3QsIG92ZXJyaWRlKSB7XHJcbiAgICB2aXNpdG9yW292ZXJyaWRlIHx8IG5vZGUudHlwZV0obm9kZSwgc3QsIGMpO1xyXG4gIH0pKG5vZGUsIHN0YXRlLCBvdmVycmlkZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VUZXN0KHRlc3QpIHtcclxuICBpZiAodHlwZW9mIHRlc3QgPT09IFwic3RyaW5nXCIpXHJcbiAgICB7IHJldHVybiBmdW5jdGlvbiAodHlwZSkgeyByZXR1cm4gdHlwZSA9PT0gdGVzdDsgfSB9XHJcbiAgZWxzZSBpZiAoIXRlc3QpXHJcbiAgICB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9IH1cclxuICBlbHNlXHJcbiAgICB7IHJldHVybiB0ZXN0IH1cclxufVxyXG5cclxudmFyIEZvdW5kID0gZnVuY3Rpb24gRm91bmQobm9kZSwgc3RhdGUpIHsgdGhpcy5ub2RlID0gbm9kZTsgdGhpcy5zdGF0ZSA9IHN0YXRlOyB9O1xyXG5cclxuLy8gQSBmdWxsIHdhbGsgdHJpZ2dlcnMgdGhlIGNhbGxiYWNrIG9uIGVhY2ggbm9kZVxyXG5mdW5jdGlvbiBmdWxsKG5vZGUsIGNhbGxiYWNrLCBiYXNlVmlzaXRvciwgc3RhdGUsIG92ZXJyaWRlKSB7XHJcbiAgaWYgKCFiYXNlVmlzaXRvcikgeyBiYXNlVmlzaXRvciA9IGJhc2U7IH1cclxuICB2YXIgbGFzdFxyXG4gIDsoZnVuY3Rpb24gYyhub2RlLCBzdCwgb3ZlcnJpZGUpIHtcclxuICAgIHZhciB0eXBlID0gb3ZlcnJpZGUgfHwgbm9kZS50eXBlO1xyXG4gICAgYmFzZVZpc2l0b3JbdHlwZV0obm9kZSwgc3QsIGMpO1xyXG4gICAgaWYgKGxhc3QgIT09IG5vZGUpIHtcclxuICAgICAgY2FsbGJhY2sobm9kZSwgc3QsIHR5cGUpO1xyXG4gICAgICBsYXN0ID0gbm9kZTtcclxuICAgIH1cclxuICB9KShub2RlLCBzdGF0ZSwgb3ZlcnJpZGUpO1xyXG59XHJcblxyXG4vLyBBbiBmdWxsQW5jZXN0b3Igd2FsayBpcyBsaWtlIGFuIGFuY2VzdG9yIHdhbGssIGJ1dCB0cmlnZ2Vyc1xyXG4vLyB0aGUgY2FsbGJhY2sgb24gZWFjaCBub2RlXHJcbmZ1bmN0aW9uIGZ1bGxBbmNlc3Rvcihub2RlLCBjYWxsYmFjaywgYmFzZVZpc2l0b3IsIHN0YXRlKSB7XHJcbiAgaWYgKCFiYXNlVmlzaXRvcikgeyBiYXNlVmlzaXRvciA9IGJhc2U7IH1cclxuICB2YXIgYW5jZXN0b3JzID0gW10sIGxhc3RcclxuICA7KGZ1bmN0aW9uIGMobm9kZSwgc3QsIG92ZXJyaWRlKSB7XHJcbiAgICB2YXIgdHlwZSA9IG92ZXJyaWRlIHx8IG5vZGUudHlwZTtcclxuICAgIHZhciBpc05ldyA9IG5vZGUgIT09IGFuY2VzdG9yc1thbmNlc3RvcnMubGVuZ3RoIC0gMV07XHJcbiAgICBpZiAoaXNOZXcpIHsgYW5jZXN0b3JzLnB1c2gobm9kZSk7IH1cclxuICAgIGJhc2VWaXNpdG9yW3R5cGVdKG5vZGUsIHN0LCBjKTtcclxuICAgIGlmIChsYXN0ICE9PSBub2RlKSB7XHJcbiAgICAgIGNhbGxiYWNrKG5vZGUsIHN0IHx8IGFuY2VzdG9ycywgYW5jZXN0b3JzLCB0eXBlKTtcclxuICAgICAgbGFzdCA9IG5vZGU7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNOZXcpIHsgYW5jZXN0b3JzLnBvcCgpOyB9XHJcbiAgfSkobm9kZSwgc3RhdGUpO1xyXG59XHJcblxyXG4vLyBGaW5kIGEgbm9kZSB3aXRoIGEgZ2l2ZW4gc3RhcnQsIGVuZCwgYW5kIHR5cGUgKGFsbCBhcmUgb3B0aW9uYWwsXHJcbi8vIG51bGwgY2FuIGJlIHVzZWQgYXMgd2lsZGNhcmQpLiBSZXR1cm5zIGEge25vZGUsIHN0YXRlfSBvYmplY3QsIG9yXHJcbi8vIHVuZGVmaW5lZCB3aGVuIGl0IGRvZXNuJ3QgZmluZCBhIG1hdGNoaW5nIG5vZGUuXHJcbmZ1bmN0aW9uIGZpbmROb2RlQXQobm9kZSwgc3RhcnQsIGVuZCwgdGVzdCwgYmFzZVZpc2l0b3IsIHN0YXRlKSB7XHJcbiAgaWYgKCFiYXNlVmlzaXRvcikgeyBiYXNlVmlzaXRvciA9IGJhc2U7IH1cclxuICB0ZXN0ID0gbWFrZVRlc3QodGVzdCk7XHJcbiAgdHJ5IHtcclxuICAgIChmdW5jdGlvbiBjKG5vZGUsIHN0LCBvdmVycmlkZSkge1xyXG4gICAgICB2YXIgdHlwZSA9IG92ZXJyaWRlIHx8IG5vZGUudHlwZTtcclxuICAgICAgaWYgKChzdGFydCA9PSBudWxsIHx8IG5vZGUuc3RhcnQgPD0gc3RhcnQpICYmXHJcbiAgICAgICAgICAoZW5kID09IG51bGwgfHwgbm9kZS5lbmQgPj0gZW5kKSlcclxuICAgICAgICB7IGJhc2VWaXNpdG9yW3R5cGVdKG5vZGUsIHN0LCBjKTsgfVxyXG4gICAgICBpZiAoKHN0YXJ0ID09IG51bGwgfHwgbm9kZS5zdGFydCA9PT0gc3RhcnQpICYmXHJcbiAgICAgICAgICAoZW5kID09IG51bGwgfHwgbm9kZS5lbmQgPT09IGVuZCkgJiZcclxuICAgICAgICAgIHRlc3QodHlwZSwgbm9kZSkpXHJcbiAgICAgICAgeyB0aHJvdyBuZXcgRm91bmQobm9kZSwgc3QpIH1cclxuICAgIH0pKG5vZGUsIHN0YXRlKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIEZvdW5kKSB7IHJldHVybiBlIH1cclxuICAgIHRocm93IGVcclxuICB9XHJcbn1cclxuXHJcbi8vIEZpbmQgdGhlIGlubmVybW9zdCBub2RlIG9mIGEgZ2l2ZW4gdHlwZSB0aGF0IGNvbnRhaW5zIHRoZSBnaXZlblxyXG4vLyBwb3NpdGlvbi4gSW50ZXJmYWNlIHNpbWlsYXIgdG8gZmluZE5vZGVBdC5cclxuZnVuY3Rpb24gZmluZE5vZGVBcm91bmQobm9kZSwgcG9zLCB0ZXN0LCBiYXNlVmlzaXRvciwgc3RhdGUpIHtcclxuICB0ZXN0ID0gbWFrZVRlc3QodGVzdCk7XHJcbiAgaWYgKCFiYXNlVmlzaXRvcikgeyBiYXNlVmlzaXRvciA9IGJhc2U7IH1cclxuICB0cnkge1xyXG4gICAgKGZ1bmN0aW9uIGMobm9kZSwgc3QsIG92ZXJyaWRlKSB7XHJcbiAgICAgIHZhciB0eXBlID0gb3ZlcnJpZGUgfHwgbm9kZS50eXBlO1xyXG4gICAgICBpZiAobm9kZS5zdGFydCA+IHBvcyB8fCBub2RlLmVuZCA8IHBvcykgeyByZXR1cm4gfVxyXG4gICAgICBiYXNlVmlzaXRvclt0eXBlXShub2RlLCBzdCwgYyk7XHJcbiAgICAgIGlmICh0ZXN0KHR5cGUsIG5vZGUpKSB7IHRocm93IG5ldyBGb3VuZChub2RlLCBzdCkgfVxyXG4gICAgfSkobm9kZSwgc3RhdGUpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgRm91bmQpIHsgcmV0dXJuIGUgfVxyXG4gICAgdGhyb3cgZVxyXG4gIH1cclxufVxyXG5cclxuLy8gRmluZCB0aGUgb3V0ZXJtb3N0IG1hdGNoaW5nIG5vZGUgYWZ0ZXIgYSBnaXZlbiBwb3NpdGlvbi5cclxuZnVuY3Rpb24gZmluZE5vZGVBZnRlcihub2RlLCBwb3MsIHRlc3QsIGJhc2VWaXNpdG9yLCBzdGF0ZSkge1xyXG4gIHRlc3QgPSBtYWtlVGVzdCh0ZXN0KTtcclxuICBpZiAoIWJhc2VWaXNpdG9yKSB7IGJhc2VWaXNpdG9yID0gYmFzZTsgfVxyXG4gIHRyeSB7XHJcbiAgICAoZnVuY3Rpb24gYyhub2RlLCBzdCwgb3ZlcnJpZGUpIHtcclxuICAgICAgaWYgKG5vZGUuZW5kIDwgcG9zKSB7IHJldHVybiB9XHJcbiAgICAgIHZhciB0eXBlID0gb3ZlcnJpZGUgfHwgbm9kZS50eXBlO1xyXG4gICAgICBpZiAobm9kZS5zdGFydCA+PSBwb3MgJiYgdGVzdCh0eXBlLCBub2RlKSkgeyB0aHJvdyBuZXcgRm91bmQobm9kZSwgc3QpIH1cclxuICAgICAgYmFzZVZpc2l0b3JbdHlwZV0obm9kZSwgc3QsIGMpO1xyXG4gICAgfSkobm9kZSwgc3RhdGUpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgRm91bmQpIHsgcmV0dXJuIGUgfVxyXG4gICAgdGhyb3cgZVxyXG4gIH1cclxufVxyXG5cclxuLy8gRmluZCB0aGUgb3V0ZXJtb3N0IG1hdGNoaW5nIG5vZGUgYmVmb3JlIGEgZ2l2ZW4gcG9zaXRpb24uXHJcbmZ1bmN0aW9uIGZpbmROb2RlQmVmb3JlKG5vZGUsIHBvcywgdGVzdCwgYmFzZVZpc2l0b3IsIHN0YXRlKSB7XHJcbiAgdGVzdCA9IG1ha2VUZXN0KHRlc3QpO1xyXG4gIGlmICghYmFzZVZpc2l0b3IpIHsgYmFzZVZpc2l0b3IgPSBiYXNlOyB9XHJcbiAgdmFyIG1heFxyXG4gIDsoZnVuY3Rpb24gYyhub2RlLCBzdCwgb3ZlcnJpZGUpIHtcclxuICAgIGlmIChub2RlLnN0YXJ0ID4gcG9zKSB7IHJldHVybiB9XHJcbiAgICB2YXIgdHlwZSA9IG92ZXJyaWRlIHx8IG5vZGUudHlwZTtcclxuICAgIGlmIChub2RlLmVuZCA8PSBwb3MgJiYgKCFtYXggfHwgbWF4Lm5vZGUuZW5kIDwgbm9kZS5lbmQpICYmIHRlc3QodHlwZSwgbm9kZSkpXHJcbiAgICAgIHsgbWF4ID0gbmV3IEZvdW5kKG5vZGUsIHN0KTsgfVxyXG4gICAgYmFzZVZpc2l0b3JbdHlwZV0obm9kZSwgc3QsIGMpO1xyXG4gIH0pKG5vZGUsIHN0YXRlKTtcclxuICByZXR1cm4gbWF4XHJcbn1cclxuXHJcbi8vIFVzZWQgdG8gY3JlYXRlIGEgY3VzdG9tIHdhbGtlci4gV2lsbCBmaWxsIGluIGFsbCBtaXNzaW5nIG5vZGVcclxuLy8gdHlwZSBwcm9wZXJ0aWVzIHdpdGggdGhlIGRlZmF1bHRzLlxyXG5mdW5jdGlvbiBtYWtlKGZ1bmNzLCBiYXNlVmlzaXRvcikge1xyXG4gIHZhciB2aXNpdG9yID0gT2JqZWN0LmNyZWF0ZShiYXNlVmlzaXRvciB8fCBiYXNlKTtcclxuICBmb3IgKHZhciB0eXBlIGluIGZ1bmNzKSB7IHZpc2l0b3JbdHlwZV0gPSBmdW5jc1t0eXBlXTsgfVxyXG4gIHJldHVybiB2aXNpdG9yXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNraXBUaHJvdWdoKG5vZGUsIHN0LCBjKSB7IGMobm9kZSwgc3QpOyB9XHJcbmZ1bmN0aW9uIGlnbm9yZShfbm9kZSwgX3N0LCBfYykge31cclxuXHJcbi8vIE5vZGUgd2Fsa2Vycy5cclxuXHJcbnZhciBiYXNlID0ge307XHJcblxyXG5iYXNlLlByb2dyYW0gPSBiYXNlLkJsb2NrU3RhdGVtZW50ID0gYmFzZS5TdGF0aWNCbG9jayA9IGZ1bmN0aW9uIChub2RlLCBzdCwgYykge1xyXG4gIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gbm9kZS5ib2R5OyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSlcclxuICAgIHtcclxuICAgIHZhciBzdG10ID0gbGlzdFtpXTtcclxuXHJcbiAgICBjKHN0bXQsIHN0LCBcIlN0YXRlbWVudFwiKTtcclxuICB9XHJcbn07XHJcbmJhc2UuU3RhdGVtZW50ID0gc2tpcFRocm91Z2g7XHJcbmJhc2UuRW1wdHlTdGF0ZW1lbnQgPSBpZ25vcmU7XHJcbmJhc2UuRXhwcmVzc2lvblN0YXRlbWVudCA9IGJhc2UuUGFyZW50aGVzaXplZEV4cHJlc3Npb24gPSBiYXNlLkNoYWluRXhwcmVzc2lvbiA9XHJcbiAgZnVuY3Rpb24gKG5vZGUsIHN0LCBjKSB7IHJldHVybiBjKG5vZGUuZXhwcmVzc2lvbiwgc3QsIFwiRXhwcmVzc2lvblwiKTsgfTtcclxuYmFzZS5JZlN0YXRlbWVudCA9IGZ1bmN0aW9uIChub2RlLCBzdCwgYykge1xyXG4gIGMobm9kZS50ZXN0LCBzdCwgXCJFeHByZXNzaW9uXCIpO1xyXG4gIGMobm9kZS5jb25zZXF1ZW50LCBzdCwgXCJTdGF0ZW1lbnRcIik7XHJcbiAgaWYgKG5vZGUuYWx0ZXJuYXRlKSB7IGMobm9kZS5hbHRlcm5hdGUsIHN0LCBcIlN0YXRlbWVudFwiKTsgfVxyXG59O1xyXG5iYXNlLkxhYmVsZWRTdGF0ZW1lbnQgPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHsgcmV0dXJuIGMobm9kZS5ib2R5LCBzdCwgXCJTdGF0ZW1lbnRcIik7IH07XHJcbmJhc2UuQnJlYWtTdGF0ZW1lbnQgPSBiYXNlLkNvbnRpbnVlU3RhdGVtZW50ID0gaWdub3JlO1xyXG5iYXNlLldpdGhTdGF0ZW1lbnQgPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcclxuICBjKG5vZGUub2JqZWN0LCBzdCwgXCJFeHByZXNzaW9uXCIpO1xyXG4gIGMobm9kZS5ib2R5LCBzdCwgXCJTdGF0ZW1lbnRcIik7XHJcbn07XHJcbmJhc2UuU3dpdGNoU3RhdGVtZW50ID0gZnVuY3Rpb24gKG5vZGUsIHN0LCBjKSB7XHJcbiAgYyhub2RlLmRpc2NyaW1pbmFudCwgc3QsIFwiRXhwcmVzc2lvblwiKTtcclxuICBmb3IgKHZhciBpJDEgPSAwLCBsaXN0JDEgPSBub2RlLmNhc2VzOyBpJDEgPCBsaXN0JDEubGVuZ3RoOyBpJDEgKz0gMSkge1xyXG4gICAgdmFyIGNzID0gbGlzdCQxW2kkMV07XHJcblxyXG4gICAgaWYgKGNzLnRlc3QpIHsgYyhjcy50ZXN0LCBzdCwgXCJFeHByZXNzaW9uXCIpOyB9XHJcbiAgICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IGNzLmNvbnNlcXVlbnQ7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKVxyXG4gICAgICB7XHJcbiAgICAgIHZhciBjb25zID0gbGlzdFtpXTtcclxuXHJcbiAgICAgIGMoY29ucywgc3QsIFwiU3RhdGVtZW50XCIpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuYmFzZS5Td2l0Y2hDYXNlID0gZnVuY3Rpb24gKG5vZGUsIHN0LCBjKSB7XHJcbiAgaWYgKG5vZGUudGVzdCkgeyBjKG5vZGUudGVzdCwgc3QsIFwiRXhwcmVzc2lvblwiKTsgfVxyXG4gIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gbm9kZS5jb25zZXF1ZW50OyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSlcclxuICAgIHtcclxuICAgIHZhciBjb25zID0gbGlzdFtpXTtcclxuXHJcbiAgICBjKGNvbnMsIHN0LCBcIlN0YXRlbWVudFwiKTtcclxuICB9XHJcbn07XHJcbmJhc2UuUmV0dXJuU3RhdGVtZW50ID0gYmFzZS5ZaWVsZEV4cHJlc3Npb24gPSBiYXNlLkF3YWl0RXhwcmVzc2lvbiA9IGZ1bmN0aW9uIChub2RlLCBzdCwgYykge1xyXG4gIGlmIChub2RlLmFyZ3VtZW50KSB7IGMobm9kZS5hcmd1bWVudCwgc3QsIFwiRXhwcmVzc2lvblwiKTsgfVxyXG59O1xyXG5iYXNlLlRocm93U3RhdGVtZW50ID0gYmFzZS5TcHJlYWRFbGVtZW50ID1cclxuICBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHsgcmV0dXJuIGMobm9kZS5hcmd1bWVudCwgc3QsIFwiRXhwcmVzc2lvblwiKTsgfTtcclxuYmFzZS5UcnlTdGF0ZW1lbnQgPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcclxuICBjKG5vZGUuYmxvY2ssIHN0LCBcIlN0YXRlbWVudFwiKTtcclxuICBpZiAobm9kZS5oYW5kbGVyKSB7IGMobm9kZS5oYW5kbGVyLCBzdCk7IH1cclxuICBpZiAobm9kZS5maW5hbGl6ZXIpIHsgYyhub2RlLmZpbmFsaXplciwgc3QsIFwiU3RhdGVtZW50XCIpOyB9XHJcbn07XHJcbmJhc2UuQ2F0Y2hDbGF1c2UgPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcclxuICBpZiAobm9kZS5wYXJhbSkgeyBjKG5vZGUucGFyYW0sIHN0LCBcIlBhdHRlcm5cIik7IH1cclxuICBjKG5vZGUuYm9keSwgc3QsIFwiU3RhdGVtZW50XCIpO1xyXG59O1xyXG5iYXNlLldoaWxlU3RhdGVtZW50ID0gYmFzZS5Eb1doaWxlU3RhdGVtZW50ID0gZnVuY3Rpb24gKG5vZGUsIHN0LCBjKSB7XHJcbiAgYyhub2RlLnRlc3QsIHN0LCBcIkV4cHJlc3Npb25cIik7XHJcbiAgYyhub2RlLmJvZHksIHN0LCBcIlN0YXRlbWVudFwiKTtcclxufTtcclxuYmFzZS5Gb3JTdGF0ZW1lbnQgPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcclxuICBpZiAobm9kZS5pbml0KSB7IGMobm9kZS5pbml0LCBzdCwgXCJGb3JJbml0XCIpOyB9XHJcbiAgaWYgKG5vZGUudGVzdCkgeyBjKG5vZGUudGVzdCwgc3QsIFwiRXhwcmVzc2lvblwiKTsgfVxyXG4gIGlmIChub2RlLnVwZGF0ZSkgeyBjKG5vZGUudXBkYXRlLCBzdCwgXCJFeHByZXNzaW9uXCIpOyB9XHJcbiAgYyhub2RlLmJvZHksIHN0LCBcIlN0YXRlbWVudFwiKTtcclxufTtcclxuYmFzZS5Gb3JJblN0YXRlbWVudCA9IGJhc2UuRm9yT2ZTdGF0ZW1lbnQgPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcclxuICBjKG5vZGUubGVmdCwgc3QsIFwiRm9ySW5pdFwiKTtcclxuICBjKG5vZGUucmlnaHQsIHN0LCBcIkV4cHJlc3Npb25cIik7XHJcbiAgYyhub2RlLmJvZHksIHN0LCBcIlN0YXRlbWVudFwiKTtcclxufTtcclxuYmFzZS5Gb3JJbml0ID0gZnVuY3Rpb24gKG5vZGUsIHN0LCBjKSB7XHJcbiAgaWYgKG5vZGUudHlwZSA9PT0gXCJWYXJpYWJsZURlY2xhcmF0aW9uXCIpIHsgYyhub2RlLCBzdCk7IH1cclxuICBlbHNlIHsgYyhub2RlLCBzdCwgXCJFeHByZXNzaW9uXCIpOyB9XHJcbn07XHJcbmJhc2UuRGVidWdnZXJTdGF0ZW1lbnQgPSBpZ25vcmU7XHJcblxyXG5iYXNlLkZ1bmN0aW9uRGVjbGFyYXRpb24gPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHsgcmV0dXJuIGMobm9kZSwgc3QsIFwiRnVuY3Rpb25cIik7IH07XHJcbmJhc2UuVmFyaWFibGVEZWNsYXJhdGlvbiA9IGZ1bmN0aW9uIChub2RlLCBzdCwgYykge1xyXG4gIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gbm9kZS5kZWNsYXJhdGlvbnM7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKVxyXG4gICAge1xyXG4gICAgdmFyIGRlY2wgPSBsaXN0W2ldO1xyXG5cclxuICAgIGMoZGVjbCwgc3QpO1xyXG4gIH1cclxufTtcclxuYmFzZS5WYXJpYWJsZURlY2xhcmF0b3IgPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcclxuICBjKG5vZGUuaWQsIHN0LCBcIlBhdHRlcm5cIik7XHJcbiAgaWYgKG5vZGUuaW5pdCkgeyBjKG5vZGUuaW5pdCwgc3QsIFwiRXhwcmVzc2lvblwiKTsgfVxyXG59O1xyXG5cclxuYmFzZS5GdW5jdGlvbiA9IGZ1bmN0aW9uIChub2RlLCBzdCwgYykge1xyXG4gIGlmIChub2RlLmlkKSB7IGMobm9kZS5pZCwgc3QsIFwiUGF0dGVyblwiKTsgfVxyXG4gIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gbm9kZS5wYXJhbXM7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKVxyXG4gICAge1xyXG4gICAgdmFyIHBhcmFtID0gbGlzdFtpXTtcclxuXHJcbiAgICBjKHBhcmFtLCBzdCwgXCJQYXR0ZXJuXCIpO1xyXG4gIH1cclxuICBjKG5vZGUuYm9keSwgc3QsIG5vZGUuZXhwcmVzc2lvbiA/IFwiRXhwcmVzc2lvblwiIDogXCJTdGF0ZW1lbnRcIik7XHJcbn07XHJcblxyXG5iYXNlLlBhdHRlcm4gPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcclxuICBpZiAobm9kZS50eXBlID09PSBcIklkZW50aWZpZXJcIilcclxuICAgIHsgYyhub2RlLCBzdCwgXCJWYXJpYWJsZVBhdHRlcm5cIik7IH1cclxuICBlbHNlIGlmIChub2RlLnR5cGUgPT09IFwiTWVtYmVyRXhwcmVzc2lvblwiKVxyXG4gICAgeyBjKG5vZGUsIHN0LCBcIk1lbWJlclBhdHRlcm5cIik7IH1cclxuICBlbHNlXHJcbiAgICB7IGMobm9kZSwgc3QpOyB9XHJcbn07XHJcbmJhc2UuVmFyaWFibGVQYXR0ZXJuID0gaWdub3JlO1xyXG5iYXNlLk1lbWJlclBhdHRlcm4gPSBza2lwVGhyb3VnaDtcclxuYmFzZS5SZXN0RWxlbWVudCA9IGZ1bmN0aW9uIChub2RlLCBzdCwgYykgeyByZXR1cm4gYyhub2RlLmFyZ3VtZW50LCBzdCwgXCJQYXR0ZXJuXCIpOyB9O1xyXG5iYXNlLkFycmF5UGF0dGVybiA9IGZ1bmN0aW9uIChub2RlLCBzdCwgYykge1xyXG4gIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gbm9kZS5lbGVtZW50czsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIHZhciBlbHQgPSBsaXN0W2ldO1xyXG5cclxuICAgIGlmIChlbHQpIHsgYyhlbHQsIHN0LCBcIlBhdHRlcm5cIik7IH1cclxuICB9XHJcbn07XHJcbmJhc2UuT2JqZWN0UGF0dGVybiA9IGZ1bmN0aW9uIChub2RlLCBzdCwgYykge1xyXG4gIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gbm9kZS5wcm9wZXJ0aWVzOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgdmFyIHByb3AgPSBsaXN0W2ldO1xyXG5cclxuICAgIGlmIChwcm9wLnR5cGUgPT09IFwiUHJvcGVydHlcIikge1xyXG4gICAgICBpZiAocHJvcC5jb21wdXRlZCkgeyBjKHByb3Aua2V5LCBzdCwgXCJFeHByZXNzaW9uXCIpOyB9XHJcbiAgICAgIGMocHJvcC52YWx1ZSwgc3QsIFwiUGF0dGVyblwiKTtcclxuICAgIH0gZWxzZSBpZiAocHJvcC50eXBlID09PSBcIlJlc3RFbGVtZW50XCIpIHtcclxuICAgICAgYyhwcm9wLmFyZ3VtZW50LCBzdCwgXCJQYXR0ZXJuXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmJhc2UuRXhwcmVzc2lvbiA9IHNraXBUaHJvdWdoO1xyXG5iYXNlLlRoaXNFeHByZXNzaW9uID0gYmFzZS5TdXBlciA9IGJhc2UuTWV0YVByb3BlcnR5ID0gaWdub3JlO1xyXG5iYXNlLkFycmF5RXhwcmVzc2lvbiA9IGZ1bmN0aW9uIChub2RlLCBzdCwgYykge1xyXG4gIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gbm9kZS5lbGVtZW50czsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIHZhciBlbHQgPSBsaXN0W2ldO1xyXG5cclxuICAgIGlmIChlbHQpIHsgYyhlbHQsIHN0LCBcIkV4cHJlc3Npb25cIik7IH1cclxuICB9XHJcbn07XHJcbmJhc2UuT2JqZWN0RXhwcmVzc2lvbiA9IGZ1bmN0aW9uIChub2RlLCBzdCwgYykge1xyXG4gIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gbm9kZS5wcm9wZXJ0aWVzOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSlcclxuICAgIHtcclxuICAgIHZhciBwcm9wID0gbGlzdFtpXTtcclxuXHJcbiAgICBjKHByb3AsIHN0KTtcclxuICB9XHJcbn07XHJcbmJhc2UuRnVuY3Rpb25FeHByZXNzaW9uID0gYmFzZS5BcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbiA9IGJhc2UuRnVuY3Rpb25EZWNsYXJhdGlvbjtcclxuYmFzZS5TZXF1ZW5jZUV4cHJlc3Npb24gPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcclxuICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IG5vZGUuZXhwcmVzc2lvbnM7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKVxyXG4gICAge1xyXG4gICAgdmFyIGV4cHIgPSBsaXN0W2ldO1xyXG5cclxuICAgIGMoZXhwciwgc3QsIFwiRXhwcmVzc2lvblwiKTtcclxuICB9XHJcbn07XHJcbmJhc2UuVGVtcGxhdGVMaXRlcmFsID0gZnVuY3Rpb24gKG5vZGUsIHN0LCBjKSB7XHJcbiAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBub2RlLnF1YXNpczsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpXHJcbiAgICB7XHJcbiAgICB2YXIgcXVhc2kgPSBsaXN0W2ldO1xyXG5cclxuICAgIGMocXVhc2ksIHN0KTtcclxuICB9XHJcblxyXG4gIGZvciAodmFyIGkkMSA9IDAsIGxpc3QkMSA9IG5vZGUuZXhwcmVzc2lvbnM7IGkkMSA8IGxpc3QkMS5sZW5ndGg7IGkkMSArPSAxKVxyXG4gICAge1xyXG4gICAgdmFyIGV4cHIgPSBsaXN0JDFbaSQxXTtcclxuXHJcbiAgICBjKGV4cHIsIHN0LCBcIkV4cHJlc3Npb25cIik7XHJcbiAgfVxyXG59O1xyXG5iYXNlLlRlbXBsYXRlRWxlbWVudCA9IGlnbm9yZTtcclxuYmFzZS5VbmFyeUV4cHJlc3Npb24gPSBiYXNlLlVwZGF0ZUV4cHJlc3Npb24gPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcclxuICBjKG5vZGUuYXJndW1lbnQsIHN0LCBcIkV4cHJlc3Npb25cIik7XHJcbn07XHJcbmJhc2UuQmluYXJ5RXhwcmVzc2lvbiA9IGJhc2UuTG9naWNhbEV4cHJlc3Npb24gPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcclxuICBjKG5vZGUubGVmdCwgc3QsIFwiRXhwcmVzc2lvblwiKTtcclxuICBjKG5vZGUucmlnaHQsIHN0LCBcIkV4cHJlc3Npb25cIik7XHJcbn07XHJcbmJhc2UuQXNzaWdubWVudEV4cHJlc3Npb24gPSBiYXNlLkFzc2lnbm1lbnRQYXR0ZXJuID0gZnVuY3Rpb24gKG5vZGUsIHN0LCBjKSB7XHJcbiAgYyhub2RlLmxlZnQsIHN0LCBcIlBhdHRlcm5cIik7XHJcbiAgYyhub2RlLnJpZ2h0LCBzdCwgXCJFeHByZXNzaW9uXCIpO1xyXG59O1xyXG5iYXNlLkNvbmRpdGlvbmFsRXhwcmVzc2lvbiA9IGZ1bmN0aW9uIChub2RlLCBzdCwgYykge1xyXG4gIGMobm9kZS50ZXN0LCBzdCwgXCJFeHByZXNzaW9uXCIpO1xyXG4gIGMobm9kZS5jb25zZXF1ZW50LCBzdCwgXCJFeHByZXNzaW9uXCIpO1xyXG4gIGMobm9kZS5hbHRlcm5hdGUsIHN0LCBcIkV4cHJlc3Npb25cIik7XHJcbn07XHJcbmJhc2UuTmV3RXhwcmVzc2lvbiA9IGJhc2UuQ2FsbEV4cHJlc3Npb24gPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcclxuICBjKG5vZGUuY2FsbGVlLCBzdCwgXCJFeHByZXNzaW9uXCIpO1xyXG4gIGlmIChub2RlLmFyZ3VtZW50cylcclxuICAgIHsgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBub2RlLmFyZ3VtZW50czsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpXHJcbiAgICAgIHtcclxuICAgICAgICB2YXIgYXJnID0gbGlzdFtpXTtcclxuXHJcbiAgICAgICAgYyhhcmcsIHN0LCBcIkV4cHJlc3Npb25cIik7XHJcbiAgICAgIH0gfVxyXG59O1xyXG5iYXNlLk1lbWJlckV4cHJlc3Npb24gPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcclxuICBjKG5vZGUub2JqZWN0LCBzdCwgXCJFeHByZXNzaW9uXCIpO1xyXG4gIGlmIChub2RlLmNvbXB1dGVkKSB7IGMobm9kZS5wcm9wZXJ0eSwgc3QsIFwiRXhwcmVzc2lvblwiKTsgfVxyXG59O1xyXG5iYXNlLkV4cG9ydE5hbWVkRGVjbGFyYXRpb24gPSBiYXNlLkV4cG9ydERlZmF1bHREZWNsYXJhdGlvbiA9IGZ1bmN0aW9uIChub2RlLCBzdCwgYykge1xyXG4gIGlmIChub2RlLmRlY2xhcmF0aW9uKVxyXG4gICAgeyBjKG5vZGUuZGVjbGFyYXRpb24sIHN0LCBub2RlLnR5cGUgPT09IFwiRXhwb3J0TmFtZWREZWNsYXJhdGlvblwiIHx8IG5vZGUuZGVjbGFyYXRpb24uaWQgPyBcIlN0YXRlbWVudFwiIDogXCJFeHByZXNzaW9uXCIpOyB9XHJcbiAgaWYgKG5vZGUuc291cmNlKSB7IGMobm9kZS5zb3VyY2UsIHN0LCBcIkV4cHJlc3Npb25cIik7IH1cclxufTtcclxuYmFzZS5FeHBvcnRBbGxEZWNsYXJhdGlvbiA9IGZ1bmN0aW9uIChub2RlLCBzdCwgYykge1xyXG4gIGlmIChub2RlLmV4cG9ydGVkKVxyXG4gICAgeyBjKG5vZGUuZXhwb3J0ZWQsIHN0KTsgfVxyXG4gIGMobm9kZS5zb3VyY2UsIHN0LCBcIkV4cHJlc3Npb25cIik7XHJcbn07XHJcbmJhc2UuSW1wb3J0RGVjbGFyYXRpb24gPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcclxuICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IG5vZGUuc3BlY2lmaWVyczsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpXHJcbiAgICB7XHJcbiAgICB2YXIgc3BlYyA9IGxpc3RbaV07XHJcblxyXG4gICAgYyhzcGVjLCBzdCk7XHJcbiAgfVxyXG4gIGMobm9kZS5zb3VyY2UsIHN0LCBcIkV4cHJlc3Npb25cIik7XHJcbn07XHJcbmJhc2UuSW1wb3J0RXhwcmVzc2lvbiA9IGZ1bmN0aW9uIChub2RlLCBzdCwgYykge1xyXG4gIGMobm9kZS5zb3VyY2UsIHN0LCBcIkV4cHJlc3Npb25cIik7XHJcbn07XHJcbmJhc2UuSW1wb3J0U3BlY2lmaWVyID0gYmFzZS5JbXBvcnREZWZhdWx0U3BlY2lmaWVyID0gYmFzZS5JbXBvcnROYW1lc3BhY2VTcGVjaWZpZXIgPSBiYXNlLklkZW50aWZpZXIgPSBiYXNlLlByaXZhdGVJZGVudGlmaWVyID0gYmFzZS5MaXRlcmFsID0gaWdub3JlO1xyXG5cclxuYmFzZS5UYWdnZWRUZW1wbGF0ZUV4cHJlc3Npb24gPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcclxuICBjKG5vZGUudGFnLCBzdCwgXCJFeHByZXNzaW9uXCIpO1xyXG4gIGMobm9kZS5xdWFzaSwgc3QsIFwiRXhwcmVzc2lvblwiKTtcclxufTtcclxuYmFzZS5DbGFzc0RlY2xhcmF0aW9uID0gYmFzZS5DbGFzc0V4cHJlc3Npb24gPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHsgcmV0dXJuIGMobm9kZSwgc3QsIFwiQ2xhc3NcIik7IH07XHJcbmJhc2UuQ2xhc3MgPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcclxuICBpZiAobm9kZS5pZCkgeyBjKG5vZGUuaWQsIHN0LCBcIlBhdHRlcm5cIik7IH1cclxuICBpZiAobm9kZS5zdXBlckNsYXNzKSB7IGMobm9kZS5zdXBlckNsYXNzLCBzdCwgXCJFeHByZXNzaW9uXCIpOyB9XHJcbiAgYyhub2RlLmJvZHksIHN0KTtcclxufTtcclxuYmFzZS5DbGFzc0JvZHkgPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcclxuICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IG5vZGUuYm9keTsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpXHJcbiAgICB7XHJcbiAgICB2YXIgZWx0ID0gbGlzdFtpXTtcclxuXHJcbiAgICBjKGVsdCwgc3QpO1xyXG4gIH1cclxufTtcclxuYmFzZS5NZXRob2REZWZpbml0aW9uID0gYmFzZS5Qcm9wZXJ0eURlZmluaXRpb24gPSBiYXNlLlByb3BlcnR5ID0gZnVuY3Rpb24gKG5vZGUsIHN0LCBjKSB7XHJcbiAgaWYgKG5vZGUuY29tcHV0ZWQpIHsgYyhub2RlLmtleSwgc3QsIFwiRXhwcmVzc2lvblwiKTsgfVxyXG4gIGlmIChub2RlLnZhbHVlKSB7IGMobm9kZS52YWx1ZSwgc3QsIFwiRXhwcmVzc2lvblwiKTsgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgYW5jZXN0b3IsIGJhc2UsIGZpbmROb2RlQWZ0ZXIsIGZpbmROb2RlQXJvdW5kLCBmaW5kTm9kZUF0LCBmaW5kTm9kZUJlZm9yZSwgZnVsbCwgZnVsbEFuY2VzdG9yLCBtYWtlLCByZWN1cnNpdmUsIHNpbXBsZSB9O1xyXG4iXSwKICAibWFwcGluZ3MiOiAiQUFrQkEsU0FBUyxPQUFPLE1BQU0sVUFBVSxhQUFhLE9BQU8sVUFBVTtBQUM1RCxNQUFJLENBQUMsYUFBYTtBQUFFLGtCQUFjO0FBQUEsRUFDaEM7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SyxRQUFRLElBQUksWUFBWTtBQUFBLEVBQUc7QUFDdkQ7QUFDQSxLQUFLLHVCQUF1QixTQUFVLE1BQU0sSUFBSSxHQUFHO0FBQ2pELE1BQUksS0FBSyxVQUNQO0FBQUUsTUFBRSxLQUFLLFVBQVUsRUFBRTtBQUFBLEVBQUc7QUFDMUIsSUFBRSxLQUFLLFFBQVEsSUFBSSxZQUFZO0FBQ2pDO0FBQ0EsS0FBSyxvQkFBb0IsU0FBVSxNQUFNLElBQUksR0FBRztBQUM5QyxXQUFTLElBQUksR0FBRyxPQUFPLEtBQUssWUFBWSxJQUFJLEtBQUssUUFBUSxLQUFLLEdBQzVEO0FBQ0EsUUFBSSxPQUFPLEtBQUssQ0FBQztBQUVqQixNQUFFLE1BQU0sRUFBRTtBQUFBLEVBQ1o7QUFDQSxJQUFFLEtBQUssUUFBUSxJQUFJLFlBQVk7QUFDakM7QUFDQSxLQUFLLG1CQUFtQixTQUFVLE1BQU0sSUFBSSxHQUFHO0FBQzdDLElBQUUsS0FBSyxRQUFRLElBQUksWUFBWTtBQUNqQztBQUNBLEtBQUssa0JBQWtCLEtBQUsseUJBQXlCLEtBQUssMkJBQTJCLEtBQUssYUFBYSxLQUFLLG9CQUFvQixLQUFLLFVBQVU7QUFFL0ksS0FBSywyQkFBMkIsU0FBVSxNQUFNLElBQUksR0FBRztBQUNyRCxJQUFFLEtBQUssS0FBSyxJQUFJLFlBQVk7QUFDNUIsSUFBRSxLQUFLLE9BQU8sSUFBSSxZQUFZO0FBQ2hDO0FBQ0EsS0FBSyxtQkFBbUIsS0FBSyxrQkFBa0IsU0FBVSxNQUFNLElBQUksR0FBRztBQUFFLFNBQU8sRUFBRSxNQUFNLElBQUksT0FBTztBQUFHO0FBQ3JHLEtBQUssUUFBUSxTQUFVLE1BQU0sSUFBSSxHQUFHO0FBQ2xDLE1BQUksS0FBSyxJQUFJO0FBQUUsTUFBRSxLQUFLLElBQUksSUFBSSxTQUFTO0FBQUEsRUFBRztBQUMxQyxNQUFJLEtBQUssWUFBWTtBQUFFLE1BQUUsS0FBSyxZQUFZLElBQUksWUFBWTtBQUFBLEVBQUc7QUFDN0QsSUFBRSxLQUFLLE1BQU0sRUFBRTtBQUNqQjtBQUNBLEtBQUssWUFBWSxTQUFVLE1BQU0sSUFBSSxHQUFHO0FBQ3RDLFdBQVMsSUFBSSxHQUFHLE9BQU8sS0FBSyxNQUFNLElBQUksS0FBSyxRQUFRLEtBQUssR0FDdEQ7QUFDQSxRQUFJLE1BQU0sS0FBSyxDQUFDO0FBRWhCLE1BQUUsS0FBSyxFQUFFO0FBQUEsRUFDWDtBQUNGO0FBQ0EsS0FBSyxtQkFBbUIsS0FBSyxxQkFBcUIsS0FBSyxXQUFXLFNBQVUsTUFBTSxJQUFJLEdBQUc7QUFDdkYsTUFBSSxLQUFLLFVBQVU7QUFBRSxNQUFFLEtBQUssS0FBSyxJQUFJLFlBQVk7QUFBQSxFQUFHO0FBQ3BELE1BQUksS0FBSyxPQUFPO0FBQUUsTUFBRSxLQUFLLE9BQU8sSUFBSSxZQUFZO0FBQUEsRUFBRztBQUNyRDsiLAogICJuYW1lcyI6IFsibm9kZSIsICJvdmVycmlkZSIsICJGb3VuZCJdCn0K
