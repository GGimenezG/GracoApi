CREATE PROCEDURE `postsimages_get`(
	IN iIdPost INT,
    IN iToken VARCHAR(45),
    IN iUser VARCHAR(45)
)
BEGIN
	-- Declaramos variables a usar
	DECLARE vValid INT;
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
    -- Validar la sesion según el token y el usuario ingresado.    
    CALL validateSession(iToken, iUser, @respuesta);
	SELECT @respuesta INTO vValid from dual;
    IF vValid = 1 THEN -- Si la sesión es valida
		SELECT pi.id, pi.url, pi.order
		FROM postsimages pi
		WHERE pi.status = 'A' AND pi.idPost = iIdPost
        ORDER BY pi.order;
		SET oRes = 1;
		SET oMessage = 'Get data successfully';
	ELSE 
		SET oRes = 0;
        SET oMessage = 'Invalid session token';
	END IF;
    SELECT oRes as success, oMessage as message;
END