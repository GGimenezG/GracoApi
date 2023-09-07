CREATE PROCEDURE `propertiesimages_get`(
	IN iIdProperty INT
)
BEGIN
	-- Declaramos variables a usar
	DECLARE vValid INT;
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
    -- Validar la sesion según el token y el usuario ingresado.    
  
		SELECT pi.id, pi.url, pi.order, pi.cloudinaryPublicId
		FROM propertiesimages pi 
		WHERE pi.status = 'A' AND pi.idProperty = iIdProperty
        ORDER BY pi.order;
		SET oRes = 1;
		SET oMessage = 'Get data successfully';
	
    SELECT oRes as success, oMessage as message;
END