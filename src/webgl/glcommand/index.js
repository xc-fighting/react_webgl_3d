class GLCommand {
   init(gl) {
     this.gl = gl;
   }

   clear(r,g,b,a) {
       this.gl.clearColor(r,g,b,a);
       this.gl.clear(this.gl.COLOR_BUFFER_BIT);
   }
};

const GLC = new GLCommand();

export default GLC;