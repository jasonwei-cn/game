function Game() {
	this.speed = 600
	this.remove = false
	this.gameover = false
	this.pause = false
	this.timer = null
	this.score = 0
	this.blockArea = []
	this.x = 150
	this.y = 0
	this.r1 = null
	this.r2 = null
	this.r3 = null
	this.r4 = null
	this.map = [
		// T 0 ----ok
		[
			[
				[this.x, this.y - 30],
				[this.x - 30, this.y],
				[this.x, this.y],
				[this.x + 30, this.y]
			], //ok
			[
				[this.x, this.y - 60],
				[this.x, this.y - 30],
				[this.x - 30, this.y - 30],
				[this.x, this.y]
			], //ok
			[
				[this.x - 30, this.y - 30],
				[this.x, this.y - 30],
				[this.x + 30, this.y - 30],
				[this.x, this.y]
			], //ok
			[
				[this.x, this.y - 60],
				[this.x, this.y - 30],
				[this.x + 30, this.y - 30],
				[this.x, this.y]
			] //ok
		],

		// L 1 ----ok
		[
			[
				[this.x, this.y - 60],
				[this.x, this.y - 30],
				[this.x, this.y],
				[this.x + 30, this.y]
			], //ok
			[
				[this.x + 30, this.y - 30],
				[this.x - 30, this.y],
				[this.x, this.y],
				[this.x + 30, this.y]
			], //ok
			[
				[this.x - 30, this.y - 60],
				[this.x, this.y - 60],
				[this.x, this.y - 30],
				[this.x, this.y]
			], //ok
			[
				[this.x - 30, this.y - 30],
				[this.x, this.y - 30],
				[this.x + 30, this.y - 30],
				[this.x - 30, this.y]
			] //ok
		],

		// J 2 ----ok
		[
			[
				[this.x, this.y - 60],
				[this.x, this.y - 30],
				[this.x, this.y],
				[this.x - 30, this.y]
			], //ok
			[
				[this.x - 30, this.y - 30],
				[this.x - 30, this.y],
				[this.x, this.y],
				[this.x + 30, this.y]
			], //ok
			[
				[this.x + 30, this.y - 60],
				[this.x, this.y - 60],
				[this.x, this.y - 30],
				[this.x, this.y]
			], //ok
			[
				[this.x - 30, this.y - 30],
				[this.x, this.y - 30],
				[this.x + 30, this.y - 30],
				[this.x + 30, this.y]
			] //ok
		],

		// O 3 ----ok
		[
			[
				[this.x - 30, this.y - 30],
				[this.x, this.y - 30],
				[this.x - 30, this.y],
				[this.x, this.y]
			], //ok
			[
				[this.x - 30, this.y - 30],
				[this.x, this.y - 30],
				[this.x - 30, this.y],
				[this.x, this.y]
			], //ok
			[
				[this.x - 30, this.y - 30],
				[this.x, this.y - 30],
				[this.x - 30, this.y],
				[this.x, this.y]
			], //ok
			[
				[this.x - 30, this.y - 30],
				[this.x, this.y - 30],
				[this.x - 30, this.y],
				[this.x, this.y]
			] //ok
		],

		// | 4 ----
		[
			[
				[this.x, this.y - 90],
				[this.x, this.y - 60],
				[this.x, this.y - 30],
				[this.x, this.y]
			], //ok
			[
				[this.x - 60, this.y],
				[this.x - 30, this.y],
				[this.x, this.y],
				[this.x + 30, this.y]
			], //ok
			[
				[this.x, this.y - 90],
				[this.x, this.y - 60],
				[this.x, this.y - 30],
				[this.x, this.y]
			], //ok
			[
				[this.x - 60, this.y],
				[this.x - 30, this.y],
				[this.x, this.y],
				[this.x + 30, this.y]
			] //ok
		],

		// Z 5 ----
		[
			[
				[this.x - 30, this.y - 30],
				[this.x, this.y - 30],
				[this.x, this.y],
				[this.x + 30, this.y]
			], //ok
			[
				[this.x, this.y - 60],
				[this.x, this.y - 30],
				[this.x - 30, this.y - 30],
				[this.x - 30, this.y]
			], //ok
			[
				[this.x - 30, this.y - 30],
				[this.x, this.y - 30],
				[this.x, this.y],
				[this.x + 30, this.y]
			], //ok
			[
				[this.x, this.y - 60],
				[this.x, this.y - 30],
				[this.x - 30, this.y - 30],
				[this.x - 30, this.y]
			] //ok
		]
	]
	this.startGame()
}

