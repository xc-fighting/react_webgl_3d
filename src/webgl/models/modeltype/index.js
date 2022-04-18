import GLC from "../../glcommand";

export default class ModelType {
  constructor(vertices, indices) {
      this.vertices = vertices;
      this.indices = indices;
  }

  _genVertexBuffer() {
      this.vertexBuffer = GLC.createBuffer();
      GLC.bindArrayBuffer(this.vertexBuffer);
      GLC.addArrayBufferData(this.vertices);
      GLC.unbindArrayBuffer();
  }
};