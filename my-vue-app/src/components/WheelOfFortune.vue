<template>
    <div>
      <canvas id="wheel" width="500" height="500"></canvas>
      <button @click="spin" class="spin-button">Drehen</button>
      <div v-if="selectedFish" class="selected-fish">
        <h2>Fish of the Week</h2>
        <h3>{{ selectedFish.name }}</h3>
        <img :src="selectedFish.image" alt="Fish image" />
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'WheelOfFortune',
    data() {
      return {
        fishes: [],
        selectedFish: null,
        spinning: false
      };
    },
    created() {
      this.fetchFishes();
    },
    methods: {
      fetchFishes() {
        axios.get('https://dein-backend-url/fishes')
          .then(response => {
            this.fishes = response.data;
          });
      },
      spin() {
        if (this.spinning) return;
  
        this.spinning = true;
  
        const totalSlices = this.fishes.length;
        const anglePerSlice = 360 / totalSlices;
        const randomAngle = Math.floor(Math.random() * 360);
        const canvas = document.getElementById('wheel');
        const ctx = canvas.getContext('2d');
        let currentAngle = 0;
  
        const spinDuration = 3000;
        const startTime = Date.now();
  
        const animateSpin = () => {
          const now = Date.now();
          const elapsed = now - startTime;
  
          if (elapsed >= spinDuration) {
            const selectedSlice = Math.floor((currentAngle % 360) / anglePerSlice);
            this.selectedFish = this.fishes[selectedSlice];
            this.$emit('fish-selected', this.selectedFish);
            this.spinning = false;
            return;
          }
  
          const progress = elapsed / spinDuration;
          const easeOutProgress = 1 - Math.pow(1 - progress, 4);
          currentAngle = easeOutProgress * 360 * 5; // 5 Umdrehungen
  
          this.drawWheel(ctx, currentAngle);
          requestAnimationFrame(animateSpin);
        };
  
        animateSpin();
      },
      drawWheel(ctx, angle) {
        const totalSlices = this.fishes.length;
        const anglePerSlice = 360 / totalSlices;
  
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  
        this.fishes.forEach((fish, index) => {
          const startAngle = ((index * anglePerSlice - angle) * Math.PI) / 180;
          const endAngle = (((index + 1) * anglePerSlice - angle) * Math.PI) / 180;
  
          ctx.beginPath();
          ctx.moveTo(ctx.canvas.width / 2, ctx.canvas.height / 2);
          ctx.arc(
            ctx.canvas.width / 2,
            ctx.canvas.height / 2,
            ctx.canvas.width / 2,
            startAngle,
            endAngle
          );
          ctx.closePath();
  
          ctx.fillStyle = this.getRandomColor();
          ctx.fill();
  
          ctx.save();
          ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
          ctx.rotate(((startAngle + endAngle) / 2) + Math.PI / 2);
          ctx.fillStyle = '#fff';
          ctx.font = 'bold 16px Arial';
          ctx.fillText(
            fish.name,
            10 - ctx.measureText(fish.name).width / 2,
            -ctx.canvas.height / 2 + 50
          );
          ctx.restore();
        });
  
        ctx.save();
        ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
        ctx.rotate(0);
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.moveTo(-10, -ctx.canvas.height / 2);
        ctx.lineTo(10, -ctx.canvas.height / 2);
        ctx.lineTo(0, -ctx.canvas.height / 2 + 20);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      },
      getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    }
  };
  </script>
  
  <style scoped>
  .spin-button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;
  }
  
  .spin-button:hover {
    background-color: #45a049;
  }
  
  .selected-fish {
    margin-top: 20px;
  }
  
  .selected-fish h2 {
    margin: 0;
  }
  
  .selected-fish img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  </style>
  