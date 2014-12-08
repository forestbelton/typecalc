{

function node(x) {
  return {
    value:    x,
    children: Array.prototype.slice.call(arguments, 1)
  };
}

}

arith_ty
  = l:lhs '=' ws e:rhs { l.rhs = e; return l; }

lhs
  = c:call { return { name: c.children[0], params: c.children[1] }; }
  / n:name { return { name: n, params: [] }; }

name_list
  = n:name ',' ws ns:name_list { return [n].concat(ns); }
  / n:name { return [n]; }

rhs
  = sum

sum
  = left:prod "+" ws right:sum { return [left].concat(right); }
  / p:prod { return [p]; }

prod
  = left:base "*" ws right:prod { return node('*', left, right); }
  / base

call
  = n:name '(' ws ns:name_list ')' ws { return node('call', n, ns); }

base
  = num
  / call
  / name

num
  = '0' ws { return 0; }
  / h:[1-9] t:[0-9]* ws { return parseInt(h + t.join(''), 10); }

name
  = s:[a-zA-Z]+ ws { return s.join(''); }

ws
  = [ \r\t\n]*