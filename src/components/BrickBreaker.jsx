import React, { useState, useEffect, useRef } from 'react';

const BrickBreaker = () => {
  const canvasRef = useRef(null);
  const [bricks, setBricks] = useState([]);
  const [ball, setBall] = useState({ x: 50, y: 50, dx: 2, dy: -2, radius: 10 });
  const [paddle, setPaddle] = useState({ height: 10, width: 75, x: 0 });
  const [rightPressed, setRightPressed] = useState(false);
  const [leftPressed, setLeftPressed] = useState(false);

  const brickRowCount = 3;
  const brickColumnCount = 5;
  const brickWidth = 75;
  const brickHeight = 20;
  const brickPadding = 10;
  const brickOffsetTop = 30;
  const brickOffsetLeft = 30;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    paddle.x = (canvas.width - paddle.width) / 2;
    setPaddle({ ...paddle });

    const bricksArray = [];
    for (let c = 0; c < brickColumnCount; c++) {
      bricksArray[c] = [];
      for (let r = 0; r < brickRowCount; r++) {
        bricksArray[c][r] = { x: 0, y: 0, status: 1 };
      }
    }
    setBricks(bricksArray);

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawBricks(context);
      drawBall(context);
      drawPaddle(context);
      collisionDetection();

      if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
        ball.dx = -ball.dx;
      }
      if (ball.y + ball.dy < ball.radius) {
        ball.dy = -ball.dy;
      } else if (ball.y + ball.dy > canvas.height - ball.radius) {
        if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
          ball.dy = -ball.dy;
        } else {
          document.location.reload();
        }
      }

      if (rightPressed && paddle.x < canvas.width - paddle.width) {
        paddle.x += 7;
      } else if (leftPressed && paddle.x > 0) {
        paddle.x -= 7;
      }

      ball.x += ball.dx;
      ball.y += ball.dy;

      setBall({ ...ball });
      setPaddle({ ...paddle });

      requestAnimationFrame(draw);
    };

    const keyDownHandler = (e) => {
      if (e.key === 'Right' || e.key === 'ArrowRight') {
        setRightPressed(true);
      } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
        setLeftPressed(true);
      }
    };

    const keyUpHandler = (e) => {
      if (e.key === 'Right' || e.key === 'ArrowRight') {
        setRightPressed(false);
      } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
        setLeftPressed(false);
      }
    };

    document.addEventListener('keydown', keyDownHandler, false);
    document.addEventListener('keyup', keyUpHandler, false);

    draw();

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
      document.removeEventListener('keyup', keyUpHandler);
    };
  }, []);

  const drawBricks = (context) => {
    bricks.forEach((column, c) => {
      column.forEach((brick, r) => {
        if (brick.status === 1) {
          const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
          const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
          brick.x = brickX;
          brick.y = brickY;
          context.beginPath();
          context.rect(brickX, brickY, brickWidth, brickHeight);
          context.fillStyle = '#0095DD';
          context.fill();
          context.closePath();
        }
      });
    });
  };

  const drawBall = (context) => {
    context.beginPath();
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    context.fillStyle = '#0095DD';
    context.fill();
    context.closePath();
  };

  const drawPaddle = (context) => {
    context.beginPath();
    context.rect(paddle.x, canvasRef.current.height - paddle.height, paddle.width, paddle.height);
    context.fillStyle = '#0095DD';
    context.fill();
    context.closePath();
  };

  const collisionDetection = () => {
    bricks.forEach((column, c) => {
      column.forEach((brick, r) => {
        if (brick.status === 1) {
          if (
            ball.x > brick.x &&
            ball.x < brick.x + brickWidth &&
            ball.y > brick.y &&
            ball.y < brick.y + brickHeight
          ) {
            ball.dy = -ball.dy;
            brick.status = 0;
            setBricks([...bricks]);
          }
        }
      });
    });
  };

  return (
    <div className="brick-breaker">
      <canvas ref={canvasRef} width="480" height="320" />
    </div>
  );
};

export default BrickBreaker;
