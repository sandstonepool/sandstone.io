<style scoped>
summary {
  cursor: pointer;
}

details {
    margin: 20px;
}

details summary::before {
  padding-right: 0.25rem;
  content: "+ ";
}

details[open] summary::before {
  padding-right: 0.25rem;
  content: "- ";
  transform: rotate(24deg);
}

details[open] summary ~ * {
  animation: sweep 0.5s ease-in-out;
}

@keyframes sweep {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

<template>
     <box>
        <details>
          <summary>{{title}}</summary>
          <div><slot></slot></div>
        </details>
      </box>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>