Game.prototype.wangge = function() {
	for(var i = 0; i < 15; i++) {
		for(var k = 0; k < 11; k++) {
			$('<div class="wangge"></div>').css({
				'top': i * 30 + 'px',
				'left': k * 30 + 'px'
			}).appendTo('#gameBox')
		}
	}
}

Game.prototype.getRandom = function() {
	this.r3 = Math.floor(Math.random() * 6)
	this.r4 = Math.floor(Math.random() * 4)
}

Game.prototype.yulan = function() {
	for(var i = 0; i < 4; i++) {
		$('<span class="block"></span>').css({
			'top': this.map[this.r3][this.r4][i][1] + 90 + 'px',
			'left': this.map[this.r3][this.r4][i][0] - 90 + 'px'
		}).attr('next', true).appendTo('.next')
	}
}

Game.prototype.createBlock = function() {
	this.r1 = this.r3
	this.r2 = this.r4
	for(var i = 0; i < 4; i++) {
		$('<span class="block"></span>').css({
			'top': this.map[this.r1][this.r2][i][1] + 'px',
			'left': this.map[this.r1][this.r2][i][0] + 'px'
		}).attr('move', true).appendTo('#gameBox')
	}
}

Game.prototype.autoMove = function() {
	var that = this;
	return $.Deferred(function(stop) {

		function move() {
			that.timer = setTimeout(function() {
				var dD0 = that.shifouMoveDown(0, 30)
				var dD1 = that.shifouMoveDown(1, 30)
				var dD2 = that.shifouMoveDown(2, 30)
				var dD3 = that.shifouMoveDown(3, 30)
				if(that.gameover == true) {
					alert('Game Over!')
					$('.mask').css({
						'display': 'flex'
					}).find('button').text('重玩')
					$('#gameBox').find('span').remove()
					$('.next').find('span').remove()
					$('.score').text('0')
				} else {
					$.when(dD0, dD1, dD2, dD3).then(function() {
						that.y += 30
						that.updateMap()
						$('.block[move=true]').each(function(i) {
							$(this).css({
								'top': that.map[that.r1][that.r2][i][1] + 'px'
							})
						})
						move()
					}).catch(function() {
						that.y = 0
						that.x = 150
						that.updateMap()
						that.shifouxiaochu()
						setTimeout(function() {
							if(that.remove == true) {
								that.remove = false

								setTimeout(function() {
									$('.score').animate({
										'font-size': '26px'
									}, 100).animate({
										'font-size': '26px'
									}, 500).animate({
										'font-size': '16px'
									}, 100)
									stop.resolve()
								}, 1000)
							} else {
								setTimeout(function() {
									stop.resolve()
								}, 100)
							}
						}, 10)
					})
				}
			}, that.speed)
		}
		move()
		$('#pause').click(function() {
			if(that.gameover == false) {
				if(that.pause == false) {
					clearTimeout(that.timer)
					that.pause = true
					console.log(that.pause)
					$(this).text('开始')
				} else {
					that.pause = false
					console.log(that.pause)
					move()
					$(this).text('暂停')
				}
			}
		})
	})
}

Game.prototype.shifouxiaochu = function() {
	var that = this
	$('.block[move=true]').each(function() {
		var top = $(this).position().top
		var left = $(this).position().left
		that.blockArea.push(top + '' + left)
		$(this).attr('top', top)
		$(this).attr('move', false)
		if($('.block[top=' + top + ']').length == 11) {
			that.score += 100
			that.remove = true
			var r0 = that.removes(0, top)
			var r1 = that.removes(1, top)
			var r2 = that.removes(2, top)
			var r3 = that.removes(3, top)
			var r4 = that.removes(4, top)
			var r5 = that.removes(5, top)
			var r6 = that.removes(6, top)
			var r7 = that.removes(7, top)
			var r8 = that.removes(8, top)
			var r9 = that.removes(9, top)
			var r10 = that.removes(10, top)
			$.when(r0, r1, r2, r3, r4, r5, r6, r7, r5, r6, r10).then(function() {
				$('.score').text(that.score)
				$('.block[move=false]').each(function() {
					if($(this).position().top < top) {
						var top1 = $(this).position().top
						var left1 = $(this).position().left
						var index = that.blockArea.indexOf(top1 + '' + left1)
						that.blockArea.splice(index, 1)
						$(this).css({
							'top': top1 + 30 + 'px'
						})
						that.blockArea.push($(this).position().top + '' + $(this).position().left)
						$(this).attr('top', $(this).position().top)
					}
				})
			})
		}
	})
}

