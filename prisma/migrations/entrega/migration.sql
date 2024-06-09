CREATE TABLE "entrega" (
    "id" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "entregue" BOOLEAN NOT NULL,
    "devolvida" BOOLEAN NOT NULL,
    
    CONSTRAINT "entrega_pkey" PRIMARY KEY ("id")
);