CREATE TABLE "entrega" (
    "id" TEXT NOT NULL,
    "entregue" BOOLEAN NOT NULL,
    "devolvida" BOOLEAN NOT NULL,
    "destinatarioId" TEXT NOT NULL REFERENCES destinatario(id),
    "usuarioId" TEXT NOT NULL REFERENCES usuario(id),
    
    CONSTRAINT "entrega_pkey" PRIMARY KEY ("id")
);