Game.prototype.removes = function(i, t) {
	var that = this
	return $.Deferred(function(remove) {
		var top2 = $('.block[top=' + t + ']').eq(i).position().top
		var left2 = $('.block[top=' + t + ']').eq(i).position().left
		var index = that.blockArea.indexOf(top2 + '' + left2)
		that.blockArea.splice(index, 1)
		$('.block[top=' + t + ']').eq(i).animate({
			'opacity': '0'
		}, 100).animate({
			'opacity': '1'
		}, 100).animate({
			'opacity': '0'
		}, 100).animate({
			'opacity': '1'
		}, 100).animate({
			'opacity': '0'
		}, 500, function() {
			$(this).remove()
			remove.resolve()
		})
	})
}

Game.prototype.shifouMoveDown = function(i, y) {
	var that = this
	return $.Deferred(function(moveDown) {
		var top = that.map[that.r1][that.r2][i][1] + y
		var left = that.map[that.r1][that.r2][i][0]
		var blockPosition = top + '' + left
		if(top <= 420) {
			if(that.blockArea.indexOf(blockPosition) == -1) {
				moveDown.resolve()
			} else {
				if(top <= 30) {
					that.gameover = true
				} else {
					moveDown.reject()
				}
			}
		} else {
			moveDown.reject()
		}
	})
}

Game.prototype.shifouMoveLR = function(i, x) {
	var that = this
	return new Promise(function(resolve, reject) {
		var top = that.map[that.r1][that.r2][i][1]
		var left = that.map[that.r1][that.r2][i][0] + x
		var blockPosition = top + '' + left
		if(left >= 0 && left <= 300) {
			if(that.blockArea.indexOf(blockPosition) == -1) {
				resolve()
			} else {
				reject()
			}
		} else {
			reject()
		}
	})
}

Game.prototype.moveLeft = function() {
	var that = this
	if(this.pause == false) {
		this.x -= 30
		var pL0 = this.shifouMoveLR(0, -30)
		var pL1 = this.shifouMoveLR(1, -30)
		var pL2 = this.shifouMoveLR(2, -30)
		var pL3 = this.shifouMoveLR(3, -30)
		Promise.all([pL0, pL1, pL2, pL3]).then(function() {
			that.updateMap()
			$('.block[move=true]').each(function(i) {
				$(this).css({
					'left': that.map[that.r1][that.r2][i][0] + 'px'
				})
			})
		}).catch(function() {
			that.x += 30
		})
	}
}

Game.prototype.moveRight = function() {
	var that = this
	if(this.pause == false) {
		this.x += 30
		var pR0 = this.shifouMoveLR(0, 30)
		var pR1 = this.shifouMoveLR(1, 30)
		var pR2 = this.shifouMoveLR(2, 30)
		var pR3 = this.shifouMoveLR(3, 30)
		Promise.all([pR0, pR1, pR2, pR3]).then(function() {
			that.updateMap()
			$('.block[move=true]').each(function(i) {
				$(this).css({
					'left': that.map[that.r1][that.r2][i][0] + 'px'
				})
			})
		}).catch(function() {
			that.x -= 30
		})
	}
}

Game.prototype.fasterMoveDown = function() {
	this.speed = 50
}

Game.prototype.rotates = function() {
	var that = this
	if(this.pause == false) {
		that.r2 -= 1
		if(that.r2 < 0) {
			that.r2 = 3
		}
		var p0 = that.shifouRotate(0)
		var p1 = that.shifouRotate(1)
		var p2 = that.shifouRotate(2)
		var p3 = that.shifouRotate(3)
		Promise.all([p0, p1, p2, p3]).then(function() {
			$('.block[move=true]').each(function(i) {
				$(this).css({
					'top': that.map[that.r1][that.r2][i][1] + 'px',
					'left': that.map[that.r1][that.r2][i][0] + 'px'
				})
			})
		}).catch(function() {
			that.r2 += 1
			if(that.r2 > 3) {
				that.r2 = 0
			}
		})
	}
}

Game.prototype.shifouRotate = function(i) {
	var that = this
	return new Promise(function(resolve, reject) {
		var top = that.map[that.r1][that.r2][i][1]
		var left = that.map[that.r1][that.r2][i][0]
		var blockPosition = top + '' + left
		if(left >= 0 && left <= 300 && top <= 420) {
			if(that.blockArea.indexOf(blockPosition) == -1) {
				resolve()
			} else {
				reject()
			}
		} else {
			reject()
		}
	})
}

Game.prototype.controller = function() {
	var that = this
	window.onkeydown = function(e) {
		if(e.keyCode == 37) {
			that.moveLeft()
		} else if(e.keyCode == 39) {
			that.moveRight()
		} else if(e.keyCode == 40) {
			that.fasterMoveDown()
		} else if(e.keyCode == 38) {
			that.rotates()
		}
	}
	window.onkeyup = function(e) {
		if(e.keyCode == 40) {
			that.speed = 600
		}
	}
}

