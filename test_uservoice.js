! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.aster_plot = t() : e.aster_plot = t()
}(window, (function() {
    return function(e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var a = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var a in e) n.d(r, a, function(t) {
                    return e[t]
                }.bind(null, a));
            return r
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 0)
    }([function(e, t) {
        looker.plugins.visualizations.add({
            options: {
                legend: {
                    section: "Data",
                    type: "string",
                    label: "Legend",
                    values: [{
                        Left: "left"
                    }, {
                        Right: "right"
                    }, {
                        Off: "off"
                    }],
                    display: "radio",
                    default: "off"
                },
                label_value: {
                    section: "Data",
                    type: "string",
                    label: "Data Labels",
                    values: [{
                        On: "on"
                    }, {
                        Off: "off"
                    }],
                    display: "radio",
                    default: "on"
                },
                center_value: {
                    section: "Data",
                    type: "string",
                    label: "Center Value",
                    values: [{
                        "Weighted Avg": "avg"
                    }, {
                        Min: "min"
                    }, {
                        Max: "max"
                    }, {
                        None: "off"
                    }],
                    display: "select",
                    default: "avg"
                },
                color_range: {
                    section: "Format",
                    order: 1,
                    type: "array",
                    label: "Color Range",
                    display: "colors",
                    default: ["#9E0041", "#C32F4B", "#E1514B", "#F47245", "#FB9F59", "#FEC574", "#FAE38C", "#EAF195", "#C7E89E", "#9CD6A4", "#6CC4A4", "#4D9DB4", "#4776B4", "#5E4EA1"]
                },
                inner_circle_color: {
                    section: "Format",
                    order: 2,
                    type: "string",
                    label: "Inner Circle",
                    display: "color",
                    default: "#ffffff"
                },
                text_color: {
                    section: "Format",
                    order: 3,
                    type: "string",
                    label: "Text Color",
                    display: "color",
                    default: "#000000"
                },
                font_size: {
                    section: "Format",
                    order: 4,
                    type: "number",
                    label: "Font Size",
                    display: "range",
                    min: 10,
                    max: 100,
                    default: 40
                },
                radius: {
                    section: "Data",
                    type: "number",
                    label: "Range Override",
                    placeholder: "Value represented by radius of circle"
                },
                threshold: {
                    section: "Format",
                    type: "number",
                    label: "Label Minimum Slice Size (radians)",
                    default: .2
                },
                label_size: {
                    section: "Format",
                    type: "number",
                    label: "Label Font Size (px)",
                    default: 10
                },
                chart_size: {
                    section: "Format",
                    order: 4,
                    type: "string",
                    label: "Chart Size",
                    default: "100%"
                }
            },
            create: function(e, t) {
                e.innerHTML = '\n        <style>\n          body {\n        font: 10px sans-serif;\n      }\n  \n      .axis path,\n      .axis line {\n        fill: none;\n        stroke: #000;\n        shape-rendering: crispEdges;\n      }\n  \n      .bar {\n        fill: orange;\n      }\n  \n      .solidArc:hover {\n        fill: orangered ;\n      }\n  \n      .solidArc {\n          -moz-transition: all 0.3s;\n          -o-transition: all 0.3s;\n          -webkit-transition: all 0.3s;\n          transition: all 0.3s;\n      }\n  \n      .x.axis path {\n        display: none;\n      }\n  \n      .aster-score {\n        line-height: 1;\n        font-weight: bold;\n      }\n  \n      .d3-tip {\n        line-height: 1;\n        font-weight: bold;\n        padding: 12px;\n        background: rgba(0, 0, 0, 0.8);\n        color: #fff;\n        border-radius: 2px;\n      }\n  \n      /* Creates a small triangle extender for the tooltip */\n      .d3-tip:after {\n        box-sizing: border-box;\n        display: inline;\n        font-size: 10px;\n        width: 100%;\n        line-height: 1;\n        color: rgba(0, 0, 0, 0.8);\n        content: "\\25BC";\n        position: absolute;\n        text-align: center;\n      }\n  \n      /* Style northward tooltips differently */\n      .d3-tip.n:after {\n        margin: -1px 0 0 0;\n        top: 100%;\n        left: 0;\n      }\n  \n      .legend rect {\n        fill:white;\n        stroke:black;\n        opacity:0.8;\n      }\n  \n        </style> ';
                var n = e.appendChild(document.createElement("div"));
                this.container = n, n.className = "d3-aster-plot", this._textElement = n.appendChild(document.createElement("div"))
            },
            updateAsync: function(e, t, n, r, a, l) {
                if (this.container.innerHTML = "", this.clearErrors(), function(e, t, n) {
                        var r = function(t, n, r, a, l) {
                                return !(!e.addError || !e.clearErrors || (r < a ? (e.addError({
                                    title: "Not Enough " + n + "s",
                                    message: "This visualization requires " + (a === l ? "exactly" : "at least") + " " + a + " " + n.toLowerCase() + (1 === a ? "" : "s") + ".",
                                    group: t
                                }), 1) : r > l ? (e.addError({
                                    title: "Too Many " + n + "s",
                                    message: "This visualization requires " + (a === l ? "exactly" : "no more than") + " " + l + " " + n.toLowerCase() + (1 === a ? "" : "s") + ".",
                                    group: t
                                }), 1) : (e.clearErrors(t), 0)))
                            },
                            a = t.fields,
                            l = a.pivots,
                            o = a.dimension_like,
                            i = a.measure_like;
                        return r("pivot-req", "Pivot", l.length, n.min_pivots, n.max_pivots) && r("dim-req", "Dimension", o.length, n.min_dimensions, n.max_dimensions) && r("mes-req", "Measure", i.length, n.min_measures, n.max_measures)
                    }(this, r, {
                        min_pivots: 0,
                        max_pivots: 0,
                        min_dimensions: 1,
                        max_dimensions: 1,
                        min_measures: 2,
                        max_measures: 2
                    })) {
                    var o = r.fields.dimension_like[0].name,
                        i = r.fields.measure_like[0].name,
                        s = r.fields.measure_like[1].name,
                        d = t.clientWidth - 30 - 30,
                        c = t.clientHeight - 30 - 30,
                        u = Math.min(d, c) / 2,
                        f = .3 * u;
                    if (!isNaN(parseFloat(n.chart_size))) {
                        var p = parseFloat(n.chart_size) / 100;
                        u *= p > 2 ? 2 : p < .2 ? .2 : p
                    }
                    n.color_range || (n.color_range = ["#9E0041", "#C32F4B", "#E1514B", "#F47245", "#FB9F59", "#FEC574", "#FAE38C", "#EAF195", "#C7E89E", "#9CD6A4", "#6CC4A4", "#4D9DB4", "#4776B4", "#5E4EA1"]);
                    for (var g = [], h = [], m = n.color_range.length, y = {}, x = 0; x < e.length; x++) {
                        if (x >= m) {
                            var v = Math.floor(x / m);
                            e[x].color = n.color_range[x - v * m]
                        } else e[x].color = n.color_range[x];
                        e[x].label = e[x][o].value, e[x].score = +e[x][i].value, e[x].weight = +e[x][s].value, e[x].width = +e[x][s].value, e[x].rendered = e[x][i].rendered ? e[x][i].rendered : e[x][i].value, g.push(e[x][i].value), h.push(e[x][s].value), y[e[x][o].value] = e[x][i].rendered ? e[x][i].rendered : e[x][i].value
                    }
                    if (n.radius ? console.log("Radius config set to: " + n.radius) : (console.log("Radius not set. Defaulting to max score: " + B(g)), n.radius = B(g)), n.keyword_search) {
                        for (x = 0; x < e.length; x++)
                            if (e[x].label.toLowerCase().includes(n.keyword_search.toLowerCase())) {
                                _ = e[x].weight, A = Math.min(...h), E = Math.max(...h);
                                var b = (_ - A) / (E - A);
                                e.splice(x, 1), f = (.4 * b + .2) * u;
                                break
                            }
                    } else var _ = Math.round(e.reduce((function(e, t) {
                            return e + t.score * t.weight
                        }), 0) / e.reduce((function(e, t) {
                            return e + t.weight
                        }), 0)),
                        A = Math.round(Math.min(...g)),
                        E = Math.round(Math.max(...g));
                    var k = d3.layout.pie().sort(null).value((function(e) {
                            return e.width
                        })),
                        C = d3.tip().attr("class", "d3-tip").offset([0, 0]).html((function(e) {
                            return e.data.label + ": <span style='color:orangered'>" + e.data.rendered + "</span>"
                        })),
                        w = d3.svg.arc().innerRadius(f).outerRadius((function(e) {
                            return (u - f) * (e.data.score / (1 * n.radius)) + f
                        })),
                        M = d3.svg.arc().innerRadius(f).outerRadius(u),
                        z = d3.select(".d3-aster-plot").append("svg").attr("width", d + 30 + 30).attr("height", c + 30 + 30).append("g").attr("transform", "translate(" + (d / 2 + 30) + "," + (c / 2 + 30) + ")");
                    z.call(C), z.append("circle").attr("cx", 0).attr("cy", 0).attr("r", f).attr("fill", n.inner_circle_color), z.append("svg:text").attr("class", "aster-score").attr("dy", ".35em").attr("text-anchor", "middle").style("fill", n.text_color).attr("font-size", n.font_size).text(() => {
                        if ("off" != n.center_value) return "avg" == n.center_value ? _ : "min" == n.center_value ? A : "max" == n.center_value ? E : void 0
                    }), z.append("text").attr("class", "score-sublabel").attr("dy", "2em").attr("text-anchor", "middle").style("fill", "#282828").attr("font-size", .4 * n.font_size).text(() => {
                        if ("off" != n.center_value) return "avg" == n.center_value ? "AVG" : "min" == n.center_value ? "MIN" : "max" == n.center_value ? "MAX" : void 0
                    }), z.selectAll(".solidArc").data(k(e)).enter().append("path").attr("data-legend", (function(e) {
                        return e.data.label
                    })).attr("fill", (function(e) {
                        return e.data.color
                    })).attr("class", "solidArc").attr("stroke", "gray").attr("d", w).on("mouseover", C.show).on("mouseout", C.hide), z.selectAll(".outlineArc").data(k(e)).enter().append("path").attr("fill", "none").attr("stroke", "gray").attr("class", "outlineArc").attr("d", M).each((function(e, t) {
                        var n = /(^.+?)L/.exec(d3.select(this).attr("d"))[1];
                        if (n = n.replace(/,/g, " "), F(e.startAngle, e.endAngle)) {
                            var r = /0 0 1 (.*?)$/.exec(n)[1],
                                a = /M(.*?)A/.exec(n)[1];
                            n = "M" + r + "A" + /A(.*?)0 0 1/.exec(n)[1] + "0 0 0 " + a
                        }
                        z.append("path").attr("class", "hiddenDonutArcs").attr("id", "sliceOutlineArc_" + t).attr("d", n).style("fill", "none")
                    })), "on" == n.label_value && (z.selectAll(".label-line-1").data(k(e)).enter().append("text").attr("class", "label-line-1").attr("dy", (function(e, t) {
                        return F(e.startAngle, e.endAngle) ? 18 : -21
                    })).append("textPath").attr("startOffset", "50%").style("text-anchor", "middle").attr("xlink:href", (function(e, t) {
                        return "#sliceOutlineArc_" + t
                    })).attr("font-size", n.label_size).text((function(e) {
                        if (e.endAngle - e.startAngle > n.threshold) return e.data.label
                    })), z.selectAll(".label-line-2").data(k(e)).enter().append("text").attr("class", "label-line-2").attr("dy", (function(e, t) {
                        return F(e.startAngle, e.endAngle) ? 28 : -11
                    })).append("textPath").attr("startOffset", "50%").style("text-anchor", "middle").attr("font-size", n.label_size).attr("xlink:href", (function(e, t) {
                        return "#sliceOutlineArc_" + t
                    })).text((function(e) {
                        if (e.endAngle - e.startAngle > n.threshold) return e.data.rendered
                    }))), "left" == n.legend ? z.append("g").attr("class", "legend").attr("transform", "translate(-" + d / 2.2 + " ,-" + c / 2.5 + ")").style("font-size", "12px").call(D) : "right" == n.legend && z.append("g").attr("class", "legend").attr("transform", "translate(" + d / 3 + " ,-" + c / 2.5 + ")").style("font-size", "12px").call(D), l()
                }

                function F(e, t) {
                    return O(t) > 90 && O(t) < 270 && O(t - e) < 180
                }

                function O(e) {
                    return 180 * e / Math.PI
                }

                function B(e) {
                    return Math.max.apply(null, e)
                }

                function D(e) {
                    return e.each((function() {
                        var e = d3.select(this),
                            t = {},
                            n = d3.select(e.property("nearestViewportElement")),
                            r = e.attr("data-style-padding") || 5,
                            a = e.selectAll(".legend-box").data([!0]),
                            l = e.selectAll(".legend-items").data([!0]);
                        a.enter().append("rect").classed("legend-box", !0), l.enter().append("g").classed("legend-items", !0), n.selectAll("[data-legend]").each((function() {
                            var e = d3.select(this);
                            t[e.attr("data-legend")] = {
                                pos: e.attr("data-legend-pos") || this.getBBox().y,
                                color: null != e.attr("data-legend-color") ? e.attr("data-legend-color") : "none" != e.style("fill") ? e.style("fill") : e.style("stroke"),
                                rendered: "100"
                            }
                        })), t = d3.entries(t).sort((function(e, t) {
                            return e.key < t.key ? -1 : e.key > t.key ? 1 : 0
                        }));
                        for (var o = 0; o < t.length; o++) console.log(t[o]), console.log(y[t[o].key]), t[o].value.rendered = y[t[o].key];
                        l.selectAll("text").data(t, (function(e) {
                            return e.key
                        })).call((function(e) {
                            e.enter().append("text")
                        })).call((function(e) {
                            e.exit().remove()
                        })).attr("y", (function(e, t) {
                            return t + "em"
                        })).attr("x", "1em").text((function(e) {
                            return e.key + " " + e.value.rendered
                        })), l.selectAll("circle").data(t, (function(e) {
                            return e.key
                        })).call((function(e) {
                            e.enter().append("circle")
                        })).call((function(e) {
                            e.exit().remove()
                        })).attr("cy", (function(e, t) {
                            return t - .25 + "em"
                        })).attr("cx", 0).attr("r", "0.4em").style("fill", (function(e) {
                            return e.value.color
                        }));
                        var i = l[0][0].getBBox();
                        a.attr("x", i.x - r).attr("y", i.y - r).attr("height", i.height + 2 * r).attr("width", i.width + 2 * r)
                    })), e
                }
            }
        })
    }])
}));
