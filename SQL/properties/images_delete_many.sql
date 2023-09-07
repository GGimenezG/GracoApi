CREATE PROCEDURE `propertiesimages_delete_many`(
	IN iIdProperty INT,
	IN iDeleteIds text,
    IN iToken VARCHAR(45),
    IN iUser VARCHAR(45)
)
BEGIN
	DECLARE vValid INT;
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
    DECLARE vCount INT;
	-- Validar sesión
    CALL validateSession(iToken, iUser, @respuesta);
	SELECT @respuesta INTO vValid from dual;
    -- Si es valida.
    IF vValid = 1 THEN
		IF iDeleteTypes != '' THEN
		DELETE FROM images 
		WHERE FIND_IN_SET(CONVERT(id, CHAR), iDeleteTypes) AND idProperty = iIdProperty;
        ELSE
        SET oRes = 0;
        SET oMessage = 'Invalid images Ids';
		END IF;
		SET oRes = 1;
		SET oMessage = 'Deleted successfully';
	ELSE 
		SET oRes = 0;
        SET oMessage = 'Invalid session token';
	END IF;
    SELECT oRes as success, oMessage as message; -- retornamos respuesta
END