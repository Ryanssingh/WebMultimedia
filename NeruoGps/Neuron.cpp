x##include "math.h"
static int numInputs = 6;
static int numOutputs = 2;
static float growthFactor = .15;////need to change

float sigmoid(float x)
{
     float exp_value;
     float return_value;

     /*** Exponential calculation ***/
     exp_value = exp((double) -x);

     /*** Final sigmoid value ***/
     return_value = 1 / (1 + exp_value);
     return return_value;
}
void procces(int* in,int** filterLayer,int** proccesLayer,int** outputLayer){
  layer(in,filterLayer);
  layer(in,proccesLayer);
  layer(in,outputLayer);
}

void layer(int* in,int** layerWeights){
  int sizeLayerWeights = layerWeights/sizeof(int)
  int carryLayer[sizeof(layerWeights)]={0};
  copy(in,carryLayer);
  for (int i = 0; i < numInputs; i++) {
    for (int j = 0; j < numInputs; j++) {
      carryLayer[i]=in[j]*layerWeights[i][j];
    }
  }
  return carryLayer;
}

void copy(int* in int* copy){
  for (int i = 0; i < sizeof(in)/sizeof(int); i++) {
    copy[i] = in[i];
  }
}

int main(int argc, char const *argv[])
{
  int in[numInputs]={0};
  int filterLayer[numInputs][numInputs] = {0};
  int proccesLayer[numInputs+1][numInputs] ={0};
  int outputLayer[numOutputs] = {0};
  procces(in,filterLayer,proccesLayer,outputLayer)
  system("pause",in);
  return 0;
}
/*
int[] fLayer(int[] in){
  int carryLayer[numInputs]={0};
  carryLayer = copy(in);
  for (size_t i = 0; i < numInputs; i++) {
    for (size_t j = 0; j < numInputs; j++) {
      carryLayer[i]=in[j]*filterLayer[i][j];
    }
  }
  return carryLayer;
}*/