Game.prototype.startGame = function() {
	var that = this
	this.wangge()
	this.getRandom()

	function go() {
		that.createBlock()
		that.getRandom()
		that.yulan()
		that.controller()
		var isDown = that.autoMove()
		$.when(isDown).then(function() {
			$('span[next=true]').remove()
			go()
		})
	}
	go()
}

Game.prototype.updateMap = function() {
	this.map = [
		// T 0 ----ok
		[
			[
				[this.x, this.y - 30],
				[this.x - 30, this.y],
				[this.x, this.y],
				[this.x + 30, this.y]
			], //ok
			[
				[this.x, this.y - 60],
				[this.x, this.y - 30],
				[this.x - 30, this.y - 30],
				[this.x, this.y]
			], //ok
			[
				[this.x - 30, this.y - 30],
				[this.x, this.y - 30],
				[this.x + 30, this.y - 30],
				[this.x, this.y]
			], //ok
			[
				[this.x, this.y - 60],
				[this.x, this.y - 30],
				[this.x + 30, this.y - 30],
				[this.x, this.y]
			] //ok
		],

		// L 1 ----ok
		[
			[
				[this.x, this.y - 60],
				[this.x, this.y - 30],
				[this.x, this.y],
				[this.x + 30, this.y]
			], //ok
			[
				[this.x + 30, this.y - 30],
				[this.x - 30, this.y],
				[this.x, this.y],
				[this.x + 30, this.y]
			], //ok
			[
				[this.x - 30, this.y - 60],
				[this.x, this.y - 60],
				[this.x, this.y - 30],
				[this.x, this.y]
			], //ok
			[
				[this.x - 30, this.y - 30],
				[this.x, this.y - 30],
				[this.x + 30, this.y - 30],
				[this.x - 30, this.y]
			] //ok
		],

		// J 2 ----ok
		[
			[
				[this.x, this.y - 60],
				[this.x, this.y - 30],
				[this.x, this.y],
				[this.x - 30, this.y]
			], //ok
			[
				[this.x - 30, this.y - 30],
				[this.x - 30, this.y],
				[this.x, this.y],
				[this.x + 30, this.y]
			], //ok
			[
				[this.x + 30, this.y - 60],
				[this.x, this.y - 60],
				[this.x, this.y - 30],
				[this.x, this.y]
			], //ok
			[
				[this.x - 30, this.y - 30],
				[this.x, this.y - 30],
				[this.x + 30, this.y - 30],
				[this.x + 30, this.y]
			] //ok
		],

		// O 3 ----ok
		[
			[
				[this.x - 30, this.y - 30],
				[this.x, this.y - 30],
				[this.x - 30, this.y],
				[this.x, this.y]
			], //ok
			[
				[this.x - 30, this.y - 30],
				[this.x, this.y - 30],
				[this.x - 30, this.y],
				[this.x, this.y]
			], //ok
			[
				[this.x - 30, this.y - 30],
				[this.x, this.y - 30],
				[this.x - 30, this.y],
				[this.x, this.y]
			], //ok
			[
				[this.x - 30, this.y - 30],
				[this.x, this.y - 30],
				[this.x - 30, this.y],
				[this.x, this.y]
			] //ok
		],

		// | 4 ----
		[
			[
				[this.x, this.y - 90],
				[this.x, this.y - 60],
				[this.x, this.y - 30],
				[this.x, this.y]
			], //ok
			[
				[this.x - 60, this.y],
				[this.x - 30, this.y],
				[this.x, this.y],
				[this.x + 30, this.y]
			], //ok
			[
				[this.x, this.y - 90],
				[this.x, this.y - 60],
				[this.x, this.y - 30],
				[this.x, this.y]
			], //ok
			[
				[this.x - 60, this.y],
				[this.x - 30, this.y],
				[this.x, this.y],
				[this.x + 30, this.y]
			] //ok
		],

		// Z 5 ----
		[
			[
				[this.x - 30, this.y - 30],
				[this.x, this.y - 30],
				[this.x, this.y],
				[this.x + 30, this.y]
			], //ok
			[
				[this.x, this.y - 60],
				[this.x, this.y - 30],
				[this.x - 30, this.y - 30],
				[this.x - 30, this.y]
			], //ok
			[
				[this.x - 30, this.y - 30],
				[this.x, this.y - 30],
				[this.x, this.y],
				[this.x + 30, this.y]
			], //ok
			[
				[this.x, this.y - 60],
				[this.x, this.y - 30],
				[this.x - 30, this.y - 30],
				[this.x - 30, this.y]
			] //ok
		]
	]
}

$('#start').click(function() {
	$('.mask').css({
		'display': 'none'
	})
	new Game()
})